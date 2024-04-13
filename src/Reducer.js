const initialstate = {
  array: [],
  cartarray: [],

}

const Reducer = (state = initialstate, action) => {
  switch (action.type) {
    case "openitem":
      return {
        ...state, array: [action.data]
      }
    // case "addtocart":
    //   return {
    //     ...state, cartarray: [...state.cartarray, action.data]
    //   }

      case "addtocart":
        let existingcartitem = state.cartarray.filter((e) => {
          return e.id === action.data.id
        })
        if (existingcartitem.length > 0) {
          return {
            ...state, cartarray: state.cartarray.map((e, i) => {
              if (action.data.id == e.id) {
                return { ...e, qnty: e.qnty + 1 }
              }
              else {
                return e
              }
            })
          }
        }
        else {
          return { ...state, cartarray: [...state.cartarray, action.data] }
        }
        case "removeqnty":
      return {
        ...state,cartarray: state.cartarray.map((e, i) => {
          if (action.data.id == e.id) {
            return { ...e, qnty: e.qnty - 1 }
          }
          else {
            return e
          }
        })
      }

      case "addqnty":
      return {
        ...state, cartarray: state.cartarray.map((e, i) => {
          if (action.data.id == e.id) {
            return { ...e, qnty: e.qnty + 1 }
          }
          else {
            return e
          }
        })
      }
        


    default:
      return state
  }
}

export default Reducer