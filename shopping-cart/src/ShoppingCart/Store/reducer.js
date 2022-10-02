function reducer (state, action) {
    // ADD TO CART
    if (action.type === 'ADD_TO_CART') {
       let newItem = action.payload;
       const existingItem = state.cart.find((item)=> item.id === action.payload.id)
       if(existingItem) {
        existingItem.amount++
        existingItem.totalPrice += existingItem.price;
        return {...state}
       } else {
        newItem = {...newItem, totalPrice: newItem.price, amount: 1};
        const newCart = [...state.cart, newItem];
        return {...state, cart: newCart}
       }
    }
    // INCREMENT
    if (action.type === 'INCREMENT') {
        const newCart = state.cart.map((item)=> {
            if(item.id === action.payload) {
                item.amount++
                item.totalPrice += item.price
            }
            return item
        })
        return {...state, cart: newCart}
    }
    // DECREMENT
    if (action.type === 'DECREMENT') {
        const newCart = state.cart.map((item)=> {
            if(item.id === action.payload) {
                item.amount--
                item.totalPrice -= item.price
            }
            return item
        }).filter((item)=> item.amount > 0)
        return {...state, cart: newCart}
    }
    // GET TOTALS
    if (action.type === 'GET_TOTALS') {
        const totalAmount = state.cart.reduce((total, cartItem)=> {
              total += cartItem.totalPrice
              return total
        }, 0)
        console.log(totalAmount)
        return {...state, cartAmount: state.cart.length, cartTotal: totalAmount}
    }
    // CLEAR CART
    if(action.type === 'CLEAR_CART') {
        return {...state, cart: []}
    }
    //REMOVE ITEM
    if (action.type === 'REMOVE') {
        const newCart = state.cart.filter((item)=> item.id !== action.payload)
        return {...state, cart: newCart}
    }
    return state
}

export default reducer;