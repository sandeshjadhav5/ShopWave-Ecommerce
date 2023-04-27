import { useContext } from "react"
import React,{useState} from "react"
import { Toast,useToast } from "@chakra-ui/react"
import CartPage from "../../Components/Cart/CartPage"

export const CartContext=React.createContext()

function CartContextProvider({children}){
    const [cartData,setCartData]=useState([])
    const toast = useToast()
    const handleAddToCart=(cartItem)=>{
        setCartData([...cartData,cartItem])
        toast({
            title: 'Added',
            description: `${cartItem.name} Succefully added to Cart`,
            status: 'success',
            duration: 6000,
            isClosable: true,
          })
        // console.log([...cartData,cartItem])
      }
    const value={cartData,setCartData,handleAddToCart}
    return (
    <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
    )
}
export default CartContextProvider;
