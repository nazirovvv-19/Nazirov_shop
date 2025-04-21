import { createSlice } from "@reduxjs/toolkit";

interface cartSliceType {
  items: cartItemSlice[];
  total_price: number;
}
interface cartItemSlice {
  product_id: number;
  product: productType;
  qty: number;
  total_price: number;
}
interface productType {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}
const initialState: cartSliceType = {
  items: [
    // {
    //   product_id: 1,
    //   product: {
    //     id: 215,
    //     name: "dasdasda",
    //     price: 55454,
    //     imageUrl: "",
    //   },
    //   qty: 5,
    //   total_price: 100,
    // },
  ],
  total_price: 0,
};

export const cartReducer = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    add: (state, { payload }) => {
      const find_item = state.items.find(
        (item) => item.product_id === payload.id
      );

      if (find_item) {
        find_item.qty += 1;
        find_item.total_price += payload.price;
      } else {
        const new_item = {
          product_id: payload.id,
          product: payload,
          qty: 1,
          total_price: payload.price,
        };
        state.items.push(new_item);
      }

      state.total_price += payload.price;
    },
    plus: (state, { payload }) => {
      console.log(payload, " payload");

      const plusItem = state.items.map((item) => {
        console.log('item',JSON.stringify(item, null, 2   ));
        
        return item.product_id === payload.product_id
          ? {
              ...item,
              qty: item.qty + 1,
              total_price: item.total_price+ payload.product.price,
            }
          : item;
      });
      state.items = plusItem;
    
     state.total_price=state.items.reduce((avv,hoz)=>avv + hoz.total_price,0) 
      // state.total_price += payload.price;
    },
    minus: (state, { payload }) => {
      const minus = state.items.map((item) =>
        item.product_id === payload.product_id
          ? {
              ...item,
              qty: item.qty - 1,
              total_price: item.total_price - item.product.price,
            }
          : item
      );
      state.items = minus;
      state.total_price = state.items.reduce((avv,hoz)=>avv+hoz.total_price,0);
    
    },
    deleted:(state,{payload})=>{
      state.items = state.items.filter(item=>item.product_id!== payload.product_id)
      state.total_price = state.items.reduce((avv,hoz)=>avv+hoz.total_price,0)
    },
  },
});

const reducer = cartReducer.reducer;
export default reducer;

export const { add, plus, minus,deleted } = cartReducer.actions;
