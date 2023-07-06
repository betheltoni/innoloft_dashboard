import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { IConfig } from "../../types/product/interface"
import { axiosBaseInstance } from "../../services/api.service"

interface ConfigState {
    storeConfig: IConfig
}

const initialState: ConfigState = {
    storeConfig: {
        id: "",
        logo: "",
        mainColor: "",
        hasUserSection: true,
    },
}

export const fetchConfig = createAsyncThunk("config/fetchConfig", async () => {
    try {
        const response = await axiosBaseInstance.get(
            `/configuration/${import.meta.env.VITE_APP_ID}/`
        )
        return response.data

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        return error.message
    }
})

export const ConfigSlice = createSlice({
    name: "config",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchConfig.fulfilled, (state, action) => {
            state.storeConfig = action.payload
        })
    },
})
export default ConfigSlice.reducer
