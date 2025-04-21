import { createSlice } from "@reduxjs/toolkit";

interface likeTypeItems {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    isLiked:boolean
}

interface likeTypes {
    items: likeTypeItems[];
}

const initialState: likeTypes = {
    items: []
};

export const likeSlice = createSlice({
    name: 'favorite',
    initialState: initialState,
    reducers: {
        toggleLike: (state,{payload})=>{
           const favorite = state.items.find(item=>item.id === payload.product_id)
           console.log(state,'state');
           console.log(payload.product_id,'payload');
           
           if (favorite) {
                state.items.filter(item=>item.id!== payload.product_id)
           }else{
            state.items.push(payload)
           }
        }
    }
});
// const reducer = likeSlice.reducer;
// export default reducer;

export const {toggleLike} = likeSlice.actions