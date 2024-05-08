import Header from "../../components/Header";
import ListaDeRestaurantes from "../../components/ListaDeRestaurantes";
import { useEffect, useState } from "react";
import { useGetListaRestaurantesQuery } from "../../services/api";

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
    const {data: restaurantes} = useGetListaRestaurantesQuery()

    if (restaurantes) {
        return (
            <>
                <Header/>
                <div className="container">
                    <ListaDeRestaurantes restaurantes={restaurantes}/>
                </div>
            </>
        )
    }

    return (
        <h3>Carregando...</h3>
    )
}

export default Home