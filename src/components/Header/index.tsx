import { Fundo, LogoHome, TituloHome, Voltar } from "./styles"
import logo from "../../assets/images/logo.svg"
import { Link } from "react-router-dom"

export type Props = {
    type?: "home" | "perfil"
}

const Header = ({ type = "home" }: Props) => (
    <Fundo type={type}>
        <div className="container">
            {type === "home" ? (
                <>
                    <LogoHome src={logo} alt="efood"/>
                    <TituloHome>Viva experiências gastronômicas <br /> no conforto da sua casa</TituloHome>
                </>
            ) : (
                <>
                    <Voltar to="/">
                        Restaurantes
                    </Voltar>
                    <div>
                        <img src={logo} alt="efood"/>
                    </div>
                    <div>
                        0 produto(s) no carrinho
                    </div>
                </>
            )}
        </div>
    </Fundo>
)

export default Header