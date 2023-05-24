import React from 'react';
import AdminView from './AdminView';
const About = () => {
  return (
    <React.Fragment>
    <div className="content-center"
    >
     <p class='text-2xl text-center py-12 px-12'>About Us</p>
    </div>
   
<p class="mb-3 text-black dark:text-gray-400 text-center text-2xl">One Stop Solution for Product and Orders Inventory Management</p>
<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 mx-auto w-1/2">
<div class="max-w-sm rounded overflow-hidden shadow-lg mb-3">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Product Management Services</div>
    <p class="text-gray-700 text-base">
      We Provide Product Management Services for All Over the Globe(APJ and EMEA Region).
    </p>
  </div>
  <div class="px-6 pt-4 pb-2 mb-3">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Product Management</span>
    
  </div>
</div>

<div class="max-w-sm rounded overflow-hidden shadow-lg mb-3">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Orders Management Services </div>
    <p class="text-gray-700 text-base">
      We Provide Orders Management Services for All Over the Globe(APJ and EMEA Region) 
    </p>
  </div>
  <div class="px-6 pt-4 pb-2 mb-3">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Order Management</span>
    
  </div>
</div>

<div class="max-w-sm rounded overflow-hidden shadow-lg mb-3">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Admin Priveleges and Functionality</div>
    <p class="text-gray-700 text-base">
      We Follow Strict Authentication and Authorization,By Providing the Accessibility to Admin Users. 
    </p>
  </div>
  <div class="px-6 pt-4 pb-2 mb-3">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Admin Privileges</span>
    
  </div>
</div>
<div class="max-w-sm rounded overflow-hidden shadow-lg mb-3">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Products and Order Statistics</div>
    <p class="text-gray-700 text-base">
      Products and Order Statistics to keep track of all the Products and Orders in the Inventory.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2 mb-3">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Statistics</span>
    
  </div>
</div>
</div>


    {/* <div className="flex flex-wrap -m-3"> 
  <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">
      <div class="p-4 flex-1 flex flex-col" >
        <h3 class="mb-4 text-2xl">My heading</h3>
        <div class="mb-4 text-grey-darker text-sm flex-1">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
        </div>
        <a href="#" class="border-t border-grey-light pt-2 text-xs text-grey hover:text-red uppercase no-underline tracking-wide">Twitter</a>
      </div>
    </div>  
  </div>
  <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">
      <div class="p-4 flex-1 flex flex-col" >
        <h3 class="mb-4 text-2xl">My heading</h3>
        <div class="mb-4 text-grey-darker text-sm flex-1">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
        </div>
      </div>
    </div>  
  </div>
  <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">
      <div class="p-4 flex-1 flex flex-col" >
        <h3 class="mb-4 text-2xl">One Stop Solution for tracking Products and Orders</h3>
        <div class="mb-4 text-grey-darker text-sm flex-1">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
        </div>
      </div>
    </div>  
  </div>
  </div> */}

  {/* <AdminView/> */}
    </React.Fragment>
  )
}

export default About;
