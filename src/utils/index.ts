export const getTotalPrice = (items: ComidaModel[]) => {
    return items.reduce((accumulator, currentItem) => {
        if (currentItem.preco) return accumulator += currentItem.preco
        return 0
    }, 0)
}

export const parseToBrl = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(price)
}