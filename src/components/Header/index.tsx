import { CartButton, Fundo, LogoHome, TituloHome, Voltar } from "./styles"
import logo from "../../assets/images/logo.svg"
import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../../store"
import { open, clear } from "../../store/reducers/cart"

export type Props = {
    type?: "home" | "perfil"
}

const Header = ({ type = "home" }: Props) => {
    const dispatch = useDispatch()
    const { items } = useSelector((state: RootReducer) => state.cart)

    const openCart = () => {
        dispatch(open())
    }

    const clearCart = () => {
        dispatch(clear())
    }

    return (
        <Fundo type={type}>
            <div className="container">
                {type === "home" ? (
                    <>
                        <LogoHome src={logo} alt="efood"/>
                        <TituloHome>Viva experiências gastronômicas <br /> no conforto da sua casa</TituloHome>
                    </>
                ) : (
                    <>
                        <Voltar to="/" onClick={clearCart}>
                            Restaurantes
                        </Voltar>
                        <div>
                            <img src={logo} alt="efood"/>
                        </div>
                        <CartButton onClick={openCart}>
                            {items.length} - Produto(s) no carrinho
                        </CartButton>
                    </>
                )}
            </div>
        </Fundo>
    )
}

export default Header