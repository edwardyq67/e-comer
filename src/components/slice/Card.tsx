import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading';

// Define una interfaz para los elementos del carrito
interface CartItem {
    id: number;
    name: string;
    price: number;
}

// Define el estado inicial del carrito
interface CardState {
    data: CartItem[];
    loading: boolean;
    error: string | null;
}

const initialState: CardState = {
    data: [],
    loading: false,
    error: null
};

// Define la acción asincrónica para obtener el carrito
export const getCard = createAsyncThunk<CartItem[], void>(
    'card/getCard',
    async (_, { dispatch }) => {
        try {
            dispatch(setIsLoading(false));
            const response = await axios.get(`https://fakestoreapi.com/carts/user/1`);
            dispatch(setIsLoading(true));
            return response.data as CartItem[];
        } catch (error) {
            dispatch(setIsLoading(false));
            throw error;
        }
    }
);

// Define el slice
export const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        extraReducer() {
            // Puedes definir acciones adicionales aquí si es necesario
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getCard.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.data = action.payload;
        });

        builder.addCase(getCard.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
            state.data = []; // Reiniciar data
        });

        builder.addCase(getCard.pending, (state) => {
            state.loading = true;
        });
    },
});

// Exporta el reductor y las acciones
export const { extraReducer } = cardSlice.actions;
export default cardSlice.reducer;
