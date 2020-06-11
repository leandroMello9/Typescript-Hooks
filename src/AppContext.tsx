import React,{useReducer, useContext} from 'react';
import CartContext from './CartContext';
// import { Container } from './styles';

interface Cart {
  products: string[];
  shipping_value?: number;
}
type CartActionType = {
  type: 'ADD_PRODUCT' | 'REMOVE_PRODUCT'
}
const AppContext: React.FC = () => {
  //Exemplo useReducer
   const cart = useReducer(
     (state: Cart, action: CartActionType) => {
       switch(action.type) {
         case "ADD_PRODUCT":
           return {
             ...state,
             products: [...state.products, 'Producto Novo']
           }
          
         default:
           return [];
       }
     },
     {
       products:['',''],
       shopping_value: 0
     },
    
    
   )
  //Exemplo UseContext
   const {products} = useContext(CartContext)
  return (
    <div></div>
  );
}

export default AppContext;