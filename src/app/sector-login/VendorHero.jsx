// VendorHero.jsx
import React, { useState } from 'react';
import Image from 'next/image';
import vendorhero from '../../../public/vendorhero.png';
import { useRouter } from 'next/navigation'; // Correct import for next/router
import { loginVenue, loginVendor } from '../api/api';
// import feature from '../../../public/Feature.png';


const VendorHero = () => {
  const router = useRouter();
  const [loginData, setLoginData] = useState({
    sectorType: 'Venue',
    user_name: '',
    password: '',
  });



  // const handleClick = () => {
  //   router.push('/sector-signup');
  // };

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.id]: e.target.value,
    });
  };

  const handleLogin = async () => {
    try {
      let loginResponse;

      if (loginData.sectorType === 'Venue') {
        loginResponse = await loginVenue(loginData);
      } else if (loginData.sectorType === 'Vendor') {
        loginResponse = await loginVendor(loginData);
      }

      // Assuming your backend returns the user data and tokens
      const { access_token, refresh_token, user } = loginResponse;

      // Perform actions with the access token, such as storing it in local storage or cookies
      // ...

      // Redirect to a different page after successful login
      router.push('/');
    } catch (error) {
      // Handle login error, show a message, or perform other actions
      console.error('Login failed:', error);
    }
  };

  const handleClick = () => {
    router.push('/sector-signup');
  };

  return (
    <>
      <section className="text-text100 font-[Poppins] mx-20">
        <div
          className="container flex text-black font-[Poppins] px-5 py-24 md:flex-row flex-col items-center"
          style={{
            backgroundImage: 'url("")', // Replace with your image URL
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Grow your business with Company Name!
            </h1>

            <div className="flex justify-center">
              <button className="bg-primary font-semibold text-white px-4 py-2 cursor-pointer" onClick={handleClick}>
                SIGN UP
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            {/* Login Form */}
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <h2 className="text-3xl font-semibold mb-6 text-center">Vendor/Venue Login</h2>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sectorType">
                  Select Sector
                </label>
                <select
                  id="sectorType"
                  name="sectorType"
                  className="input dropdown dropdown-hover input-bordered input-primary w-full"
                  onChange={handleChange}
                  value={loginData.sectorType}
                >
                  <option value="Venue">Venue</option>
                  <option value="Vendor">Vendor</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                  Username
                </label>
                <input
                  type="text"
                  placeholder="username"
                  id="user_name"
                  className="input input-bordered input-primary w-full"
                  onChange={handleChange}
                  value={loginData.user_name}
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="*********"
                  id="password"
                  className="input input-bordered input-primary w-full"
                  onChange={handleChange}
                  value={loginData.password}
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-primary font-semibold text-white px-4 py-2 cursor-pointer"
                  type="button"
                  onClick={handleLogin}
                >
                  Log In
                </button>
                <a
                  className="inline-block align-baseline font-semibold text-sm text-text100 hover:text-primary"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
            </form>
          </div>
        </div>


        {/* Feature Section */}
        <div className="container  mt-16">
          <h2 className="text-2xl font-semibold text-primary">Features</h2>
          <div className="flex mt-8">
            <div className="w-1/2 pr-4 flex  flex-col justify-evenly  ">
              <p className="text-text100 tracking-wide leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula justo eu leo consectetur, ut eleifend nunc ullamcorper. Vestibulum dapibus eros eu nisl ultrices ullamcorper.

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula justo eu leo consectetur, ut eleifend nunc ullamcorper. Vestibulum dapibus eros eu nisl ultrices ullamcorper.

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula justo eu leo consectetur, ut eleifend nunc ullamcorper. Vestibulum dapibus eros eu nisl ultrices ullamcorper.

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula justo eu leo consectetur, ut eleifend nunc ullamcorper. Vestibulum dapibus eros eu nisl ultrices ullamcorper.
              </p>

            </div>
            <div className="w-1/2  flex justify-evenly">
              <div className="w-637 h-436 ">
                {/* <Image src={feature} alt="logo" className="max-w-sm   shadow-2xl" /> */}
              </div>
            </div>
          </div>
        </div>

         {/* Stats Section */}
         <div className="bg-base-300 mt-16  py-3">
  <div className="container border   flex flex-col  lg:flex-row justify-evenly text-text100">
  
    <div className="stats bg-primary shadow flex-1 text-center lg:w-1/4 mx-2 my-2 ">
      <div className="stat text-white ">
        <div className="stat-value">10,000</div>
        <div className="stat-title text-center text-white">Vendors</div>
      </div> 
    </div>

    <div className="stats bg-primary shadow flex-1 text-center lg:w-1/4 mx-2 my-2">
      <div className="stat text-white">
        <div className="stat-value">20,000</div>
        <div className="stat-title text-center text-white">Annual Events</div>
      </div> 
    </div>

    <div className="stats bg-primary shadow flex-1  text-center lg:w-1/4 mx-2 my-2">
      <div className="stat text-white">
        <div className="stat-value">1000</div>
        <div className="stat-title text-center text-white">Event Venues</div>
      </div> 
    </div>

    <div className="stats bg-primary shadow flex-1  text-center lg:w-1/4 mx-2 my-2 ">
      <div className="stat text-white ">
        <div className="stat-value text-center">1.2 M</div>
        <div className="stat-title text-center text-white">Monthly Followers</div>
      </div> 
    </div>
    
  </div>
</div>
      </section>
    </>
  );
};

export default VendorHero;
