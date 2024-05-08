import BannerPerfil from "../../components/BannerPerfil"
import Header from "../../components/Header"
import ListaDeComidas from "../../components/ListaDeComidas"
import { useParams } from "react-router-dom"
import { useGetRestauranteQuery } from "../../services/api"

const Perfil = () => {
    const { id } = useParams()

    const { data: restaurante} = useGetRestauranteQuery(id!)

    if(!restaurante) {
        return (
            <h3>Carregando...</h3>
        )
    }
    
    return (
        <>
            <Header type="perfil" />
            <BannerPerfil nome={restaurante.titulo} tipo={restaurante.tipo} imagem={restaurante.capa}/>
            <ListaDeComidas restaurante={restaurante}/>
        </>
    )
}

export default Perfil