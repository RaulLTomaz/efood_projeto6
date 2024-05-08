import { RestauranteModel } from "../../pages/Home"
import Restaurante from "../Restaurante"
import { Container } from "./styles"

type Props = {
    restaurantes: RestauranteModel[]
}

const ListaDeRestaurantes = ({ restaurantes }: Props) => (
    <Container>
        {restaurantes.map(rest => (
            <Restaurante key={rest.id} id={rest.id} nome={rest.titulo} descricao={rest.descricao} estrelas={rest.avaliacao} tipo={rest.tipo} imagem={rest.capa} destaque={rest.destacado} />
        ))}
    </Container> 
)

export default ListaDeRestaurantes