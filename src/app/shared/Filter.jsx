import React from 'react'

const Filter = () => {
  return (
    <div className='mr-2'>
   <div className="collapse collapse-arrow mt-5">
  <input type="checkbox" /> 
  <div className="collapse-title text-lg font-medium">
  Venue type
  </div>
  <div className="collapse-content pr-20"> 
  <ul class=" flex flex-col">
  <li class="inline-flex items-center font-semibold gap-x-2 py-3 px-4 text-sm font-medium   text-gray-800 rounded-lg hover:border-gray-200 hover:border hover:bg-primary hover:text-white focus:border-gray-200 focus:border">
  All types
  </li>
  <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium   text-gray-800 rounded-lg hover:border-gray-200 hover:border hover:bg-primary hover:text-white focus:border-gray-200 focus:border">
  Barns & Farms
  </li>
  <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium   text-gray-800 rounded-lg hover:border-gray-200 hover:border hover:bg-primary hover:text-white focus:border-gray-200 focus:border">
  Hotels
  </li>
  <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium   text-gray-800 rounded-lg hover:border-gray-200 hover:border hover:bg-primary hover:text-white focus:border-gray-200 focus:border">
  Barns & Farms
  </li>
  <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium   text-gray-800 rounded-lg hover:border-gray-200 hover:border hover:bg-primary hover:text-white focus:border-gray-200 focus:border">
  Wineries & Breweries
  </li>
  <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium   text-gray-800 rounded-lg hover:border-gray-200 hover:border hover:bg-primary hover:text-white focus:border-gray-200 focus:border">
  Country Clubs
  </li>
 <li class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium   text-gray-800 rounded-lg hover:border-gray-200 hover:border hover:bg-primary hover:text-white focus:border-gray-200 focus:border">
 Rooftops & Lofts
  </li>
 
</ul>
  </div>
</div>
<div class="border-t  border-gray-300"></div>
               {/* ====== Region=========*/}
<div className="collapse collapse-arrow mt-3">
  <input type="checkbox" /> 
  <div className="collapse-title text-lg font-medium">
  Region
  </div>
  <div className="collapse-content ">
   {/* Search for Region */}
 
          <input
            type="search"
            placeholder=" Region"
            className="border px-3 py-2 rounded-md w-full hover:border-primary focus:outline-none"
          />

          {/* Search for City/Town */}
          <div className="text-sm font-semibold mt-3 mb-3">City/Town</div>
          <input
            type="search"
            placeholder=" City/Town"
            className="border px-3 py-2 rounded-md w-full hover:border-primary focus:outline-none"
          />
        </div>
          

       
          
</div>

<div class="border-t  border-gray-300"></div>

    </div>

    
  )
}

export default Filter