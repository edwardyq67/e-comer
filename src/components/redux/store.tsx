import { configureStore } from '@reduxjs/toolkit'
import  inicio  from '../slice/Inicio';

import isLoading from '../slice/isLoading';
import shop from '../slice/shop';
import  card  from '../slice/Card';


// ...

const store = configureStore({
  reducer: {
    inicio:inicio,
    isLoading:isLoading,
    shop:shop,
    card:card
  }
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export default store;