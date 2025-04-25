import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import {Link} from 'react-router-dom';
import Layout from "../../Components/Layout";
import OrderCard from '../../Components/OderCard';

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  console.log(context.order);
    return (
        <Layout>
          <div className='flex w-80 relative justify-start items-center gap-2 mb-6 pl-10 mt-4'>
            <Link to={`/my-orders/`} className='absolute left-0'>
              <ChevronLeftIcon className="size-6 text-black-500 cursor-pointer" />
            </Link>
            <h1>My Order</h1>
          </div>
           <div className='h-full flex-1 mb-6 mt-4'>
                {
                    context.order?.slice(-1)[0].products.map(product => (
                        <OrderCard key={product.id} 
                        id={product.id}
                        title={product.title} 
                        price={product.price}
                        imageUrl={product.images}
                        />
                    ))
                }
            </div>
        </Layout>
    )
  }
  
  export default MyOrder