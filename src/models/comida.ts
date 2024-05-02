class Comida {
    id: number
    nome: string
    descricao: string
    imagem: string

    constructor (id: number, nome: string, descricao: string, imagem: string) {
        this.id = id
        this.nome = nome
        this.descricao = descricao
        this.imagem = imagem
    }
}

export default Comida