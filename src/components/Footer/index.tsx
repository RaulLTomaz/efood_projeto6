import { Aviso, FooterBar, LogoESocial, Socials } from "./styles"
import logo from "../../assets/images/logo.svg"
import instagram from "../../assets/images/instagram.png"
import facebook from "../../assets/images/facebook.png"
import twitter from "../../assets/images/twitter.png"

const Footer = () => (
    <FooterBar>
        <div className="container">
            <LogoESocial>
                <img src={logo} alt="efood" />
                <Socials>
                    <img src={instagram} alt="instagram" />
                    <img src={facebook} alt="facebook" />
                    <img src={twitter} alt="twitter" />
                </Socials>
            </LogoESocial>
            <Aviso>
                A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. 
            </Aviso>
        </div>
    </FooterBar>
)

export default Footer