import { Botao, Card, Descricao, Estrela, Image, Info, TituloEEstrela } from "./styles"
import estrela from "../../assets/images/estrela.png"
import Tag from "../Tag"
import { Link } from "react-router-dom"

type Props = {
    id: number
    nome: string
    descricao: string
    estrelas: number
    tipo: string
    imagem: string
    destaque: boolean
}

const Restaurante = ({ id, nome, descricao, estrelas, tipo, imagem, destaque }: Props) => (
    <Card>
        <Image src={imagem} alt={nome} />
        <Info>
            {destaque && <Tag>Destaque da Semana</Tag>}
            <Tag>{tipo}</Tag>
        </Info>
        <TituloEEstrela>
            <h3>{nome}</h3>
            <Estrela>{estrelas} <img src={estrela} alt="estrela" /></Estrela>
        </TituloEEstrela>
        <Descricao>
            {descricao}
        </Descricao>
        <Link to={`/perfil/${id}`}>
            <Botao>Sabia Mais</Botao>
        </Link>
    </Card>
)

export default Restaurante