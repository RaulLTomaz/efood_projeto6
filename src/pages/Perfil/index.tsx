import BannerPerfil from "../../components/BannerPerfil"
import Header from "../../components/Header"
import ListaDeComidas from "../../components/ListaDeComidas"
import Comida from "../../models/comida"
import pizza from "../../assets/images/pizza.png"

const comidas: Comida[] = [
    {
        id: 1,
        nome: "Pizza Marguerita",
        descricao: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        imagem: pizza
    },
    {
        id: 2,
        nome: "Pizza Marguerita",
        descricao: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        imagem: pizza
    },
    {
        id: 3,
        nome: "Pizza Marguerita",
        descricao: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        imagem: pizza
    },
    {
        id: 4,
        nome: "Pizza Marguerita",
        descricao: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        imagem: pizza
    },
    {
        id: 5,
        nome: "Pizza Marguerita",
        descricao: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        imagem: pizza
    },
    {
        id: 6,
        nome: "Pizza Marguerita",
        descricao: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        imagem: pizza
    },
    {
        id: 7,
        nome: "Pizza Marguerita",
        descricao: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        imagem: pizza
    },
    {
        id: 8,
        nome: "Pizza Marguerita",
        descricao: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        imagem: pizza
    },
    {
        id: 9,
        nome: "Pizza Marguerita",
        descricao: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        imagem: pizza
    }
]

const Perfil = () => (
    <>
        <Header type="perfil" />
        <BannerPerfil/>
        <ListaDeComidas comidas={comidas}/>
    </>
)

export default Perfil