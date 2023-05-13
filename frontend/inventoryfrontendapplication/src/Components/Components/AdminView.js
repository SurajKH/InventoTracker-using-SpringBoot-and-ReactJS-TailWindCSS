import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//we are generating an Admin View over here.
const AdminView = () => {
    //lets consider the defintion of states.
    const admin_username="admin";
    const admin_password="admin123";

    const [username,setUsername]=useState('');
    const [userPassword,setUserPassword]=useState('');

    //we have set the initial baseurl for the application over here.

    const navigate = useNavigate('http://localhost:3003');
    //lets consider the concept of conditional rendering over here.
    /*
       lets update the data from the form,then apply the conditional rendering to redirect them to a new page.

    */

       const handleSubmit=(e)=>
       {
        e.preventDefault();
        if(username==admin_username && admin_password==userPassword)
        {
           // console.log("Authentication Successfull");
           //now lets redirect to a new Page.
           navigate('/ProductsView');

        }
        else{
          //  console.log("Authentication was not Successfull");
          navigate('/ErrorPage');
        }
       }
  return (
    <React.Fragment>
    <h2 class='text-center text-lg'>Admin View</h2>
    <div className='flex max-w-xl mx-auto justify-center border-b'>
        <div className='px-6 py-6'>
        <form onSubmit={(e)=>handleSubmit(e)}>
        <br/>
            <label>Admin Name</label>
            <br/>
            <input 
                type='text'
                onChange={(e)=>{
                    setUsername(e.target.value)
                }}
            />
            <br/>
            <label>Admin Password</label>
            <br/>
            <input type='text' onChange={(e)=>
            {
                setUserPassword(e.target.value);
            }} />
            <br/>
            <button type="submit">Submit</button>
        </form>
        </div>
        </div>
    </React.Fragment>
  )
}

export default AdminView;
