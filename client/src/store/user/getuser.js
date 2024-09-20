import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';


export const fetchdata = createAsyncThunk('fetchdata',async ()=>{
    const response = await axios.get("");
    return response.json();
});

const getUser = createSlice({
    name:"user",
    initialState : {
        isLoading:false,
        data:null,
        isError:false
    },
    extraReducers:(builder) =>{
        builder.addCase(fetchdata.pending,(state,action)=>{
            state.isLoading = true;
        }).addCase(fetchdata.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.data = action.payload;
        }).addCase(fetchdata.rejected,(state,action)=>{
            state.isError = true;
            console.log(action.payload);
        })

    }
});

export default getUser.reducer;