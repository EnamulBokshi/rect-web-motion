import { configureStore } from "@reduxjs/toolkit";
import themeSwitcher from './themeSwitcher'
const store = configureStore({
    reducer:{
        theme: themeSwitcher,
    }
})
export default store;