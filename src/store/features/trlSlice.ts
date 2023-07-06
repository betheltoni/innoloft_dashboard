import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { axiosBaseInstance } from "../../services/api.service"
import { ITrl } from "../../types/product/interface"

interface TrlState {
    storeTrl: ITrl[]
}

const initialState: TrlState = {
    storeTrl: [{
        id: "",
        name: "",
        description: "",
    },]
}

export const fetchTrl = createAsyncThunk(
    "trl/fetchTrl",
    async () => {
        try {
            const response = await axiosBaseInstance.get("/trl/")
            return response.data

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            return error.message
        }
    }
)

export const TrlSlice = createSlice({
    name: "trl",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTrl.fulfilled, (state, action) => {
            state.storeTrl = action.payload
        })
    },
})

export default TrlSlice.reducer
