import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading';

// Define a type for the slice state
export interface CounterState {
    data: any[],
    loading: boolean,
    error: string | null
}

// Define the initial state using that type
const initialState: CounterState = {
    data:[],
    loading:false,
    error:""
};

// Define la acción asincrónica para la solicitud GET
export const getCard= createAsyncThunk('getConocimiento', async (payload: any, { dispatch }) => {
    try {
        console.log(payload)
        dispatch(setIsLoading(false)); 
        const response = await axios.get(`https://fakestoreapi.com/carts/user/1`);
        dispatch(setIsLoading(true)); 
        return response.data
       
    } catch (error) {
        dispatch(setIsLoading(false));
        throw error; 
    }
});

// Define la acción asincrónica para la solicitud PUT
export const putCard = createAsyncThunk('putCard', async (payload: any, { dispatch }) => {
    try {
       
        dispatch(setIsLoading(true)); 
        const response = await axios.put("https://fakestoreapi.com/carts/5",payload); 
        dispatch(setIsLoading(false)); 
        return response.data; 
    } catch (error) {
        dispatch(setIsLoading(false)); 
        throw error; 
    }
});

// Define el slice
export const card = createSlice({
    name: 'conocimiento',
    initialState,
    reducers: {
        // Define los reductores síncronos aquí si es necesario
    },
    extraReducers: (builder) => {
        // Maneja las acciones de éxito y fracaso para getCard
        builder.addCase(getCard.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.data = action.payload; 
        });
        builder.addCase(getCard.rejected, (state, action:PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
            state.data = []; // Reiniciar data
        });
        // Maneja las acciones de éxito y fracaso para putCard
        builder.addCase(putCard.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.data = action.payload; 
        });
        builder.addCase(putCard.rejected, (state, action:PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
            state.data = []; // Reiniciar data
        });
        // Maneja la acción pendiente para ambas acciones
        builder.addCase(getCard.pending, (state) => {
            state.loading=true
        });
        builder.addCase(putCard.pending, (state) => {
            state.loading=true
        });
    }
});

// Exporta el reductor y las acciones
export const { extraReducer } = card.actions;
export default card.reducer;
