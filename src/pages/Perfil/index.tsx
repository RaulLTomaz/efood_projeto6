import BannerPerfil from "../../components/BannerPerfil"
import Header from "../../components/Header"
import ListaDeComidas from "../../components/ListaDeComidas"
import { useEffect, useState } from "react"
import { RestauranteModel } from "../Home"
import { useParams } from "react-router-dom"

const Perfil = () => {
    const { id } = useParams()

    const [restaurante, setRestaurante] = useState<RestauranteModel>()

    useEffect(() => {
        fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
            .then(res => res.json())
            .then(json => setRestaurante(json))
    }, [id])

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