declare type RestauranteModel = {
    id: number,
    titulo: string,
    destacado: boolean,
    tipo: string,
    avaliacao: number,
    descricao: string,
    capa: string,
    cardapio: ComidaModel[]
}

declare type ComidaModel = {
    foto: string,
    preco: number,
    id: number,
    nome: string,
    descricao: string,
    porcao: string
}

