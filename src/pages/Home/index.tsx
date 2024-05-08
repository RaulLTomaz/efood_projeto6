import Header from "../../components/Header";
import ListaDeRestaurantes from "../../components/ListaDeRestaurantes";
import { useEffect, useState } from "react";

export type RestauranteModel = {
    id: number,
    titulo: string,
    destacado: boolean,
    tipo: string,
    avaliacao: number,
    descricao: string,
    capa: string,
    cardapio: ComidaModel[]
}

export type ComidaModel = {
    foto: string,
    preco: number,
    id: number,
    nome: string,
    descricao: string,
    porcao: string
}

const Home = () => {
    const [restaurantes, setRestaurantes] = useState<RestauranteModel[]>([])

    useEffect(() => {
        fetch("https://fake-api-tau.vercel.app/api/efood/restaurantes")
            .then(res => res.json())
            .then(json => setRestaurantes(json))
    }, [])

    return (
        <>
            <Header/>
            <div className="container">
                <ListaDeRestaurantes restaurantes={restaurantes}/>
            </div>
        </>
    )
}

export default Home