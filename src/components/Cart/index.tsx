import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import Button from "../Button"
import Checkout from "../Checkout"

import { RootReducer } from "../../store"
import { close, remove } from "../../store/reducers/cart"
import { getTotalPrice, parseToBrl } from "../../utils"

import { CartItem, CartContainer, Overlay, Prices, SideBar } from "./styles"

const Cart = () => {
    const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
    const dispatch = useDispatch()
    const [ isPaying, setIsPaying] = useState(false)

    const closeCart = () => {
        if(!isPaying) dispatch(close())
    }

    const removeItem = (id: number) => {
        dispatch(remove(id))
    }

    return (
        <CartContainer className={isOpen ? "is-open" : ""}>
            <Overlay onClick={closeCart}/>
            <SideBar>
                {isPaying && (
                    <Checkout voltarCart={() => setIsPaying(false)} fecharCart={() => dispatch(close())} deixarSair={() => setIsPaying(false)}/>
                )}
                {items.length > 0 && !isPaying && (
                    <>
                        <ul>
                            {items.map((item) => (
                                <CartItem key={item.id}>
                                    <img src={item.foto} alt={item.nome} />
                                    <div>
                                        <h3>{item.nome}</h3>
                                        <span>{parseToBrl(item.preco)}</span>
                                    </div>
                                    <button type="button" onClick={() => removeItem(item.id)}/>
                                </CartItem>
                            ))}
                        </ul>
                        <Prices>
                            <span>Valor total</span>
                            {parseToBrl(getTotalPrice(items))}
                        </Prices>
                        <Button title="Clique aqui para contnuar com a compra" onClick={() => setIsPaying(true)} type="button">Continuar com a Entrega</Button>
                    </>
                )}
                {items.length === 0 && !isPaying && (
                    <p className="empty-text">
                        O carrinho esta vazio, adicione pelo menos um produto para continuar com a compra!
                    </p>
                )}
            </SideBar>
        </CartContainer>
    )
}

export default Cart