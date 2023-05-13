import React from 'react';
import AdminView from './AdminView';
const About = () => {
  return (
    <React.Fragment>
    <div className="content-center">
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col content-center">
      <div class="p-4 flex-1 flex flex-col content-start" >
        <h3 class="mb-4 text-2xl text-center">About Us</h3>
        <div class="mb-4 text-grey-darker text-sm flex-1 content-center">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
        </div>
       
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

  <AdminView/>
    </React.Fragment>
  )
}

export default About;