import { useDispatch, useSelector } from "react-redux"
import Button from "../Button"
import Card from "../Card"
import { Container, ContainerButtons, ContainerConcluido, InputGroup, Row } from "./styles"
import { RootReducer } from "../../store"
import { getTotalPrice, parseToBrl } from "../../utils"
import { useFormik } from "formik"
import * as Yup from "yup"
import { useEffect, useState } from "react"
import { usePurchaseMutation } from "../../services/api"
import { clear } from "../../store/reducers/cart"
import InputMask from "react-input-mask"
import { useNavigate } from "react-router-dom"

type Props = {
    voltarCart: () => void
    deixarSair: () => void
    fecharCart: () => void
}

const Checkout = ({ voltarCart, fecharCart, deixarSair }: Props) => {
    const [purchase, { data, isSuccess }] = usePurchaseMutation()
    const { items } = useSelector((state: RootReducer) => state.cart)
    const [ finishDeliveryInfo, setFinishDeliveryInfo] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const totalPrice = getTotalPrice(items)

    const form = useFormik({
        initialValues: {
            nomeRecebe: "",
            endereco: "",
            cidade: "",
            cep: "",
            numeroCasa: "",
            complemento: "",
            nomeDonoCartao: "",
            numeroCartao: "",
            codigoCartao: "",
            mesVencimento: "",
            anoVencimento: ""
        },
        validationSchema: Yup.object({
            nomeRecebe: Yup.string()
                .required("O campo é obrigatorio"),
            endereco: Yup.string()
                .required("O campo é obrigatorio"),
            cidade: Yup.string()
                .required("O campo é obrigatorio"),
            cep: Yup.string()
                .required("O campo é obrigatorio"),
            numeroCasa: Yup.string()
                .required("O campo é obrigatorio"),
            complemento: Yup.string(),



            nomeDonoCartao: Yup.string()
                .required("O campo é obrigatorio"),
            numeroCartao: Yup.string()
                .required("O campo é obrigatorio"),
            codigoCartao: Yup.string()
                .required("O campo é obrigatorio"),
            mesVencimento: Yup.string()
                .required("O campo é obrigatorio"),
            anoVencimento: Yup.string()
                .required("O campo é obrigatorio")
        }),
        onSubmit: (values) => {
            purchase({
                delivery: {
                    address: {
                        city: values.cidade,
                        description: values.endereco,
                        zipCode: values.cep,
                        number: Number(values.numeroCasa),
                        complement: values.complemento
                    },
                    receiver: values.nomeRecebe
                },
                payment: {
                    card: {
                        code: Number(values.codigoCartao),
                        name: values.nomeDonoCartao,
                        number: values.numeroCartao,
                        expires: {
                            month: Number(values.mesVencimento),
                            year: Number(values.anoVencimento)
                        }
                    }
                },
                products: items.map((item) => ({
                    id: item.id,
                    price: item.preco as number
                }))
            })
        }
    })

    const checkInputHasError = (fieldName: string) => {
        const isTouched = fieldName in form.touched
        const isInvalid = fieldName in form.errors
        const hasError = isTouched && isInvalid

        return hasError
    }

    const retornaHome = () => {
        navigate("/")
        deixarSair()
        fecharCart()
    }

    useEffect(() => {
        if (isSuccess) {
            dispatch(clear())
        }
    }, [isSuccess, dispatch])

    if (!isSuccess) return (
        <Container onSubmit={form.handleSubmit}>
            <Card title="Entrega" className={finishDeliveryInfo ? "" : "show"}>
                <>
                    <InputGroup>
                        <label htmlFor="nomeRecebe">Quem ira receber</label>
                        <input type="text"
                            name="nomeRecebe" 
                            id="nomeRecebe"
                            value={form.values.nomeRecebe} 
                            onChange={form.handleChange} 
                            onBlur={form.handleBlur} 
                            className={checkInputHasError("nomeRecebe") ? "error" : ""} 
                        />
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor="endereco">Endereço</label>
                        <input type="text"
                            name="endereco" 
                            id="endereco"
                            value={form.values.endereco} 
                            onChange={form.handleChange} 
                            onBlur={form.handleBlur} 
                            className={checkInputHasError("endereco") ? "error" : ""} 
                        />
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor="cidade">Cidade</label>
                        <input type="text"
                            name="cidade" 
                            id="cidade"
                            value={form.values.cidade} 
                            onChange={form.handleChange} 
                            onBlur={form.handleBlur} 
                            className={checkInputHasError("cidade") ? "error" : ""} 
                        />
                    </InputGroup>
                    <Row>
                        <InputGroup>
                            <label htmlFor="cep">CEP</label>
                            <InputMask type="text"
                                name="cep" 
                                id="cep"
                                value={form.values.cep} 
                                onChange={form.handleChange} 
                                onBlur={form.handleBlur} 
                                className={checkInputHasError("cep") ? "error" : ""} 
                                mask={"99999-999"}
                            />
                        </InputGroup>
                        <InputGroup>
                            <label htmlFor="numeroCasa">Numero</label>
                            <input type="number"
                                name="numeroCasa" 
                                id="numeroCasa"
                                value={form.values.numeroCasa} 
                                onChange={form.handleChange} 
                                onBlur={form.handleBlur} 
                                className={checkInputHasError("numeroCasa") ? "error" : ""} 
                            />
                        </InputGroup>
                    </Row>
                    <InputGroup>
                        <label htmlFor="complemento">Complemento (opcional)</label>
                        <input type="text"
                            name="complemento" 
                            id="complemento"
                            value={form.values.complemento} 
                                onChange={form.handleChange} 
                                onBlur={form.handleBlur} 
                                className={checkInputHasError("complemento") ? "error" : ""} 
                        />
                    </InputGroup>
                    <ContainerButtons>
                        <Button title="Clique aqui para prosseguir para o pagamento" onClick={() => setFinishDeliveryInfo(true)} type="button">Continuar com o Pagamento</Button>
                        <Button title="Clique aqui para voltar ao carrinho" onClick={voltarCart} type="button">Voltar para o carrinho</Button>
                    </ContainerButtons>
                </>
            </Card>
            <Card title={`Pagamento - Valor a pagar ${parseToBrl(totalPrice)}`} className={finishDeliveryInfo ? "show" : ""}>
                <>
                    <InputGroup>
                    <label htmlFor="nomeDonoCartao">Nome no cartão</label>
                        <input type="text"
                            name="nomeDonoCartao" 
                            id="nomeDonoCartao"
                            value={form.values.nomeDonoCartao} 
                            onChange={form.handleChange} 
                            onBlur={form.handleBlur} 
                            className={checkInputHasError("nomeDonoCartao") ? "error" : ""} 
                        />
                    </InputGroup>
                    <Row>
                        <InputGroup className="numero-cartao">
                            <label htmlFor="numeroCartao">Numero do cartão</label>
                            <InputMask type="text"
                                name="numeroCartao" 
                                id="numeroCartao"
                                value={form.values.numeroCartao} 
                                onChange={form.handleChange} 
                                onBlur={form.handleBlur} 
                                className={checkInputHasError("numeroCartao") ? "error" : ""} 
                                mask={"9999 9999 9999 9999"}
                            />
                        </InputGroup>
                        <InputGroup>
                            <label htmlFor="codigoCartao">CVV</label>
                            <InputMask type="text"
                                name="codigoCartao" 
                                id="codigoCartao"
                                value={form.values.codigoCartao} 
                                onChange={form.handleChange} 
                                onBlur={form.handleBlur} 
                                className={checkInputHasError("codigoCartao") ? "error" : ""} 
                                mask={"999"}
                            />
                        </InputGroup>
                    </Row>
                    <Row>
                        <InputGroup>
                            <label htmlFor="mesVencimento">Mes de vencimento</label>
                            <InputMask type="text"
                                name="mesVencimento" 
                                id="mesVencimento"
                                value={form.values.mesVencimento} 
                                onChange={form.handleChange} 
                                onBlur={form.handleBlur} 
                                className={checkInputHasError("mesVencimento") ? "error" : ""} 
                                mask={"99"}
                            />
                        </InputGroup>
                        <InputGroup>
                            <label htmlFor="anoVencimento">Ano de vencimento</label>
                            <InputMask type="text"
                                name="anoVencimento" 
                                id="anoVencimento"
                                value={form.values.anoVencimento} 
                                onChange={form.handleChange} 
                                onBlur={form.handleBlur} 
                                className={checkInputHasError("anoVencimento") ? "error" : ""} 
                                mask={"99"}
                            />
                        </InputGroup>
                    </Row>
                    <ContainerButtons>
                        <Button title="Clique aqui para prosseguir para o pagamento" onClick={() => form.handleSubmit()} type="submit">Finalizar o Pagamento</Button>
                        <Button title="Clique aqui para voltar ao carrinho" onClick={() => setFinishDeliveryInfo(false)} type="button">Voltar para a edição de endereço</Button>
                    </ContainerButtons>
                </>
            </Card>
        </Container>
    )
    return (
        <ContainerConcluido>
            <Card title={`Pedido realizado - ${data.orderId}`}>
                <>
                    <p>
                        Estamos felizes em informar que seu pedido já está<br />
                        em processo de preparação e, em breve, será entregue<br />
                        no endereço fornecido.<br /><br />
                        Gostaríamos de ressaltar que nossos entregadores<br />
                        não estão autorizados a realizar cobranças extras.<br /><br />
                        Lembre-se da importância de higienizar as mãos após<br />
                        o recebimento do pedido, garantindo assim sua<br />
                        segurança e bem-estar durante a refeição.<br /><br />
                        Esperamos que desfrute de uma deliciosa e agradável<br />
                        experiência gastronômica. Bom apetite!<br /><br />
                    </p>
                    <Button title="Clique aqui para ir para a Home" type="button" onClick={retornaHome}>Concluir</Button>
                </>
            </Card>
        </ContainerConcluido>
    )
}

export default Checkout