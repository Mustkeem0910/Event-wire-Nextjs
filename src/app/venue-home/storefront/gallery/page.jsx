"use client"
import React, { useState } from 'react';
// import { FaCamera } from 'react-icons/fa';
import { BiCameraMovie } from "react-icons/bi";
import { IoCameraOutline } from "react-icons/io5";
import { FaTrash } from 'react-icons/fa';

const Page = () => {

    const [selectedImages, setSelectedImages] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const handleImageUpload = (e) => {
        const files = e.target.files;

        // Check if adding the new files exceeds the limit (8)
        if (selectedImages.length + files.length > 8) {
            alert('You can only upload up to 8 photos.');
        } else {
            setSelectedImages([...selectedImages, ...files]);
        }
    };

    const handleImageDelete = (index) => {
        const updatedImages = [...selectedImages];
        updatedImages.splice(index, 1);
        setSelectedImages(updatedImages);
    };

    const handleVideoUpload = (e) => {
        const file = e.target.files[0];

        if (file && file.size <= 100 * 1024 * 1024) {
            setSelectedVideo(file);
        } else {
            alert('Please select a video file with a maximum size of 100MB.');
        }
    };


    const handleVideoDelete = () => {
        setSelectedVideo(null);
    };


    return (
        <div className="m-5">
            {/* Gallery Heading */}
            <div>
                <h1 className="text-3xl mb-4 font-bold">Photos</h1>
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


            
            {/* Upload Image Section */}
            <div className="border border-text100 mt-5 rounded flex items-center">
                <div className="m-4">
                    <input
                        type="file"
                        className="file-input w-full max-w-xs"
                        accept="image/*"
                        multiple
                        onChange={handleImageUpload}
                    />
                </div>
                <div className="ml-auto mr-4">
                    <button className="bg-primary text-white px-4 py-2 rounded">Save</button>
                </div>
            </div>


            {/* Display Uploaded Images Section */}
            <div className="mt-5 flex">
                {selectedImages.map((image, index) => (
                    <div key={index} className="flex items-center mb-2 mr-4">
                        <img src={URL.createObjectURL(image)} alt={`Uploaded Image ${index + 1}`} className="w-24 h-24 rounded-md mr-2" />
                        <button onClick={() => handleImageDelete(index)} className="text-red-700">
                            <FaTrash />
                        </button>
                    </div>
                ))}
            </div>


            {/* Add Image */}
            <div className="bg-base-200 rounded-md  mt-10 p-4">
                <div className="flex items-center">
                    <BiCameraMovie className="text-text100 text-7xl mr-5" />
                    <p className="inline font-[sans] ">
                        Add at 1 Video highlighting your products or services to give couples a clear picture of your work.
                        Storefronts with more photos & Video typically receive more leads.
                    </p>
                </div>



            </div>

            <div>
                <h1 className="text-3xl mb-4 mt-5 font-bold">Video</h1>
            </div>

 
            {/* Upload Video Section */}
            <div className="border border-text100  rounded flex items-center">
                <div className="m-4">
                    <input
                        type="file"
                        className="file-input w-full max-w-xs"
                        accept="video/*"
                        onChange={handleVideoUpload}
                    />
                </div>
                <div className="ml-auto mr-4">
                    <button className="bg-primary text-white px-4 py-2 rounded">Save</button>
                </div>
            </div>



            {/* Display Uploaded Video Section */}
            {selectedVideo && (
                <div className="mt-5 flex items-center">
                    <video width="320" height="240" controls>
                        <source src={URL.createObjectURL(selectedVideo)} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <button onClick={handleVideoDelete} className="ml-4 text-red-700">
                        <FaTrash />
                    </button>
                </div>
            )}

        </div>
    );
}

export default Page;
