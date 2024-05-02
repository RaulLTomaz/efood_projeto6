import { Botao, Card, Descricao, Estrela, Info, TituloEEstrela } from "./styles"
import estrela from "../../assets/images/estrela.png"
import Tag from "../Tag"
import { Link } from "react-router-dom"

type Props = {
    nome: string
    descricao: string
    estrelas: number
    tipo: string
    imagem: string
    destaque: boolean
}

const Restaurante = ({ nome, descricao, estrelas, tipo, imagem, destaque }: Props) => (
    <Card>
        <img src={imagem} alt={nome} />
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
        <Link to="/perfil">
            <Botao>Sabia Mais</Botao>
        </Link>
    </Card>
)

export default Restaurante