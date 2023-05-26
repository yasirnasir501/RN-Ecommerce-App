const {configureStore} = require('@reduxjs/toolkit')

import ProductsReducer from './slices/ProductsSlice'
import WishlistReducers from './slices/WishlistSlice'
import CartReducers from './slices/CartSlice'

export const store = configureStore({
    reducer:{
        product: ProductsReducer,
        wishlist: WishlistReducers,
        cart: CartReducers,
    },
})