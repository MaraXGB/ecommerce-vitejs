import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import Layout from "../../Components/Layout";
import OrderCard from '../../Components/OderCard';

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  console.log(context.order);
    return (
        <Layout>
          MyOrder
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