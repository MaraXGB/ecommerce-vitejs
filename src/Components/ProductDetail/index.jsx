import './styles.css';
import { XMarkIcon } from '@heroicons/react/24/solid'

const ProductDetail = () =>{
    return(
        <aside className="product-detail flex flex-col fixed right-0 border border-gray rounded bg-white shadow-lg">
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div className='rounded-full p-1 text-white bg-indigo-950 absolute right-5 -top-4'><XMarkIcon className="size-6 text-black-500" /></div>
            </div>
        </aside>
    );

};
export default ProductDetail;