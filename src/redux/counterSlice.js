import { createSlice } from "@reduxjs/toolkit";

// to inintialize the file as slice we use a method createSlice()
export const counterSlice = createSlice({
    // name has no importance
    name:'counterApp',
    //initial state creation
    initialState:{
        value:0
    },
    reducers:{
        // logic to update the value
        // actions are created inside the reducers
        increment:(state,data)=>{
            if(data.payload){
                state.value = state.value + data.payload
            }
            else{
                state.value = state.value + 1
            }
        },
        decrement:(state,data)=>{
            if(data.payload){
                state.value -= data.payload

            }
            else{
                state.value -= 1
            }
        },
        reset:(state)=>{
            state.value = 0;
        }
    }
})

export const {increment,decrement,reset} = counterSlice.actions
export default counterSlice.reducer;