import { useContext } from 'react';
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from '../../Components/ProductDetail';
import { ShoppingCartContext } from '../../Context';

function Home() {
    const context = useContext(ShoppingCartContext);
    const renderView = () => {
      
      if(context.searchByTitle?.length > 0 || context.searchByCategory?.length > 0) {
        //console.log("searchByCategory", context.filteredItems);
        if(context.filteredItems?.length > 0) {
          return (
                context.filteredItems?.map(item => (
                  <Card key={item.id} data={item} />
                ))
          )
        }
        else {
          return (
            <div className='flex justify-center items-center w-full h-full'>
              <p className='font-medium text-xl mb-5'>No results found</p>
            </div>
          )
        }
      }
      else {
          return (
                context.items?.map(item => (
                  <Card key={item.id} data={item} />
                ))
          )
      }
    }

    return (
        <Layout>
          <h1 className='font-medium text-xl mb-5'>Exclusive Products</h1>
          <input className='border rounded-lg w-100 p-2 focus: outline-none' 
          type="text" 
          placeholder='Search a product'
          onChange={(event) => context.setSearchByTitle(event.target.value)} />
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full max-w-screen-xl mt-6">
            {renderView()}
          </div>
          <ProductDetail />
        </Layout>
    )
  }
  
  export default Home