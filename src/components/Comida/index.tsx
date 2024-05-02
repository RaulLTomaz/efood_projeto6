import { Botao, Card, Descricao, Titulo } from "./styles"
import pizza from "../../assets/images/pizza.png"

type Props = {
    nome: string
    descricao: string
    imagem: string
}

const Comida = ({ nome, descricao, imagem }: Props) => (
    <Card>
        <img src={imagem} alt={nome} />
        <Titulo>{nome}</Titulo>
        <Descricao>
            {descricao}
        </Descricao>
        <Botao>Adicionar ao Carrinho</Botao>
    </Card>
)

export default Comida