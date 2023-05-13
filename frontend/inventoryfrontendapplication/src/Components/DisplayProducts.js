import React,{useEffect, useState} from "react";
import axios from "axios";

//we are expected to display the Porducts over here.

const DisplayProducts=()=>
{
    //lets store the details over here.
    const [productStore,setProductStore]=useState([]);

    useEffect(()=>{
        loadProductStore();
    },[]);

    const loadProductStore=async()=>
    {
        const headers = {
            'Access-Control-Allow-Origin' : '*',
        };

      const responseData=await axios.get("http://localhost:8080/productsapi/v1/productStore");
      console.log(responseData.data);
      setProductStore(responseData.data);

    };
    
    return(
        <React.Fragment>
         <div className='container mx-auto justify-center'>
       <div className='py-4'>
       Product Size
       {
            productStore.size
        }
        <table  className="w-full text-sm text-left text-gray-800 dark:text-gray-800 mx-auto border-solid border-2">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="col" class="px-6 py-3">Product ID</th>
                <th scope="col" class="px-6 py-3">Product Name</th>
                <th scope="col" class="px-6 py-3">Product Category</th>
                <th scope="col" class="px-6 py-3">Product Company</th>
                <th scope="col" class="px-6 py-3">Product Country</th>
            </tr>
        </thead>
        <tbody>
            {
                productStore.map((product)=>(
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 padding:2px">
                        <td  className="p-5">ProductID:{product.productId}</td>
                        <td>{product.productName}</td>
                        <td>{product.productCategory
}</td>
                        <td>{product.productCompany
}</td>
                        <td>{product.productCountry}</td>
                      
                    </tr>
                   
                ))
            }
        </tbody>
        </table>
        </div>
        </div>
        </React.Fragment>
    )
};

export default DisplayProducts;