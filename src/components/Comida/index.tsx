import { Botao, Card, CardContent, Descricao, Image, Titulo } from "./styles"

type Props = {
    comida: ComidaModel
}

const Comida = ({ comida }: Props) => (
    <Card>
        <CardContent>
            <Image src={comida.foto} alt={comida.nome} />
            <Titulo>{comida.nome}</Titulo>
            <Descricao>
                {comida.descricao}
            </Descricao>
        </CardContent>
        <div>
            <Botao>Adicionar ao Carrinho</Botao>
        </div>
    </Card>
)

export default Comida