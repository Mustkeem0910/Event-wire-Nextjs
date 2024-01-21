"use client"
import React from "react";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaCheck } from "react-icons/fa6";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegFilePdf } from "react-icons/fa6";
import { MdOutlineLocationOn } from "react-icons/md";

const Nav = () => {
  const openPdf = () => {
    // Replace 'your-pdf-url.pdf' with the actual URL of your PDF file
    const pdfUrl = 'https://www.africau.edu/images/default/sample.pdf';

    // Open the PDF in a new tab
    window.open(pdfUrl, '_blank');
  };



  return (
    <>
      {/* =================About================== */}
      <section id="about" className="font-[Poppins] px-3">
        <div className="ml-5 mt-5">
          <h1 className="font-semibold text-lg">About</h1>
          <p className="font-[sans] text-black text-md sm:text-lg my-1 leading-normal">
            EventPro is the next step of dj Alkis Nikou, an «Awarded Boutique
            Wedding Events Dj Company» that was created to make the difference.
          </p>
          <p className="font-[sans] text-black text-md sm:text-lg  leading-normal">
            Although 20 years of experience in big Clubs and all kind of Events,
            all over Greece, may seem more than enough, I continue to develop,
            with fresh ideas, following the trends of music.
          </p>
          <p className="font-[sans] text-black text-md sm:text-lg leading-normal">
            We are changing things as you knew them and organize contemporary
            events (weddings, christenings, parties, live) that have nothing to
            do with the old ones.
          </p>
          <p className="font-[sans] text-black text-md sm:text-lg  leading-normal">
            We combine our experience, our talent, our passion for music, our
            knowledge, direct customer approach, premium setting of the event.
          </p>
          <p className="font-[sans] text-black text-md sm:text-lg   leading-normal">
            Our goal is to create unforgettable memories, make your wedding a
            memorable wonderful party.
          </p>

          <div className="flex flex-wrap gap-2 mt-5">
            <div className="inline-block px-2 py-1  border border-gray-300 text-sm rounded-md cursor-pointer transition duration-300 ">
              Black-owned
            </div>
            <div className="inline-block px-2 py-1  border border-gray-300 text-sm rounded-md cursor-pointer transition duration-300">
              Asian-owned
            </div>
            <div className="inline-block px-2 py-1 border border-gray-300 text-sm rounded-md cursor-pointer transition duration-300">
              Hispanic or Latinx-owned
            </div>
            <div className="inline-block px-2 py-1  border border-gray-300 text-sm rounded-md cursor-pointer transition duration-300">
              LGBTQ+-owned
            </div>
            <div className="inline-block px-2 py-1  border border-gray-300 text-sm rounded-md cursor-pointer transition duration-300">
              Native American-owned
            </div>
            <div className="inline-block px-2 py-1  border border-gray-300 text-sm rounded-md cursor-pointer transition duration-300">
              Pacific Islander-owned
            </div>
            <div className="inline-block px-2 py-1  border border-gray-300 text-sm rounded-md cursor-pointer transition duration-300">
              Veteran-owned
            </div>
            <div className="inline-block px-2 py-1  border border-gray-300 text-sm rounded-md cursor-pointer transition duration-300">
              Woman-owned
            </div>
          </div>

          <div className="mt-5 flex gap-5 justify-start">
            <h1>Follow eventpro dj on</h1>
            <div className="flex gap-4">
              <a>
                <FaFacebook size={18} className="hover:text-primary" />
              </a>
              <a>
                <BsTwitterX size={18} className="hover:text-primary" />
              </a>
              <a>
                <FaInstagram size={18} className="hover:text-primary" />
              </a>
              <a>
                <FaPinterest size={18} className="hover:text-primary" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <div class="border-t mt-5 mx-3 border-gray-300 px-3"></div>
      {/* =================FAQs=================== */}
      <section className="font-[Poppins] " id="faq">
        <div className="ml-5 mt-5">
          <h1 className="font-semibold text-lg">Frequently Asked Questions</h1>

          <div className="mt-3">
            <h1 className="font-semibold text-md mt-2">
              What is the starting price for wedding DJ services?
            </h1>
            <p className=" font-semibold text-md mt-2">$400</p>
          </div>
          <div class="border-t mt-5  mx-3  border-gray-300"></div>

          <div className="mt-3">
            <h1 className="font-semibold text-md mt-2">
              What is included in the price of your most popular wedding
              package?
            </h1>
            <div className="flex justify-evenly flex-col sm:flex-row mt-2  ">
              <div className="flex   ">
                <FaCheck className="text-green-700 items-center mt-1 mr-3" />
                <span className="">Consultation</span>
              </div>

              <div className="flex   ">
                <FaCheck className="text-green-700 items-center mt-1 mr-3" />
                <span className="">Consultation</span>
              </div>

              <div className="flex   ">
                <FaCheck className="text-green-700 items-center mt-1 mr-3" />
                <span className="">Consultation</span>
              </div>
            </div>
          </div>
          <div class="border-t mt-5 mx-3 border-gray-300"></div>
          <div className="mt-3">
            <h1 className="font-semibold text-md mt-2">
              What is the price of your most popular wedding package?
            </h1>
            <p className=" font-semibold text-md mt-2">$800</p>
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <div className=" px-2 py-3   border border-3 border-black text-sm rounded-md cursor-pointer transition duration-300  transition duration-300">
            View more FAQs
          </div>
        </div>
      </section>

      <div class="border-t mt-5 mx-3 border-gray-300 px-3"></div>

      {/* =================Reviews================= */}
      <section className="font-[Poppins] px-3  " id="reviews" >
        <div className="ml-5 mt-10">
          <div className="flex justify-between">
            <h1 className="font-semibold text-lg">Reviews</h1>

            <div className=" px-2 py-3   border border-3 border-black text-sm rounded-md cursor-pointer transition duration-300  transition duration-300">
              Write a Review
            </div>
          </div>

          <div className="flex justify-between">
            <h1 className="font-semibold text-4xl">
              5.0 <span className="font-semibold text-2xl">Fantastic</span>{" "}
            </h1>
          </div>

          <div className="flex items-center mb-4">
            <div className="rating rating-sm">
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>

            <span className="ml-2  ">80 Reviews</span>
          </div>

          <div className="flex gap-5  ">
            <div className="bg-green-200 px-3 flex text-black text-sm rounded-sm">
              <FaRegThumbsUp className="mt-1 mr-2" />
              100%
            </div>
            <div className="text-black text-sm">Recommended by couples</div>

            <h1 className="text-md text-black"></h1>
          </div>

          <div className="w-full mt-3 flex p-1 md:p-5 flex-col md:flex-row text-black font-semibold text-sm ">
            <div className="w-full md:w-1/2 mx-0 md:mx-5 ">
              <div className="flex justify-between mb-2">
                <h1>Quality of service</h1>
                <div>
                  {" "}
                  <progress
                    className="progress progress-black w-24 mr-2"
                    value="100"
                    max="100"
                  ></progress>
                  <span className="m">5.0 </span>
                </div>
              </div>

              <div className="flex justify-between mb-2">
                <h1>Professionalism</h1>
                <div>
                  {" "}
                  <progress
                    className="progress progress-black w-24 mr-2"
                    value="100"
                    max="100"
                  ></progress>
                  <span className="m">5.0 </span>
                </div>
              </div>

              <div className="flex justify-between mb-2">
                <h1>Flexibility</h1>
                <div>
                  {" "}
                  <progress
                    className="progress progress-black w-24 mr-2"
                    value="100"
                    max="100"
                  ></progress>
                  <span className="m">5.0 </span>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2  ">
              <div className="flex justify-between mb-2">
                <h1>Average response time</h1>
                <div>
                  {" "}
                  <progress
                    className="progress progress-black w-24 mr-2"
                    value="100"
                    max="100"
                  ></progress>
                  <span className="m">5.0 </span>
                </div>
              </div>

              <div className="flex justify-between mb-2">
                <h1>Value</h1>
                <div>
                  {" "}
                  <progress
                    className="progress progress-black w-24 mr-2"
                    value="100"
                    max="100"
                  ></progress>
                  <span className="m">5.0 </span>
                </div>
              </div>
            </div>
          </div>


        </div>
        <div class="border-t mt-5  border-gray-300"></div>

        <div className="my-5 ml-5">
          <h1 className="font-semibold mb-2  text-lg tracking-widest">USER PHOTOS </h1>
          <div className="w-full flex h-[250px] gap-5">
            <div className="w-1/2  ">
              <img src="https://cdn0.weddingwire.com/vendor/947927/original/1920/jpg/ar0a2630_51_729749-165824628775247.webp" alt="Image 3" className="h-full w-full object-cover object-center rounded-l-xl transition-transform transform hover:scale-105 " />
            </div>
            {/* Right part */}
            <div className="w-1/2  ">
              <img src="https://cdn0.weddingwire.com/vendor/947927/3_2/640/jpg/aleksia-brady-368_51_729749-169997019378918.webp" alt="Image 4" className="h-full w-full object-cover object-center rounded-r-xl transition-transform transform hover:scale-105" />
            </div>
          </div>

        </div>

        <div class="border-t mt-5  border-gray-300"></div>

        <h1 className="font-semibold mt-5 text-lg"> 80 Reviews</h1>
        <div className="text-black mt-5 flex flex-col gap-5 mt-5 lg:flex-row">

          <div className="flex mb-4 border rounded-md border-gray-300 bg-mygrey p-4 w-full lg:w-1/2 xl:w-1/3 transition-transform transform hover:scale-105">
            {/* Content Section */}
            <div className="ml-4 flex-grow">
              <div className="flex justify-start items-center mb-2">
                <div className="avatar placeholder mr-2">
                  <div className="bg-neutral text-neutral-content rounded-full w-10">
                    <span className="text-xl">W</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <h3 className="text-lg font-semibold text-black">Wendy</h3>
                  <span className="text-sm text-grey-500 ml-2">
                    12/02/2023
                  </span>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>

                <span className="ml-2  ">80 Reviews</span>
              </div>

              <h2 className="text-lg font-semibold text-black hover:text-primary mb-2 clamp-3">
                All went perfect
              </h2>
              <p className="text-md text-black clamp-3 font-[sans] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          <div className="flex mb-4 border rounded-md border-gray-300 bg-mygrey p-4 w-full lg:w-1/2 xl:w-1/3 transition-transform transform hover:scale-105">
            {/* Content Section */}
            <div className="ml-4 flex-grow">
              <div className="flex justify-start items-center mb-2">
                <div className="avatar placeholder mr-2">
                  <div className="bg-neutral text-neutral-content rounded-full w-10">
                    <span className="text-xl">W</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <h3 className="text-lg font-semibold text-black">Wendy</h3>
                  <span className="text-sm text-grey-500 ml-2">
                    12/02/2023
                  </span>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>

                <span className="ml-2  ">80 Reviews</span>
              </div>

              <h2 className="text-lg font-semibold text-black hover:text-primary mb-2 clamp-3">
                All went perfect
              </h2>
              <p className="text-md text-black clamp-3 font-[sans] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          <div className="flex mb-4 border rounded-md border-gray-300 bg-mygrey p-4 w-full lg:w-1/2 xl:w-1/3 transition-transform transform hover:scale-105">
            {/* Content Section */}
            <div className="ml-4 flex-grow">
              <div className="flex justify-start items-center mb-2">
                <div className="avatar placeholder mr-2">
                  <div className="bg-neutral text-neutral-content rounded-full w-10">
                    <span className="text-xl">W</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <h3 className="text-lg font-semibold text-black">Wendy</h3>
                  <span className="text-sm text-grey-500 ml-2">
                    12/02/2023
                  </span>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>

                <span className="ml-2  ">80 Reviews</span>
              </div>

              <h2 className="text-lg font-semibold text-black hover:text-primary mb-2 clamp-3">
                All went perfect
              </h2>
              <p className="text-md text-black clamp-3 font-[sans] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

        </div>

        <div className="flex  justify-center my-4">
          <div className=" px-2 py-3  flex  border border-3 border-black text-sm rounded-md cursor-pointer transition duration-300  transition duration-300">
            See All Reviews  <FaArrowRightLong className="ml-2 text-xl" />
          </div>
        </div>



        <div class="border-t mt-5  border-gray-300"></div>


        <div className="bg-white shadow-xl p-6 mt-7  ring-1 ring-gray-300 rounded-md">
          <div className="flex justify-start gap-5">
            <div className="flex  ">
              <img src="https://cdn1.weddingwire.com/assets/svg/original/illustration/stars.svg" alt="Star" className=" w-[48px] h-[48px] object-cover bg-blue-100 object-center mask mask-circle rounded-br-lg" />
            </div>
            <div className="flex flex-col jsutify-evenly">
              <div className=" cursor-pointer">Are you interested?</div>
              <h1 className="text-md text-primary font-semibold cursor-pointer ">Message Vendor</h1>
            </div>
          </div>
        </div>

        {/* ==========Pricing============== */}
        <section className="mt-5 px-3" id="pricing">
          <h1 className="font-semibold text-lg">Do you want more pricing details?</h1>
          <div className="bg-white flex justify-between shadow-xl p-6 mt-7 mb-4 ring-1 ring-gray-300 rounded-md">
            <div className="flex justify-start gap-5">
              < FaRegFilePdf className="text-3xl " />
              <h1 className="text-lg text-back">Event Dj</h1>
            </div>
            <div className="text-lg text-primary font-semibold cursor-pointer" onClick={openPdf}>Open pdf</div>
          </div>
        </section>

      </section>
      {/* ===============  Map=====================*/}
      <section className="font-[Poppins] px-3" id="map">
        <h1 className="font-semibold text-lg">Map</h1>
        <div style={{ width: '100%', height: '500px' }} className="mt-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50310.60536916924!2d23.697139687557616!3d37.99083001421569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd1f067043f1%3A0x2736354576668ddd!2sAthens%2C%20Greece!5e0!3m2!1sen!2sin!4v1704625688835!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="bg-white flex  shadow-xl p-5 mt-7 mb-4 ring-1 ring-gray-300 rounded-xl">
          <div className="flex justify-start gap-5">
            <  MdOutlineLocationOn className="text-3xl " />
            <h1 className="text-lg text-back">25 West 40th Street New York, NY, 10018</h1>
          </div>

        </div>

      </section>

    </>
  );
};

export default Nav;
