import React,{useEffect, useState} from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo,faGlobeAmericas} from '@fortawesome/free-solid-svg-icons';


const DisplayOrders=()=>
{
    //lets store the details over here.
    const [orderStore,setOrderStore]=useState([]);
   const [Tech,setcountryTech]=useState([]);
    useEffect(()=>{
        loadOrderStore();
    },[]);
    

    const loadOrderStore=async()=>
    {
        const headers = {
            'Access-Control-Allow-Origin' : '*',
        };

      const responseData=await axios.get("http://localhost:8080/ordersapi/v1/orderStore");
      console.log(responseData.data);
      setOrderStore(responseData.data);
      setcountryTech(responseData.data);
    };
    
    return(
        <React.Fragment>
         <p style={{textAlign:"center",marginBottom:"12px",
        marginTop:"12px"}}
        
        class='text-2xl'>Products from All Over the Globe
        <FontAwesomeIcon icon={faGlobeAmericas} size="1x"/></p>
         <div className='container mx-auto justify-center'>
       <div className='py-4'>
       {/* Product Size
       {
            productStore.size
        } */}
        <table  className="w-full text-md text-left text-gray-800 dark:text-gray-800 mx-auto border-solid border-2 shadow-zinc-700">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="col" class="px-6 py-3">Order ID</th>
                <th scope="col" class="px-6 py-3">Order Category </th>
                <th scope="col" class="px-6 py-3">Order Country</th>
                <th scope="col" class="px-6 py-3">Order Status</th>
                <th scope="col" class="px-6 py-3">Order Date</th>
            </tr>
        </thead>
        <tbody>
            {
                orderStore.map((order)=>(
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 padding:2px">
                        <td  className="p-5">{order.orderID}</td>
                        <td>{order.orderCategory}</td>
                        <td>{order.orderStatus
}</td>
                        <td>{order.orderDate
}</td>
                      
                    </tr>
                   
                ))
            }
        </tbody>
        </table>
        </div>

        <p style={{textAlign:"center",marginBottom:"12px",
        marginTop:"12px"}}
        
        class='text-2xl'>Orders from APJ Region
        <FontAwesomeIcon icon={faGlobeAmericas} size="1x"/></p>
        <table  className="w-full text-sm text-left text-gray-800 dark:text-gray-800 mx-auto border-solid border-2 shadow-zinc-700">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="col" class="px-6 py-3">Order ID</th>
                <th scope="col" class="px-6 py-3">Order Category</th>
                <th scope="col" class="px-6 py-3">Order Country</th>
                <th scope="col" class="px-6 py-3">Order Status</th>
                <th scope="col" class="px-6 py-3">Order Date</th>
            </tr>
        </thead>
        <tbody>
            {
                orderStore.filter((order=>order.orderCountry=="Asia" ||order.orderCountry=="Pacific" || order.orderCountry=="Japan")).map((order)=>(
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 padding:2px">
                        <td  className="p-5">Order ID:{order.orderID}</td>
                        <td>{order.orderCategory}</td>
                        <td>{order.orderCountry
}</td>
                        <td>{order.orderStatus
}</td>
                        <td>{order.orderDate}</td>
                      
                    </tr>
                   
                ))
            }
        </tbody>
        </table>

        {/* <p style={{textAlign:"center",marginBottom:"12px",
        marginTop:"12px"}}
        
        class='text-2xl'>Orders from EMEA Region
        <FontAwesomeIcon icon={faGlobeAmericas} size="1x"/></p>
        <table  className="w-full text-sm text-left text-gray-800 dark:text-gray-800 mx-auto border-solid border-2 shadow-zinc-700">
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
                productStore.filter((product=>product.productCountry=="Europe" || product.productCountry=="Middle East" || product.productCountry=="Africa")).map((product)=>(
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
        </div> */}
{/*        
        <div class='container mx-auto'>
        <div class="grid grid-cols-5 grid-flow-col gap-20">
        <div class="max-w-sm rounded overflow-hidden shadow-lg 
        shadow-zinc-700">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">APJ Region</div>
    <p class="text-gray-700 text-base">
      Total Products in the Inventory from APJ Region:{countRegion}
    </p>
  </div>
  </div>

  <div class="max-w-sm rounded overflow-hidden shadow-lg shadow-zinc-700">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">EMEA Region</div>
    <p class="text-gray-700 text-base">
      Total Products in the Inventory from EMEA Region:{EMEARegion}
    </p>
  </div>
</div>
 

<div class="max-w-sm rounded overflow-hidden shadow-lg shadow-zinc-700">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Tech Category</div>
    <p class="text-gray-700 text-base">
      Products From Tech Category:{techCategoryCount}
    </p>
  </div>
 
</div>
        </div>
        
        </div> */}
        {/* <h4 className='items-center text-center mb-12 mt-20'>Product Stats
        <FontAwesomeIcon icon={faCircleInfo}
        size="lg" style={{margin:"2px"}}/>
       </h4>

        <div class='grid  grid-flow-col  content-center md:ml-10'
        >
        <div class="max-w-sm rounded overflow-hidden shadow-lg shadow-zinc-700 m-2">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Tech Category</div>
    <p class="text-gray-700 text-base">
      Products From Tech Category:
      {
        productStore.filter((product=>product.productCategory=="Tech")).map(product=>(
            <li>{product.productCompany}</li>
        ))
      }
    </p>
  </div>
 
</div>


<div class="max-w-sm rounded overflow-hidden shadow-lg shadow-zinc-700 m-2">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Convenience Category</div>
    <p class="text-gray-900 text-1xl">
      Products From Convenience Category:
      {
        productStore.filter((product=>product.productCategory=="Convenience")).map(product=>(
            <li>{product.productCompany}</li>
        ))
      } 
    </p>
  </div>

  
 
</div>
</div>


<div class='grid  grid-flow-col  content-center md:ml-20'
        >
        <div class="max-w-sm rounded overflow-hidden shadow-lg shadow-zinc-700 m-2">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Education Category</div>
    <p class="text-gray-700 text-base">
      Products From Education Category:
      {
        productStore.filter((product=>product.productCategory=="Education")).map(product=>(
            <li>{product.productCompany}</li>
        ))
      }
    </p>
  </div>
 
</div>


<div class="max-w-sm rounded overflow-hidden shadow-lg shadow-zinc-700 m-2">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Sports Category</div>
    <p class="text-gray-900 text-1xl">
      Products From Sports Category:
      {
        productStore.filter((product=>product.productCategory=="Sports")).map(product=>(
            <li>{product.productCompany}</li>
        ))
      } 
    </p>
  </div>

  
 
</div>
</div>



 */}


 </div>
        </React.Fragment>
    )
};


export default DisplayOrders;
