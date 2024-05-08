import { BannerFundo, Tipo, Titulo } from "./styles"

type Props = {
    imagem: string
    tipo: string
    nome: string
}

const BannerPerfil = ({ imagem, tipo, nome }: Props) => (
    <BannerFundo style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) ,url(${imagem})` }}>
        <div className="container">
            <Tipo>{tipo}</Tipo>
            <Titulo>{nome}</Titulo>
        </div>
    </BannerFundo>
)

export default BannerPerfil