import { createSlice } from "@reduxjs/toolkit";


const initialState={
siteInfo: {
    "name":"",
    "data":""
}
};

const infoSlice = createSlice({
    name:"info",
    initialState,
    reducers:{
        getInfo(state,action){
            state.siteInfo.name = action.payload.name;
            state.siteInfo.data = action.payload.info

        }
    }

});

export const {getInfo}=infoSlice.actions;
export default infoSlice.reducer;