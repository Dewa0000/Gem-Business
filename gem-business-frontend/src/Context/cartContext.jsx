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
            fetchCart();
        } catch (err) {
            console.log("Failure in fetching products:", err.message)
        }

    }, [])

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);