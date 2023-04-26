import { createApi ,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const productSlice = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({
        baseUrl:"http://localhost:5000/",
    }),
    endPoint: () => {
      
    }
})