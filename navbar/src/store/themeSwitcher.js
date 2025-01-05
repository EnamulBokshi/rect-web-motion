import {createSlice} from '@reduxjs/toolkit'

const deviceMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
export const initialState = {
    theme:deviceMode?'dark':'light'
}
const themeSlicer = createSlice({
    name:'theme',
    initialState,
    reducers:{
        toggleMode: (state,action)=>{
            state.theme = action.payload
        }
    }
})
export const{toggleMode} = themeSlicer.actions;
export default themeSlicer.reducer;