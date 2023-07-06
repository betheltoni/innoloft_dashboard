import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { axiosBaseInstance } from "../../services/api.service"
import { ProductInterface } from "../../types/product/interface"

interface ProductState {
    storeProduct: ProductInterface
}
const initialState: ProductState = {
    storeProduct: {
        id: 0,
        name: "",
        description: "",
        picture: "",
        type: {
            id: 0,
            name: "",
        },
        categories: [
            {
                id: 0,
                name: "",
            },
        ],
        implementationEffortText: "",
        investmentEffort: "",
        trl: {
            id: 0,
            name: "",
        },
        video: "",
        user: {
            id: 0,
            email: "",
            firstName: "",
            lastName: "",
            sex: 0,
            profilePicture: "",
            position: "",
        },
        company: {
            name: "",
            logo: "",
            address: {
                country: {
                    name: "",
                },
                city: {
                    name: "",
                },
                street: "",
                house: "",
                zipCode: "",
                longitude: 0,
                latitude: 0,
            },
        },
        businessModels: [
            {
                id: 0,
                name: "",
            },
        ],
    },
}

export const fetchProduct = createAsyncThunk(
    "product/fetchProduct",
    async () => {
        try {
            const response = await axiosBaseInstance.get("/product/6781/")
            return response.data

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            return error.message
        }
    }
)

export const editProductState = createAsyncThunk(
    "product/editProduct",
    async () => {
        try {
            const response = await axiosBaseInstance.put(
                "/product/6781/",
            )
            return response.data
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            return error.message
        }
    }
)
export const ProductSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        updateStore: (state, action) => {
            state.storeProduct = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.storeProduct = action.payload
        })
    },
})

export default ProductSlice.reducer
export const { updateStore } = ProductSlice.actions
