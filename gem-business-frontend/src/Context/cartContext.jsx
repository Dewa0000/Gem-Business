import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCart(JSON.parse(storedCart))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    useEffect(() => {
        try {
            const backendUrl = import.meta.env.VITE_BACKEND_URL || "https://gem-business.onrender.com";
            const user = JSON.parse(localStorage.getItem("user"))
            if (!user?._id) return
            const fetchCart = async () => {
                const res = await fetch(`${backendUrl}/cart/${user._id}`);
                const data = await res.json();
                setCart(Array.isArray(data.items) ? data.items : []);
                
            }
            console.log(user._id);
            
            fetchCart();
        } catch (err) {
            console.log("Failure in fetching products:", err.message)
        }

    }, [])

    const addtoCart = (product) => {
       const exists = cart.find((item) => item._id === product._id);
       let updatedCart;

       if(exists){
        updatedCart = cart.map((item) => {
            return (item._id === product._id ? {...item, quantity: item.quantity + 1} : item)
        })
       }else{
        updatedCart = [...cart,{...product,quantity: 1}]
       }
       setCart(updatedCart)
       syncCartWithBackend(updatedCart);
    }

    const removeFromCart = (product) => {
        let updatedCart;

        const exists = cart.find((item) => item._id === product._id);
        if (!exists) return

        if(exists.quantity === 1){
            updatedCart = cart.filter((item) => item._id !== product._id);
        }else{
            updatedCart = cart.map((item) => item._id === product._id ? {...item,quantity: item.quantity - 1} : item)
        }
        setCart(updatedCart);
        syncCartWithBackend(updatedCart);
    }

    const syncCartWithBackend = async (updatedCart) => {
          try{
            const cleanedCart = updatedCart.map(item => ({
                 product : item._id,
                 quantity : item.quantity
            }))
            const backendUrl = import.meta.env.VITE_BACKEND_URL || "https://gem-business.onrender.com";

            const user = JSON.parse(localStorage.getItem("user"))
            const userId = user?._id;

            if(!userId){
                console.log("No userId found in localStorage");
                return
            }

            await fetch(`${backendUrl}/cart`, {
                method: "POST",
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify({userId, items: cleanedCart})
            })
          }catch(err){
            console.error("Failed to Sync Cart with Backend:", err.message )
          }
    }

    return (
        <CartContext.Provider value={{ cart,setCart, addtoCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);