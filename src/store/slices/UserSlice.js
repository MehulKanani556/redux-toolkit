import { createSlice } from "@reduxjs/toolkit";
import { deleteUser } from "../actions";


const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser(state, action) {
            state.push(action.payload)
            console.log(action.payload)
         },
        removeUser(state, action) { 
            // console.log("hi"+action.payload)
            state.splice(action.payload,1)
            // return state.filter((_, index) => index !== action.payload);

        },
        // deleteUser(state, action) { 
        //     // return  [];
        //     state.splice(0, state.length);
        //     return state;
        // }
    },
    extraReducers(builder){
        builder.addCase(deleteUser, () =>{
            return [];
        })
    }
})


export default userSlice.reducer;

export const  {addUser,removeUser} =userSlice.actions;