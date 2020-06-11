import {createContext} from 'react';

interface Products {
  id:number;
  name: string;
  price:string;
}
interface Cart {
  products?: Array<Products>;
  shipping_value?: number;
}

const CartContext = createContext<Cart>({
  products: [],
});

export default CartContext;