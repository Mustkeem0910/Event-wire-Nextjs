import axios from 'axios';

const API_BASE_URL = 'https://eventwire.onrender.com/api'; // Replace with your actual API base URL

const getVenueTypes = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/venue-types/`); // Adjust the API endpoint accordingly
    console.log("response: ",response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching venue types:', error);
    return [];
  }
};

const getVendorTypes = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/vendor-types/`); 
      console.log("Vendor Types response:", response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching vendor types:', error);
      return [];
    }
};

const getStates = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/states/`); 
    console.log("Sates response:", response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching states:', error);
    return [];
  }
};

const getCities = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/cities/`); 
      console.log("Cities response:", response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching cities:', error);
      return [];
    }
  };

  const postFormData = async (formData, sectorType) => {
    const postData = {
      name: formData.businessName,
      city: formData.city,
      venue_type: sectorType === 'Venue' ? formData.businessType : null,
      vendor_type: sectorType === 'Vendor' ? formData.businessType : null,
      email: formData.email,
      phone_number: formData.phoneNumber,
      user_name: formData.username,
      password: formData.password,
    };
  
    const endpoint = sectorType === 'Vendor' ? '/vendor-logins/' : '/venue-logins/';
  
    try {
      const response = await axios.post(`${API_BASE_URL}${endpoint}`, postData);
      return response.data;
    } catch (error) {
      console.error('Error:', error);
      throw error; // Re-throw the error for the component to handle if needed
    }
  };



  export const loginVenue = async (data) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/venue/login/`, data);
      return response.data; // Assuming your backend returns the user data and tokens
    } catch (error) {
      throw error;
    }
  };
  
  export const loginVendor = async (data) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/vendor/login/`, data);
      return response.data; // Assuming your backend returns the user data and tokens
    } catch (error) {
      throw error;
    }
  };


  export const signUpUser = async (userData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/user-logins/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
  
      if (response.ok) {
        return await response.json();
      } else {
        throw new Error(`Error: ${response.status}`);
      }
    } catch (error) {
      throw new Error(`Error: ${error.message}`);
    }
  };


  export const loginUser = async (email, password) => {
    try {
      const response = await fetch(`${API_BASE_URL}/user/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        const data = await response.json();
        console.log(data);
        throw new Error(data);
      }
    } catch (error) {
      throw new Error('An error occurred during login. Please try again.');
    }
  };


  const fetchVenues = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/venues/`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Rethrow the error to handle it in the component
    }
  };
  


  const fetchVendors = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/vendor-types/`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch vendors. Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching vendor data:', error);
      throw error; // Rethrow the error to handle it in the component
    }
  };



  export const getVenueTypeById = async (venueTypeId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/venue-types/${venueTypeId}/`);
      if (!response.ok) {
        throw new Error(`Failed to fetch venue type with ID ${venueTypeId}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching venue type:', error);
      throw error;
    }
  };

  export const getVendorTypeById = async (vendorTypeId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/vendor-types/${vendorTypeId}/`);
      if (!response.ok) {
        throw new Error(`Failed to fetch venue type with ID ${vendorTypeId}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching venue type:', error);
      throw error;
    }
  };

  export const getCityById = async (cityId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/cities/${cityId}/`);
      if (!response.ok) {
        throw new Error(`Failed to fetch city with ID ${cityId}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching city:', error);
      throw error;
    }
  };

  export const getVendors = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/vendors/`);
      if (!response.ok) {
        throw new Error(`Failed to fetch Vendors`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching Vendors', error);
      throw error;
    }
  };

  export const fetchVenuesById = async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/venues/${id}/`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Rethrow the error to handle it in the component
    }
  };

  export const fetchVendorsById = async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/vendors/${id}/`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Rethrow the error to handle it in the component
    }
  };

export { getVenueTypes, getVendorTypes,getStates, getCities, postFormData,fetchVenues, fetchVendors };