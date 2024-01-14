import React from 'react'
import { IoCameraOutline } from "react-icons/io5";

const page = () => {
  return (
    <div>
      <div className="m-5">
            {/* Gallery Heading */}
            <div>
                <h1 className="text-3xl mb-4 font-bold">Basic Business Information</h1>
            </div>

            <div className="bg-base-200 rounded-md p-4">
                <div className="flex items-center">
                    <IoCameraOutline className="text-text100 text-7xl mr-5" />
                    <p className="inline font-[sans] ">
                        Add at least 4 photos highlighting your products or services to give couples a clear picture of your work.
                        Storefronts with more photos & Video typically receive more leads.
                    </p>
                </div>



            </div> 
        </div>
    </div>
  )
}

export default page