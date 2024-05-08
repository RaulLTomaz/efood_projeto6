import Button from "../Button"
import { CartItem, CartContainer, Overlay, Prices, SideBar } from "./styles"
import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../../store"
import { close, remove } from "../../store/reducers/cart"
import { formataPreco } from "../ListaDeComidas"

const Cart = () => {
    const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
    const dispatch = useDispatch()

    const closeCart = () => {
        dispatch(close())
    }

    const getTotalPrice = () => {
        return items.reduce((acumulador, valorAtual) => {
            return (acumulador += valorAtual.preco!)
        }, 0)
    }

    const removeItem = (id: number) => {
        dispatch(remove(id))
    }

    return (
        <CartContainer className={isOpen ? "is-open" : ""}>
            <Overlay onClick={closeCart}/>
            <SideBar>
                <ul>
                    {items.map((item) => (
                        <CartItem key={item.id}>
                            <img src={item.foto} alt={item.nome} />
                            <div>
                                <h3>{item.nome}</h3>
                                <span>{formataPreco(item.preco)}</span>
                            </div>
                            <button type="button" onClick={() => removeItem(item.id)}/>
                        </CartItem>
                    ))}
                </ul>
                <Prices>
                    <span>Valor total</span>
                    {formataPreco(getTotalPrice())}
                </Prices>
                <Button title="Clique aqui para contnuar com a compra">Continuar com a Entrega</Button>
            </SideBar>
        </CartContainer>
    )
}

export default Cart