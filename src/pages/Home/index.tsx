import Header from "../../components/Header";
import ListaDeRestaurantes from "../../components/ListaDeRestaurantes";
import { useEffect, useState } from "react";
import { useGetListaRestaurantesQuery } from "../../services/api";

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