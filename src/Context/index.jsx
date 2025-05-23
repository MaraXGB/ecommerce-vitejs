import { createContext, useState, useEffect } from "react";

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

    // Get Products
    const [items, setItems] = useState(null);
    const [filteredItems, setFilteredItems] = useState(null);


    // Search Products By title
    const [searchByTitle, setSearchByTitle] = useState(null);

    // Search Products By category
    const [searchByCategory, setSearchByCategory] = useState(null);
    
    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setItems(data))
      }, []);

    const filterItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));
    }
    const filterItemsByCategory = (items, searchByCategory) => {
        console.log('items', items);
        console.log('searchByCategory', searchByCategory);
        console.log('filter items',items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase())));
         
        return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()));
    }

    const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
        if(searchType === 'BY_TITLE') {
            return filterItemsByTitle(items, searchByTitle);
        }
        if(searchType === 'BY_CATEGORY') {
           
            return filterItemsByCategory(items, searchByCategory);
        }
        if(searchType === 'BY_TITLE_AND_CATEGORY') {
            return filterItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));
        }
        if(!searchType) {
            return items;
        }
    }
    useEffect(() => {
        
        if (searchByTitle && searchByCategory) {
            setFilteredItems(filterBy("BY_TITLE_AND_CATEGORY", items, searchByTitle, searchByCategory));  
            console.log("BY_TITLE_AND_CATEGORY");
        }
        if (searchByTitle && !searchByCategory) {
            setFilteredItems(filterBy("BY_TITLE", items, searchByTitle, searchByCategory));
             console.log("BY_TITLE");
        }
        if (!searchByTitle && searchByCategory) {
            setFilteredItems(filterBy("BY_CATEGORY", items, searchByTitle, searchByCategory));
            
             console.log("BY_CATEGORY");
           
        }
        if (!searchByTitle && !searchByCategory) {
            setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory));
            console.log("NO_FILTER");
            }
       
    }, [items, searchByTitle, searchByCategory]);
    
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
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            setFilteredItems,
            searchByCategory,
            setSearchByCategory
            }}>
            {children}
        </ShoppingCartContext.Provider>  
    )
}
