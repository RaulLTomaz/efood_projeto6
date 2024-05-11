import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

type Product = {
    id: number
    price: number
}

type PurchasePayload = {
    products: Product[],
    delivery: {
        receiver: string,
        address: {
            description: string,
            city: string,
            zipCode: string,
            number: number,
            complement?: string
        }
    },
    payment: {
        card: {
            name: string,
            number: string,
            code: number,
            expires: {
                month: number,
                year: number
            }
        }
    }
}

const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "https://fake-api-tau.vercel.app/api/efood"
    }),
    endpoints: (builder) => ({
        getListaRestaurantes: builder.query<RestauranteModel[], void>({
            query: () => `restaurantes`
        }),
        getRestaurante: builder.query<RestauranteModel, string>({
            query: id => `restaurantes/${id}`
        }),
        purchase: builder.mutation<any, PurchasePayload>({
            query: (body) => ({
                url: "checkout",
                method: "POST",
                body
            })
        })
    })
})

export const { useGetListaRestaurantesQuery, useGetRestauranteQuery, usePurchaseMutation } = api

export default api