import React, { useState } from 'react';
import axios from 'axios';
import DisplayProducts from './DisplayProducts';

//we are defining a new Product Component over here.
const NewProduct = () => {
  //lets define the enmpty state over here.


//now we have the state over here.
const [newproduct,setProduct]=useState({
  productName:"",
  productCategory:"",
  productCompany:"",
  productCountry:""
});

// const handleChange = (e) => {
//   const value = e.target.value;
//   setEmployee({...newproduct, [e.target.name]: value });
// };

  // const inputChange=(e)=>
  // {
  //   e.preventDefault();
  //   setNewProduct({...product,[e.target.name]:e.target.value});
  //  // console.log(inputChange);
  // }


  

  const onSubmit=(e)=>
  {
    //we need to consider a post request over here.
    //we are posting the data over here.
    e.preventDefault();
    return axios.post("http://localhost:8080/productsapi/v1/addNewProduct",newproduct);

  }
//lets retrieve the values from the input tag using the value attribute of input tag.
  return (
    <React.Fragment>
     <div className='flex max-w-xl mx-auto justify-center border-b'>
        <div className='px-6 py-6'>
            <h4 className='items-center text-center mb-8'>New Product</h4>
            <form onSubmit={(e)=>onSubmit(e)}>

            {/* <label htmlFor="productName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white
    width:50% mx-auto justify-center
    ">Product Name</label> */}
    <br/>

    <label>Product Name</label>
{/* <input
            type="text"
            name="productName"
            value={product.productName}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2" ></input> */}
            <br/>

<input 
type="text"
name="productName"
value={newproduct.productName}
onChange={(e)=>{
  e.preventDefault();
  const value = e.target.value;
  setProduct({...newproduct, [e.target.name]: value });
  console.log(newproduct);
}}
// onChange={(e) => handleChange(e)}
className="h-10 w-96 border mt-2 px-2 py-2"
>

</input>
<br/>
    <label>Product Category</label>
    <br/>

<input 
type="text"
name="productCategory"
value={newproduct.productCategory}
onChange={(e)=>{
  e.preventDefault();
  const value = e.target.value;
  setProduct({...newproduct, [e.target.name]: value });
  console.log(newproduct);
}}
// onChange={(e) => handleChange(e)}
className="h-10 w-96 border mt-2 px-2 py-2"
>

</input>
<br/>

    <label>Product Country</label>
    <br/>

<input 
type="text"
name="productCountry"
value={newproduct.productCountry}
onChange={(e)=>{
  e.preventDefault();
  const value = e.target.value;
  setProduct({...newproduct, [e.target.name]: value });
  console.log(newproduct);
}}
// onChange={(e) => handleChange(e)}
className="h-10 w-96 border mt-2 px-2 py-2"
>

</input>
<br/>

<label>Product Company</label>

<br/>

<input 
type="text"
name="productCompany"
value={newproduct.productCompany}
onChange={(e)=>{
  e.preventDefault();
  const value = e.target.value;
  setProduct({...newproduct, [e.target.name]: value });
  console.log(newproduct);
}}
// onChange={(e) => handleChange(e)}
className="h-10 w-96 border mt-2 px-2 py-2"
>

</input>
<br/>

<button  
    type={"submit"}
    onClick={(e)=>
            {
               console.log(newproduct);
            }}
    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-12 width:50% mx-auto justify-center"
    >Submit</button>

    {/* <button  onClick={(e)=>
            {
               console.log(newproduct);
            }}
    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-12 width:50% mx-auto justify-center ml-2">
    Clear
    </button> */}

    {/* <input 
    type="text" 
    name="productName"
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-8 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 width:50% mx-auto justify-center" 
    value={product.productName} 
    onChange={(e)=>handleChange(e)}
    required
   /> */}

    {/* <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white
    width:50% mx-auto justify-center mt-8
    ">Product Category</label>
    <input 
    type="text" 
    id="productcategory" 
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-12 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 width:50% mx-auto justify-center" 
    value={product.productCategory} 
    onChange={(e)=>handleChange(e)}
     />



    <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white
    width:50% mx-auto justify-center mt-8
    ">Product Manufacturing Country</label>
    <input 
    type="text"
     id="productmanufacturingcountry" 
     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-12 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 width:50% mx-auto justify-center"  
     value={product.productManufacturingCountry}
     onChange={(e)=>handleChange(e)}
     />
    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white
    width:50% mx-auto justify-center mt-8
    ">Product Manufacturing Company</label>
    <input 
    type="text" 
    id="productmanufacturingcompany" 
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-12 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 width:50% mx-auto justify-center" 
    value={product.productManufacturingCompany}
    onChange={(e)=>handleChange(e)} />
    <button  
    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-12 width:50% mx-auto justify-center"
    onSubmit={(e)=>handleSubmit(e)}
    >Submit</button>

    <button  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-12 width:50% mx-auto justify-center">Clear</button> */}
    </form>
        </div>
    </div>
    <DisplayProducts/>
       </React.Fragment>
  )
}

export default NewProduct;
