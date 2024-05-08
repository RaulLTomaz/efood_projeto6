import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { RestauranteModel } from "../pages/Home"

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
        })
    })
})

export const { useGetListaRestaurantesQuery, useGetRestauranteQuery } = api

export default api