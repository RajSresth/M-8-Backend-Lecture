import {useEffect, useState} from 'react'
import api from '../api/axiosInstance';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const getProducts = async () => {
         try {
             const response = await api.get("/product/get-all-products");

             if(response.status !== 200)
             {
                throw new Error("Failed to Fetch");
              }
            setProducts(response?.data.products)
         } catch (error) {
            setError(error);
         }
         finally{
          setLoading(false);
         }
      }

      getProducts()

  }, []);


  if(loading) return <h1>Loading....</h1>

  if(error) return <h1>{error.message}</h1>

  return (
    <div className='w-full h-screen'>
      <div className='mx-auto max-w-300 h-screen flex items-center justify-evenly'>
        {
          products.map(element => <ProductCard key={element.itemName} {...element} />)
        }
      </div>
    </div>
  )
}

export default Home