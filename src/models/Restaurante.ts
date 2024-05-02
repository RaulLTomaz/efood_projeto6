class Restaurante {
    nome: string
    descricao: string
    estrelas: number
    tipo: string
    imagem: string
    destaque: boolean
    id: number

    constructor (id: number, nome: string, descricao: string, estrelas: number, tipo: string, imagem: string, destaque: boolean) {
        this.id = id
        this.nome = nome
        this.descricao = descricao
        this.estrelas = estrelas
        this.tipo = tipo
        this.imagem = imagem
        this.destaque = destaque
    }
}

export default Restaurante