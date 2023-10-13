import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Cart = ()=>{

    const dispatch = useDispatch();

    const handleClearCart=()=>{
        dispatch(clearCart());
    }
    const cartItems = useSelector((store)=>store.cart.items);
    return <div className="text-center font-bold m-4 p-4 text-2xl">
        Cart
        <div className="w-6/12 m-auto">
            <button className="bg-black text-white m-2 p-2 border rounded-lg"
            onClick={handleClearCart}
            >
            Clear Cart
            </button>
            {cartItems.length === 0 && <h1 className="m-8">You Cart Item is Empy. Add items to display here!!</h1>}
            <ItemList items={cartItems}/>
        </div>
        </div>
}

export default Cart;