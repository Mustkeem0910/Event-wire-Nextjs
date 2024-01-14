"use client"
import React, { useState , useEffect } from 'react';
import Image from 'next/image';
import vendorhero from '../../../public/vendorsignup.png';
import { useRouter } from 'next/navigation';
import { getVenueTypes, getVendorTypes, getCities, postFormData } from '../api/api';

const Page = () => {
  const router = useRouter();

  const [venueTypes, setVenueTypes] = useState([]);
  const [vendorTypes, setVendorTypes] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchVenueTypes = async () => {
      const types = await getVenueTypes();
      setVenueTypes(types);
    };

    const fetchVendorTypes = async () => {
      const types = await getVendorTypes();
      setVendorTypes(types);
    };

    const fetchCities = async () => {
      const cityList = await getCities();
      setCities(cityList);
    };

    fetchVenueTypes();
    fetchVendorTypes();
    fetchCities();
  }, []);

  const [formData, setFormData] = useState({
    businessName: '',
    city: '',
    sectorType: '',
    businessType: '',
    email: '',
    phoneNumber: '',
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSectorTypeChange = (e) => {
    const selectedSectorType = e.target.value;
    setFormData({
      ...formData,
      sectorType: selectedSectorType,
      businessType: '', // Reset businessType when sectorType changes
    });
  };

  const validateForm = () => {
    const newErrors = {};

    // Validation logic for businessName
    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Business Name is required';
    }

    // Validation logic for city
    if (!formData.city) {
      newErrors.city = 'City is required';
    }

    // Validation logic for sectorType
    if (!formData.sectorType) {
      newErrors.sectorType = 'Sector Type is required';
    }

    // Validation logic for businessType
    if (!formData.businessType) {
      newErrors.businessType = 'Business Type is required';
    }

    // Validation logic for email
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    // Validation logic for phoneNumber
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone Number is required';
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Invalid phone number';
    }

    // Validation logic for username
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }

    // Validation logic for password
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleClick = async () => {
    const isValid = validateForm();

    if (isValid) {
      try {
        await postFormData(formData, formData.sectorType);
        router.push('/sector-login'); // Redirect to the appropriate page after successful submission
      } catch (error) {
        // Handle the error, e.g., show an error message to the user
        console.error('Failed to submit the form:', error);
      } 
    }
  };
  

  const [screenSize, setScreenSize] = useState('md'); // Assuming default size is medium

  useEffect(() => {
    // Add an event listener or use a library to dynamically update screenSize
    // Here is a simplified example using window.innerWidth
    const handleResize = () => {
      const width = window.innerWidth;
      setScreenSize(width < 640 ? 'sm' : 'md');
    };

    handleResize(); // Initial call to set screen size

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row font-[Poppins] min-h-screen">
      {/* Image Section (50%) */}
      <div className="relative w-full md:w-1/2 hidden md:flex">
        <Image src={vendorhero} alt="logo" fill className="object-cover w-full h-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 className="text-4xl">Boost Your Business with us</h1>
        </div>
      </div>

      {/* Signup Form Section (50%) */}
      <div className="w-full md:w-1/2 py-3 px-4 md:px-16">
        <div>
          {/* Company Name */}
          <h1 className="text-2xl font-semibold text-primary mb-2">Company Name</h1>

          {/* Tagline */}
          <p className="text-xl sm:text-4xl mb-6">Try for free and grow your business.</p>

          {/* Contact Details Section */}
          <div className="mb-4">
            <h4 className="text-xl font-semibold mb-2">Contact Details</h4>

            {/* Input Fields */}
            <input
              type="text"
              placeholder="Name of Business"
              id="businessName"
              className={`input input-bordered input-primary w-full mb-4 ${errors.businessName ? 'border-red-500' : ''
                }`}
              onChange={handleChange}
              value={formData.businessName}
            />
            {errors.businessName && (
              <p className="text-red-500 text-sm">{errors.businessName}</p>
            )}

            {/* City Dropdown */}
            <select
              id="city"
              name="city"
              className={`input dropdown dropdown-hover input-bordered input-primary w-full mb-4 ${errors.city ? 'border-red-500' : ''
                }`}
              onChange={handleChange}
              value={formData.city}
            >
              <option value="" disabled defaultValue>Select City</option>
              {cities.map((city) => (
                <option key={city.id} value={city.city_id}>
                  {city.city_name}
                </option>
              ))}
            </select>
            {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}

            {/* Sector Type and Business Type Dropdowns */}
            <div className="md:flex md:space-x-2 mb-2">
              <div className="md:w-1/2">
                <select
                  id="sectorType"
                  name="sectorType"
                  className={`input dropdown dropdown-hover input-bordered input-primary w-full ${errors.sectorType ? 'border-red-500' : ''} ${screenSize === 'sm' ? 'mb-4' : ''}`}
                  onChange={handleSectorTypeChange}
                  value={formData.sectorType}
                >
                  <option value="" disabled defaultValue>Select Sector Type</option>
                  <option value="Venue">Venue</option>
                  <option value="Vendor">Vendor</option>
                </select>
                {errors.sectorType && (
                  <p className="text-red-500 text-sm">{errors.sectorType}</p>
                )}
              </div>

              <div className="md:w-1/2">
                <select
                  id="businessType"
                  name="businessType"
                  className={`input dropdown dropdown-hover input-bordered input-primary w-full ${errors.businessType ? 'border-red-500' : ''}`}
                  onChange={handleChange}
                  value={formData.businessType}
                >
                  <option value="" disabled defaultValue>
                    Select Business Type
                  </option>
                  {formData.sectorType === 'Venue' &&
                    venueTypes.map((type) => (
                      <option key={type.venue_type_id} value={type.venue_type_id}>
                        {type.venue_type}
                      </option>
                    ))}
                  {formData.sectorType === 'Vendor' &&
                    vendorTypes.map((type) => (
                      <option key={type.vendor_type_id} value={type.vendor_type_id}>
                        {type.type_name}
                      </option>
                    ))}
                </select>
                {errors.businessType && (
                  <p className="text-red-500 text-sm">{errors.businessType}</p>
                )}
              </div>
            </div>

            {/* Email and Phone Number Inputs */}
            <input
              type="email"
              placeholder="Email"
              id="email"
              className={`input input-bordered input-primary mt-2 w-full mb-2 ${errors.email ? 'border-red-500' : ''
                }`}
              onChange={handleChange}
              value={formData.email}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            <input
              type="tel"
              placeholder="Phone Number"
              id="phoneNumber"
              className={`input input-bordered input-primary mt-2 w-full mb-4 ${errors.phoneNumber ? 'border-red-500' : ''
                }`}
              onChange={handleChange}
              value={formData.phoneNumber}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
            )}

            {/* Login Information Section */}
            <h4 className="text-xl font-semibold mb-2">Login Information</h4>
            <div className="md:flex md:space-x-2 mb-4">
              <div className="md:w-1/2">
                <input
                  type="text"
                  placeholder="Username"
                  id="username"
                  className={`input input-bordered input-primary w-full ${errors.username ? 'border-red-500' : ''
                    }`}
                  onChange={handleChange}
                  value={formData.username}
                />
                {errors.username && (
                  <p className="text-red-500 text-sm">{errors.username}</p>
                )}
              </div>
              <div className="md:w-1/2 mt-2 md:mt-0">
                <input
                  type="password"
                  placeholder="Password"
                  id="password"
                  className={`input input-bordered input-primary w-full ${errors.password ? 'border-red-500' : ''
                    }`}
                  onChange={handleChange}
                  value={formData.password}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password}</p>
                )}
              </div>
            </div>

            {/* Agreement Section */}
            <div className="mb-4">
              <h6 className="text-sm font-semibold text-gray-700 mb-1">
                By clicking 'Button', I agree to Company Name’s{' '}
                <span className="font-semibold">Privacy Policy</span> and{' '}
                <span className="font-semibold">Terms of Use</span>
              </h6>
            </div>

            {/* Button */}
            <button className="bg-primary text-white py-2 px-4 rounded" onClick={handleClick}>
              Create Your Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;