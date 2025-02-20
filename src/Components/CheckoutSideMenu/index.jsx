import { useContext } from 'react';
import './styles.css';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../OderCard';
import {totalPrice} from '../../Utils';
const CheckoutSideMenu = () =>{
    const context = useContext(ShoppingCartContext);
    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id !== id );
        context.setCartProducts(filteredProducts);
    }
    //if(!context.productDetail || !context.productDetail.images) return null;
    return(
        <aside className={`${context.isCheckoutSideMenuOpen? 'flex': 'hidden'} checkout-side-menu flex-col fixed right-0 border border-gray rounded bg-white shadow-lg`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div className='rounded-full p-1 text-white bg-indigo-950 absolute right-5 -top-4 cursor-pointer'
                      onClick={()=> context.closeCheckoutSideMenu()}>
                        <XMarkIcon className="size-6 text-black-500" />
                </div>
            </div>
            <div className='px-6 h-full overflow-y-scroll'>
                {
                    context.cartProducts.map(product => (
                        <OrderCard key={product.id} 
                        id={product.id}
                        title={product.title} 
                        price={product.price}
                        imageUrl={product.images}
                        handleDelete={handleDelete}
                        />
                    ))
                }
            </div>
            <div className='px-6'>
               <p className='flex justify-between items-center'>
                <span className='font-ligth'>Total: </span>
                <span className='font-medium font-2xl'>${totalPrice(context.cartProducts)}</span>
               </p>
            </div>
        </aside>
    );

};
export default CheckoutSideMenu;