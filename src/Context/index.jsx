import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider  = ({children}) => {
    // Shopping Cart - Increment quantity
    const [count, setCount] = useState(0);

    // Product Detail - Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    // Checkout Side Menu - Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

    // Product Detail - Show Product Detail Data
    const [productDetail, setProductDetail] = useState({});

    //Shopping cart - Add product to the cart
    const [cartProducts, setCartProducts] = useState([]);

    // Shopping Cart - Order
    const [order, setOrder] = useState([]);

    return (
        <ShoppingCartContext.Provider value = {{
            count, 
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productDetail,
            setProductDetail,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder
            }}>
            {children}
        </ShoppingCartContext.Provider>  
    )
}
