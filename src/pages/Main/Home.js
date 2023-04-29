import React from "react";
import { useDispatch } from "react-redux";
import ProductCard from "../../components/ProductCard";
import { toggleBrand, toggleStock } from "../../redux/actions/filterActions";
import { useGetProductsQuery } from "../../features/api/apiSlice";
import { MdProductionQuantityLimits } from "react-icons/md";
// ,isLoading,isError,isSuccess,error
const Home = () => {
  const {isError,isFetching,isLoading,isSuccess,data,error}=useGetProductsQuery()
  const products = data?.data;
  // const filters = useSelector((state) => state.filter.filters);
  // const products = useSelector((state) => state.product.products);
  console.log(products,'check brand');
  const dispatch = useDispatch();

  const activeClass = "text-white bg-indigo-500 border-white";
  if (isLoading) {
  return <p>Loading...</p>
  }
  if (isError) {
    return <p>Something went wrong.</p>
  }
  return (
    <div className='max-w-7xl gap-14 mx-auto my-10'>
      <div className='mb-10 flex justify-end gap-5'>
        <button
          onClick={() => dispatch(toggleStock())}
          className={`border px-3 py-2 rounded-full font-semibold  `}
        >
          In Stock
        </button>
        <button
          onClick={() => dispatch(toggleBrand("amd"))}
          className={`border px-3 py-2 rounded-full font-semibold `}
        >
          AMD
        </button>
        <button
          onClick={() => dispatch(toggleBrand("intel"))}
          className={`border px-3 py-2 rounded-full font-semibold `}
        >
          Intel
        </button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14'>
        
       {products.map(products=><ProductCard product={products}></ProductCard>)   }
        
      </div>
    </div>
  );
};

export default Home;
