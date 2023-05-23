import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//we are generating an Admin View over here.
const AdminView = () => {
    //lets consider the defintion of states.
    const admin_username="admin";
    const admin_password="admin123";

    const [username,setUsername]=useState('');
    const [userPassword,setUserPassword]=useState('');
    const [stateView,setStateView]=useState('');

    //we have set the initial baseurl for the application over here.

    const navigate = useNavigate('http://localhost:3003');
    //lets consider the concept of conditional rendering over here.
    /*
       lets update the data from the form,then apply the conditional rendering to redirect them to a new page.

    */

       const handleSubmit=(e)=>
       {
        e.preventDefault();
        if(username==admin_username && admin_password==userPassword && stateView=="ProductView")
        {
           // console.log("Authentication Successfull");
           //now lets redirect to a new Page.
           navigate('/ProductsView');

        }
        else if(username==admin_username && admin_password==userPassword && stateView=="OrderView")
        {
           // console.log("Authentication Successfull");
           //now lets redirect to a new Page.
           navigate('/OrdersView');

        }
        else if(username==admin_username && admin_password==userPassword && stateView=="AboutView")
        {
           // console.log("Authentication Successfull");
           //now lets redirect to a new Page.
           navigate('/AboutUs');

        }
        else{
          //  console.log("Authentication was not Successfull");
          navigate('/ErrorPage');
        }
       }
  return (
    <React.Fragment>
    <h2 class='text-center text-lg border-spacing-4 border-black'>Admin View</h2>
    <div className='flex max-w-xl mx-auto justify-center border-b'>
        <div className='px-6 py-6'>
        <form onSubmit={(e)=>handleSubmit(e)}>
        <br/>
            <label class='text-2xl mb-12'>Admin Name</label>
            <br/>
            {/* <input 
                type='text'
                onChange={(e)=>{
                    setUsername(e.target.value)
                }}
            /> */}
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5 mt-4" id="username" type="text" 
            placeholder="Username" 
                onChange={(e)=>{
                    setUsername(e.target.value)
                }}
            />

            <br/>
            <label class='text-2xl'>Admin Password</label>
            <br/>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5 mt-4" id="username" type="text" 
            placeholder="Username" 
                onChange={(e)=>{
                    setUserPassword(e.target.value)
                }}
            />

            <br/>
            <br/>
            <label class='text-2xl'>Scope Accessibility</label>
            <br/>
            <br/>
            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
   <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e)=>{
    e.preventDefault();
    setStateView(e.target.value);
   }}>
      <option selected>Choose a Scope</option>
      <option value="ProductView">Product View</option>
      <option value="OrderView">Order View</option>
      <option value="AboutView">About View</option>
      
       </select>
       <br/>
            <button 
            class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mx-auto ml-12" type="submit">Submit</button>
           <br/>

        </form>
        </div>
        </div>
    </React.Fragment>
  )
}

export default AdminView;
