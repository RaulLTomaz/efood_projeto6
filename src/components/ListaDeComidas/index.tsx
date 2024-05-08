import { useState } from "react"
import { ComidaModel, RestauranteModel } from "../../pages/Home"
import Comida from "../Comida"
import { Container, FecharImg, ImagemModal, Lista, Modal, ModalBotao, ModalContainer, ModalContent, ModalDescricao, ModalTitulo } from "./styles"
import fechar from "../../assets/images/fechar.png"

type Props = {
    restaurante: RestauranteModel
}

const ListaDeComidas = ({ restaurante }: Props) => {
    const [modal, setModal] = useState(false)
    const [comidaModal, setComidaModal] = useState<ComidaModel>()

    const priceFormat = (price: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(price)
    }

    const fechaModal = () => {
        setModal(false)
        setComidaModal(undefined)
    }

    return (
        <>
            <div className="container">
                <Container>
                    <Lista>
                        {restaurante.cardapio.map(comida => (
                            <li key={comida.id} onClick={() => {
                                setModal(true)
                                setComidaModal(comida)
                            }}>
                                <Comida comida={comida} />
                            </li>
                        ))}
                    </Lista>
                </Container>
            </div>
            <Modal className={modal ? "visivel" : ""}>
                <ModalContainer className="container">
                    <FecharImg src={fechar} alt="icone de fechar" onClick={fechaModal} />
                    {comidaModal && (
                        <ModalContent>
                            <ImagemModal src={comidaModal.foto}/>
                            <div>
                                <ModalTitulo>{comidaModal.nome}</ModalTitulo>
                                <ModalDescricao>
                                    {comidaModal.descricao}<br/><br/>
                                    Serve: de {comidaModal.porcao}
                                </ModalDescricao>
                                <ModalBotao>Adicionar ao Carrinho - {priceFormat(comidaModal.preco)}</ModalBotao>
                            </div>
                        </ModalContent>
                    )}
                </ModalContainer>
                <div className="overlay" onClick={fechaModal}></div>
            </Modal>
        </>
    )
}

export default ListaDeComidas