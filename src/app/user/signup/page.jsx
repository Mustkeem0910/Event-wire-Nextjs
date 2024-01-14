"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getCities, signUpUser } from "@/app/api/api";

const Page = () => {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [eventCity, setEventCity] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [isPasswordStrong, setIsPasswordStrong] = useState(true);
  const [cities, setCities] = useState([]);
  const [cityIdMap, setCityIdMap] = useState({});


  useEffect(() => {
    const fetchCities = async () => {
      try {
        const citiesData = await getCities();
        setCities(citiesData);
        console.log(citiesData);

        const idMap = {};
      citiesData.forEach((city) => {
        idMap[city.city_name] = city.city_id;
      });
      setCityIdMap(idMap);
      } catch (error) {
        console.error('Error fetching cities:', error);
      }
    };

    // Call the fetchCities function
    fetchCities();
  }, []);

  const handleClick = () => {
    router.push("/user/login");
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
  
    // Basic form validation
    if (!firstName || !email || !password || !eventCity || !eventDate) {
      alert("Please fill in all fields.");
      return;
    }
  
    // Check for a strong password
    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
    if (!strongPasswordRegex.test(password)) {
      setIsPasswordStrong(false);
      alert(
        "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
      return;
    }
  
    // Use city_id from the mapping
    const cityId = cityIdMap[eventCity];
  
    const userData = {
      name: firstName,
      email,
      password,
      event_city: cityId,
      date: eventDate,
    };
    console.log(userData);
  
    try {
      // Call the signUpUser function only if validations pass
      const response = await signUpUser(userData);
  
      // Success: Redirect or handle accordingly
      router.push("/user/login");
    } catch (error) {
      // Error: Handle accordingly
      console.error(error.message);
      // You might want to set an error state or display a user-friendly error message
    }
  };
  

  return (
    <>
      <nav className="bg-mygrey p-2 mx-4 sm:mx-20 font-[Poppins] ">
        <div className="container mx-auto flex justify-center items-center">
          <div className="text-white">
            <h1 className="text-black text-3xl mt-5 font-semibold cursor-pointer leading-10">
              COMPANY NAME
            </h1>
          </div>
        </div>
      </nav>

      <div className=" font-[Poppins]">
        <div className="container mx-auto flex border border-1 border-gray-300 max-w-4xl">
          <div className="w-2/5 hidden md:block">
            <img
              src="https://cdn1.weddingwire.com/assets/img/layer-alta/default_en-US.jpg"
              alt="Company Logo"
              className="w-full h-full object-cover "
            />
          </div>

          <div className={`w-full md:w-3/5 flex flex-col mx-3 items-center`}>
  
            <div>
              {/* ===================== Sign in with Google Section ======================== */}
              {/* ===================== Sign in with Google Section ======================== */}
              <div className="mt-6 mb-4 text-center">
                <div className="flex items-center justify-center cursor-pointer  p-2 rounded-md border border-gray-300">
                  <div className="g-signin2  ">
                    <img
                      src="data:image/png;base64,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" // Replace with the URL of the Google logo
                      alt="Google Logo"
                      className="h-6 w-6 mr-2"
                    />
                  </div>
                  <div>Sign in with Google</div>
                </div>
              </div>
            </div>
            <div className="divider"></div>
            <h2 className="text-xl mt-5 font-semibold">
              Or sign up with your email
            </h2>
            <div className="mt-5 w-full container px-10 ">
              <div className="mb-4">
                <input
                  type="text"
                  id="firstName"
                  placeholder="First & Last Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="input-primary border-b p-2 w-full focus:border-b focus:outline-none"
                />
              </div>

              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className=" input-primary border-b  p-2 w-full focus:border-b focus:outline-none"
                />
              </div>

              <div className="mb-4">
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`input-primary border-b p-2 w-full focus:border-b focus:outline-none ${
                    !isPasswordStrong ? "border-red-500" : ""
                  }`}
                />
              </div>

              <div className="mb-4 relative">
                <input
                  type="text"
                  id="eventCity"
                  placeholder="Event City"
                  value={eventCity}
                  onChange={(e) => setEventCity(e.target.value)}
                  className="input-primary border-b p-2 w-full focus:border-b focus:outline-none"
                  list="citiesList"
                  autoComplete="on"
                />
                <datalist
                  id="citiesList"
                  className="absolute bg-white text-black"
                >
                  {cities.map((city) => (
            <option key={city.city_id} value={city.city_name} />
          ))}
                </datalist>
              </div>

              <div className="mb-4 flex">
                <label
                  htmlFor="eventDate"
                  className="text-md text-gray-400 p-2"
                >
                  Event Date
                </label>
                <div>
                  <input
                    type="date"
                    id="eventDate"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="input-primary border-b p-2 w-full focus:border-b  focus:outline-none "
                  />
                </div>
              </div>

              <div className="mb-6">
                <h6 className="text-sm  text-gray-500 mb-1">
                  By clicking 'Button', I agree to Company Name’s{" "}
                  <span className="font-semibold">Privacy Policy</span> and{" "}
                  <span className="font-semibold">Terms of Use</span>
                </h6>
              </div>

              <button
                type="submit"
                onClick={handleSignUp}
                className="bg-white text-black  font-semibold border border-black p-2 rounded-md  hover:bg-primary  hover:border-primary hover:text-white w-full"
              >
                Sign Up
              </button>

              <div className="flex justify-center text-md my-6">
                <p className=" text-black mr-2 font-[Poppins]">
                  Already have an account?
                </p>
                <button
                  className=" text-primary  font-[Poppins] font-semibold  "
                  onClick={handleClick}
                >
                  Log in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
