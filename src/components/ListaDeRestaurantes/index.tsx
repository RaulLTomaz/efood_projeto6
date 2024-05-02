import RestauranteModel from "../../models/Restaurante"
import Restaurante from "../Restaurante"
import { Container } from "./styles"

type Props = {
    restaurantes: RestauranteModel[]
}

const ListaDeRestaurantes = ({ restaurantes }: Props) => (
    <Container>
        {restaurantes.map(rest => (
            <Restaurante key={rest.id} nome={rest.nome} descricao={rest.descricao} estrelas={rest.estrelas} tipo={rest.tipo} imagem={rest.imagem} destaque={rest.destaque} />
        ))}
    </Container> 
)

export default ListaDeRestaurantes