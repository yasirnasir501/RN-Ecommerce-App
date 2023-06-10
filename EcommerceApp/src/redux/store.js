const {configureStore} = require('@reduxjs/toolkit')

import ProductsReducer from './slices/ProductsSlice';
import WishlistReducers from './slices/WishlistSlice';
import CartReducers from './slices/CartSlice';
import AddressReducer from './slices/AddressSlice'

export const store = configureStore({
    reducer:{
        product: ProductsReducer,
        wishlist: WishlistReducers,
        cart: CartReducers,
        address: AddressReducer,
    },
})