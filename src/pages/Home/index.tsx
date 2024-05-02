import Header from "../../components/Header";
import ListaDeRestaurantes from "../../components/ListaDeRestaurantes";
import Restaurante from "../../models/Restaurante";
import sushi from "../../assets/images/sushi.png"

const restaurantes: Restaurante[] = [
    {
        id: 1,
        nome: "Hioki Sushi",
        descricao: "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!",
        estrelas: 4.9,
        tipo: "Japonesa",
        imagem: sushi,
        destaque: true
    },
    {
        id: 2,
        nome: "Hioki Sushi",
        descricao: "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!",
        estrelas: 4.9,
        tipo: "Japonesa",
        imagem: sushi,
        destaque: false
    },
    {
        id: 3,
        nome: "Hioki Sushi",
        descricao: "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!",
        estrelas: 4.9,
        tipo: "Japonesa",
        imagem: sushi,
        destaque: false
    },
    {
        id: 4,
        nome: "Hioki Sushi",
        descricao: "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!",
        estrelas: 4.9,
        tipo: "Japonesa",
        imagem: sushi,
        destaque: false
    },
    {
        id: 5,
        nome: "Hioki Sushi",
        descricao: "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!",
        estrelas: 4.9,
        tipo: "Japonesa",
        imagem: sushi,
        destaque: false
    },
    {
        id: 6,
        nome: "Hioki Sushi",
        descricao: "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!",
        estrelas: 4.9,
        tipo: "Japonesa",
        imagem: sushi,
        destaque: false
    }
]

const Home = () => (
    <>
        <Header/>
        <div className="container">
            <ListaDeRestaurantes restaurantes={restaurantes}/>
        </div>
    </>
)

export default Home