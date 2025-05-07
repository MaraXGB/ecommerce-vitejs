import { useContext } from 'react';
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from '../../Components/ProductDetail';
import { ShoppingCartContext } from '../../Context';

function Home() {
    const context = useContext(ShoppingCartContext);
  

    return (
        <Layout>
          <h1 className='font-medium text-xl mb-5'>Exclusive Products</h1>
          <input className='border rounded-lg w-60 p-2 focus: outline-none' 
          type="text" 
          placeholder='Search a product'
          onChange={(event) => event.target.value} />

          <div className="grid gap-4 grid-cols-4 w-full max-w-screen-xl">
          {
            context.items?.map(item => (
              <Card key={item.id} data={item} />
            ))
          }
          </div>
          <ProductDetail />
        </Layout>
    )
  }
  
  export default Home