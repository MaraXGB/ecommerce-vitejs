import { useContext } from 'react';
import './styles.css';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';

const ProductDetail = () =>{
    const context = useContext(ShoppingCartContext);
    console.log('Product Detail: ',context.productDetail);
    if(!context.productDetail || !context.productDetail.images) return null;
    return(
        <aside className={`${context.isProductDetailOpen? 'flex': 'hidden'} product-detail flex-col fixed right-0 border border-gray rounded bg-white shadow-lg`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div className='rounded-full p-1 text-white bg-indigo-950 absolute right-5 -top-4 cursor-pointer'
                      onClick={()=> context.closeProductDetail()}><XMarkIcon className="size-6 text-black-500" /></div>
            </div>
            <figure className='px-6'>
                <img className='w-full h-full rounded-lg' 
                     src={context.productDetail.images[0]} 
                     alt={context.productDetail.title} />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='text-2xl font-medium mb-2'>${context.productDetail.price}</span>
                <span className='text-md font-medium'>{context.productDetail.title}</span>
                <span className='text-sm font-light'> {context.productDetail.Description}</span>
            </p>
        </aside>
    );

};
export default ProductDetail;