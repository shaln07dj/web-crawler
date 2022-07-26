import {createSlice ,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';

const initialState={
    items:[],
    status:null,
    error:null

};

export const dataFetch=createAsyncThunk(
    "data/dataFetch", // this creates a middleware
   async(id=null,{rejectWithValue})=>{
       try{
     const response = await axios.get('http://localhost:5000/data'
     )
        return response?.data;}
        catch(error){
            return rejectWithValue("error occured")
        }
    }
)
const dataSlice=createSlice({
    name:"data",
    initialState,
    //this will not generate action creaters ,it will only handle action types(used here as our action creater is already difined  )
    reducers:{},

    extraReducers:{
        [dataFetch.pending]:(state,action)=>{
            state.status="pending"
        },
        [dataFetch.fulfilled]:(state,action)=>{
            state.status="sucess"
            state.items=action.payload
        },
        [dataFetch.rejected]:(state,action)=>{
            state.status="rejected"
            state.error=action.payload
        }
        
    }

});

//export const {modify}=cartSlice.actions
export default dataSlice.reducer;
 
