import ComidaModel from "../../models/comida"
import Comida from "../Comida"
import { Container } from "./styles"

type Props = {
    comidas: ComidaModel[]
}

const ListaDeComidas = ({ comidas }: Props) => (
    <div className="container">
        <Container>
        {comidas.map(comida => (
            <Comida key={comida.id} nome={comida.nome} descricao={comida.descricao} imagem={comida.imagem} />
        ))}
        </Container>
    </div>
)

export default ListaDeComidas