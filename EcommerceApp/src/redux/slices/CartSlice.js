const { createSlice } = require("@reduxjs/toolkit");


const CartSlice = createSlice({
    name: 'cart',
    initialState:{
        data: [],
    },
    reducers: {
        addItemToCart(state, action) {
            let tempData = state.data;
            let isItemExists = false;
            tempData.map(item => {
                if (item.id == action.payload.id) {
                    isItemExists = true;
                    item.qty = item.qty + 1;
                }
            });
            if(!isItemExists){
                tempData.push(action.payload);
            }

            state.data = tempData;
        },
        reduceItemToCart(state, action) {
            let tempData = state.data;

            tempData.map(item => {
                if (item.id == action.payload.id) {
                        item.qty = item.qty - 1;
                    
                }
            });
            state.data = tempData;
        },

        removeItemToCart(state, action) {
            let tempData = state.data;
                tempData.splice(action.payload, 1);
           
            state.data = tempData;
        },
        emptyCart(state, action) {
            state.data = action.payload;
        }
    },
});
export const {addItemToCart, reduceItemToCart, removeItemToCart, emptyCart} = CartSlice.actions;
export default CartSlice.reducer;