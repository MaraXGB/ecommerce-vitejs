import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import {Link} from 'react-router-dom';
import Layout from "../../Components/Layout";
import OrderCard from "../../Components/OderCard";
import OrdersCard from '../../Components/OrdersCard';

function MyOrders() {
  const context = useContext(ShoppingCartContext);
    return (
        <Layout>
          
          <h1>My Orders</h1>
          {
            context.order.map((order, index) => (
              <Link to={`/my-orders/${index}`} key={index}>
               <OrdersCard
                key={order.date}
                totalPrice={order.total}
                totalProducts={order.totalProducts}
                />
              </Link>
             
          ))
        }
        </Layout>
    )
  }
  
  export default MyOrders