"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { TbCheckupList } from "react-icons/tb";
import { MdPeopleOutline } from "react-icons/md";
import { LuArmchair } from "react-icons/lu";
import { SlCalculator } from "react-icons/sl";
import { LiaBookSolid } from "react-icons/lia";
import { CgProfile } from "react-icons/cg";
import { RiCamera3Line } from "react-icons/ri";
import { FiHeadphones } from "react-icons/fi";
import { PiFlowerTulipLight } from "react-icons/pi";
import { BsCameraReels } from "react-icons/bs";
import { BiDish } from "react-icons/bi";
import { GiLipstick } from "react-icons/gi";
import { LiaUserTieSolid } from "react-icons/lia";
import { getVenueTypes } from "../api/api";
import Link from 'next/link';

const Navbar = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [hoveredOption, setHoveredOption] = useState(null);
  const [selectedOptionContent, setSelectedOptionContent] = useState(null);
  const [venueTypes, setVenueTypes] = useState([]);
  const [groupedVenueTypes1, setGroupedVenueTypes1] = useState([]);
  const [groupedVenueTypes2, setGroupedVenueTypes2] = useState([]);
  const [groupedVenueTypes3, setGroupedVenueTypes3] = useState([]);
  const [groupedVenueTypes4, setGroupedVenueTypes4] = useState([]);

  const router = useRouter();
  const navbarRef = useRef(null);

  // For list
  const ListWithIcon = ({ icon, text, size, color }) => (
    <div className="flex items-center cursor-pointer mb-4">
      {React.cloneElement(icon, { size, color })}
      <span className="ml-2 text-black hover:text-primary">{text}</span>
    </div>
  );

  const List = ({ text }) => (
    <div className="flex items-center cursor-pointer">
      <span className=" text-black hover:text-primary">{text}</span>
    </div>
  );

  useEffect(() => {
    const fetchVenueTypes = async () => {
      try {
        // Fetch venue types from the API using the imported function
        const data = await getVenueTypes();
        setVenueTypes(data);

        // Group venue types into sets of 4 when venueTypes state changes
        const groupedTypes1 = groupVenueTypesIntoSetsOfFour(data.slice(0, 4));
        const groupedTypes2 = groupVenueTypesIntoSetsOfFour(data.slice(4, 8));
        const groupedTypes3 = groupVenueTypesIntoSetsOfFour(data.slice(8, 12));
        const groupedTypes4 = groupVenueTypesIntoSetsOfFour(data.slice(12, 16));

        setGroupedVenueTypes1(groupedTypes1);
        setGroupedVenueTypes2(groupedTypes2);
        setGroupedVenueTypes3(groupedTypes3);
        setGroupedVenueTypes4(groupedTypes4);
      } catch (error) {
        console.error("Error fetching venue types:", error);
      }
    };

    fetchVenueTypes();
  }, []);

  const groupVenueTypesIntoSetsOfFour = (venueTypes) => {
    const groupedVenueTypes = [];
    for (let i = 0; i < venueTypes.length; i += 4) {
      groupedVenueTypes.push(venueTypes.slice(i, i + 4));
    }
    return groupedVenueTypes;
  };

  const handleClick = () => {
    router.push("/user/login");
  };

  const handleClick2 = () => {
    router.push("/user/signup");
  };

  const handleOptionHover = (option) => {
    setHoveredOption(option.toLowerCase());
    setShowDrawer(true);
  };

  const handleOptionLeave = (e) => {
    const toElement = e.relatedTarget || e.toElement;

    // Check if the mouse is leaving the option but not entering the flyout
    if (
      hoveredOption &&
      toElement &&
      !hasClass(toElement, "flyout") &&
      !hasClass(toElement, "option") &&
      !isDescendant(toElement, navbarRef.current)
    ) {
      handleDrawerClose();
    }
  };

  const handleDrawerLeave = (e) => {
    const toElement = e.relatedTarget || e.toElement;

    // Check if the mouse is leaving the flyout but not entering an option or the drawer
    if (
      toElement &&
      !hasClass(toElement, "flyout") &&
      !hasClass(toElement, "option") &&
      !isDescendant(toElement, navbarRef.current) &&
      !isDescendant(toElement, document.querySelector(".drawer-content"))
    ) {
      handleDrawerClose();
    }
  };

  // Helper function to check if an element has a specific class
  const hasClass = (element, className) => {
    return (
      element &&
      element.className &&
      element.className.split(" ").includes(className)
    );
  };

  // Helper function to check if an element is a descendant of another element
  const isDescendant = (child, parent) => {
    let node = child?.parentNode;

    while (node !== null) {
      if (node === parent) {
        return true;
      }
      node = node?.parentNode;
    }

    return false;
  };

  const handleDrawerClose = () => {
    setHoveredOption(null);
    setShowDrawer(false);
    setSelectedOptionContent(null);
  };

  return (
    <>
      <nav
        ref={navbarRef}
        className=" hidden xl:block bg-grey-100 p-2 mx-4 sm:mx-20 font-[Poppins]"
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex justify-evenly gap-5 xl:gap-5  2xl:gap-10">
            <div className="text-white">
              <h1 className="text-black text-3xl sm:text-lg md:text-xl lg:text-3xl font-semibold opacity-80">
                COMPANY NAME
              </h1>
            </div>

            <div className="hidden md:flex gap-10 text-black leading-8 self-center my-auto max-md:max-w-full">
              {/* Option 1 */}
              <div
                className="relative group"
                onMouseEnter={() => handleOptionHover("PLANNING TOOLS")}
                onMouseLeave={handleOptionLeave}
              >
                <a
                  href="#"
                  className="text-black cursor-pointer transition duration-100 ease-in-out hover:underline hover:decoration-primary hover:decoration-4 hover:underline-offset-8 "
                  // onClick={() => handleOptionClick(option)}
                >
                  PLANNING TOOLS
                </a>
                {hoveredOption === "planning tools" && (
                  <div
                    className="fixed inset-0 z-50 drawer-content shadow-xl"
                    style={{
                      marginTop: "89px",
                      background: "white",
                      padding: "1rem",
                      // boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                      height: "45vh",
                    }}
                    onMouseLeave={handleDrawerLeave}
                  >
                    {selectedOptionContent ? (
                      <p>{selectedOptionContent}</p>
                    ) : (
                      <div className="py-5 px-20 flex ">
                        <div className="w-2/5">
                          <h1 className="text-black font-semibold mb-5 ">
                            Organize with ease
                          </h1>
                          <div className="w-full flex ">
                            <div className="w-1/2 space-y-5">
                            <Link href="/tools/checklist">
                             <ListWithIcon
                                icon={<TbCheckupList />}
                                text="Checklist"
                                size={24}
                              />
                             </Link>
                             <Link href="/tools/seating">
                              <ListWithIcon
                                icon={<LuArmchair />}
                                text="Seating Chart"
                                size={24}
                              />
                                </Link>
                                <Link href="/tools/vendors">
                              <ListWithIcon
                                icon={<LiaBookSolid />}
                                text="Vendors"
                                size={24}
                              />
                                </Link>
                              
                            </div>

                            <div className="w-1/2 space-y-5">
                            <Link href="/tools/guests">
                              <ListWithIcon
                                icon={<MdPeopleOutline />}
                                text="Guests"
                                size={24}
                              />
                                </Link>
                                <Link href="/tools/budget">
                              <ListWithIcon
                                icon={<SlCalculator />}
                                text="Budget"
                                size={24}
                              />
                                </Link>

                              {/* <ListWithIcon icon={<TbWorldWww />} text=" Website" size={24}  /> */}
                            </div>
                          </div>
                        </div>
                        <div className="divider divider-horizontal"></div>

                        {/* <div className="w-2/5">
                          <h1 className="text-black font-semibold mb-5 ">
                            Personalize your event
                          </h1>

                          <div className="w-full flex ">
                            <div className="w-1/2 space-y-1">
                              <List text="Hotel Blocks" />
                              <List text="Date Finder" />
                              <List text="Hashtag Generator" />
                            </div>

                            <div className="w-1/2 space-y-1">
                              <List text="Date Finder" />
                              <List text="Cost Guide" />
                            </div>
                          </div>
                        </div> */}
                        <div className="w-2/5"></div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Option 2 */}
              <div
                className="relative group"
                onMouseEnter={() => handleOptionHover("VENUES")}
                onMouseLeave={handleOptionLeave}
              >
                <a
                  href="#"
                  className="text-black cursor-pointer transition duration-100 ease-in-out hover:underline hover:decoration-primary hover:decoration-4 hover:underline-offset-8 "
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default anchor tag behavior
                    // handleOptionClick("VENUES"); // Optionally handle other logic before navigation
                    router.push("/shared"); // Navigate to the desired route
                  }}
                >
                  VENUES
                </a>
                {hoveredOption === "venues" && (
                  <div
                    className="fixed inset-0 z-50 drawer-content shadow-xl"
                    style={{
                      marginTop: "89px",
                      background: "white",
                      padding: "1rem",
                      // boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                      height: "45vh",
                    }}
                    onMouseLeave={handleDrawerLeave}
                  >
                    {selectedOptionContent ? (
                      <p>{selectedOptionContent}</p>
                    ) : (
                      <div className="py-5 px-20 flex ">
                        <div className="w-full">
                          <h1 className="text-black font-semibold mb-5 ">
                            Find your venue
                          </h1>
                          <div className="w-full flex ">
                            {groupedVenueTypes1.map(
                              (venueTypeSet, setIndex) => (
                                <div key={setIndex} className="w-1/4 space-y-4">
                                  {venueTypeSet.map((venueType) => (
                                    <div
                                      key={venueType.id}
                                      onClick={() => {
                                        console.log("Clicked!");
                                        router.push(
                                          `/shared?venue_id=${venueType.id}`
                                        );
                                      }}
                                    >
                                      <h2 className="text-black font-semibold mb-3">
                                        {venueType.name}
                                      </h2>

                                      <List
                                        key={venueType.id}
                                        text={venueType.type}
                                      />
                                    </div>
                                  ))}
                                </div>
                              )
                            )}

                            {groupedVenueTypes2.map(
                              (venueTypeSet, setIndex) => (
                                <div key={setIndex} className="w-1/4 space-y-4">
                                  {venueTypeSet.map((venueType) => (
                                    <div
                                      key={venueType.id}
                                      onClick={() => {
                                        console.log("Clicked!");
                                        router.push(
                                          `/shared?venue_id=${venueType.id}`
                                        );
                                      }}
                                    >
                                      <h2 className="text-black font-semibold mb-3">
                                        {venueType.name}
                                      </h2>

                                      <List
                                        key={venueType.id}
                                        text={venueType.type}
                                        onClick={() => {
                                          // Assuming you have access to the router object
                                          router.push(
                                            `/shared?venue_id=${venueType.id}`
                                          );
                                        }}
                                      />
                                    </div>
                                  ))}
                                </div>
                              )
                            )}

                            {groupedVenueTypes3.map(
                              (venueTypeSet, setIndex) => (
                                <div key={setIndex} className="w-1/4 space-y-4">
                                  {venueTypeSet.map((venueType) => (
                                    <div
                                      key={venueType.id}
                                      onClick={() => {
                                        console.log("Clicked!");
                                        router.push(
                                          `/shared?venue_id=${venueType.id}`
                                        );
                                      }}
                                    >
                                      <h2 className="text-black font-semibold mb-3">
                                        {venueType.name}
                                      </h2>

                                      <List
                                        key={venueType.id}
                                        text={venueType.type}
                                        onClick={() => {
                                          // Assuming you have access to the router object
                                          router.push(
                                            `/shared?venue_id=${venueType.id}`
                                          );
                                        }}
                                      />
                                    </div>
                                  ))}
                                </div>
                              )
                            )}

                            {groupedVenueTypes4.map(
                              (venueTypeSet, setIndex) => (
                                <div key={setIndex} className="w-1/4 space-y-4">
                                  {venueTypeSet.map((venueType) => (
                                    <div
                                      key={venueType.id}
                                      onClick={() => {
                                        console.log("Clicked!");
                                        router.push(
                                          `/shared?venue_id=${venueType.id}`
                                        );
                                      }}
                                    >
                                      <h2 className="text-black font-semibold mb-3">
                                        {venueType.name}
                                      </h2>

                                      <List
                                        key={venueType.id}
                                        text={venueType.type}
                                        onClick={() => {
                                          // Assuming you have access to the router object
                                          router.push(
                                            `/shared?venue_id=${venueType.id}`
                                          );
                                        }}
                                      />
                                    </div>
                                  ))}
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Option 3 */}
              <div
                className="relative group"
                onMouseEnter={() => handleOptionHover("VENDORS")}
                onMouseLeave={handleOptionLeave}
              >
                <a
                  href="#"
                  className="text-black cursor-pointer transition duration-100 ease-in-out hover:underline hover:decoration-primary hover:decoration-4 hover:underline-offset-8 "
                  onClick={(e) => {
                    e.preventDefault(); 
                    router.push("/shared/vendor"); 
                  }}
                >
                  VENDORS
                </a>
                {hoveredOption === "vendors" && (
                  <div
                    className="fixed inset-0 z-50 drawer-content shadow-xl"
                    style={{
                      marginTop: "89px",
                      background: "white",
                      padding: "1rem",
                      // boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                      height: "45vh",
                    }}
                    onMouseLeave={handleDrawerLeave}
                  >
                    {selectedOptionContent ? (
                      <p>{selectedOptionContent}</p>
                    ) : (
                      <div className="py-5 px-20 flex ">
                        <div className="w-full">
                          <h1 className="text-black font-semibold mb-5 ">
                            Start hiring your vendors
                          </h1>
                          <div className="w-full flex ">
                            <div className="w-1/4 space-y-5">
                              <div
                                onClick={() => {
                                  console.log("Clicked!");
                                  router.push(`/shared/vendor?vendor_id=1`);
                                }}
                              >
                                <ListWithIcon
                                  icon={<RiCamera3Line />}
                                  text="Photography"
                                  size={24}
                                />
                              </div>
                              <div
                                onClick={() => {
                                  console.log("Clicked!");
                                  router.push(`/shared/vendor?vendor_id=5`);
                                }}
                              >
                                <ListWithIcon
                                  icon={<LiaBookSolid />}
                                  text="Event Planning"
                                  size={24}
                                />
                              </div>
                              <div
                                onClick={() => {
                                  console.log("Clicked!");
                                  router.push(`/shared/vendor?vendor_id=4`);
                                }}
                              >
                                <ListWithIcon
                                  icon={<PiFlowerTulipLight />}
                                  text="Flowers"
                                  size={24}
                                />
                              </div>
                            </div>

                            <div className="w-1/4 space-y-5">
                              <div
                                onClick={() => {
                                  console.log("Clicked!");
                                  router.push(`/shared/vendor?vendor_id=6`);
                                }}
                              >
                                <ListWithIcon
                                  icon={<FiHeadphones />}
                                  text="DJs"
                                  size={24}
                                />
                              </div>
                              <div
                                onClick={() => {
                                  console.log("Clicked!");
                                  router.push(`/shared/vendor?vendor_id=3`);
                                }}
                              >
                                <ListWithIcon
                                  icon={<GiLipstick />}
                                  text="Hair & Makeup"
                                  size={24}
                                />
                              </div>
                              <div
                                onClick={() => {
                                  console.log("Clicked!");
                                  router.push(`/shared/vendor?vendor_id=7`);
                                }}
                              >
                                <ListWithIcon
                                  icon={<BiDish />}
                                  text="Catering"
                                  size={24}
                                />
                              </div>
                            </div>

                            <div className="w-1/4 space-y-5">
                              <div
                                onClick={() => {
                                  console.log("Clicked!");
                                  router.push(`/shared/vendor?vendor_id=2`);
                                }}
                              >
                                <ListWithIcon
                                  icon={<BsCameraReels />}
                                  text="Videography"
                                  size={24}
                                />
                              </div>
                              <div
                                onClick={() => {
                                  console.log("Clicked!");
                                  router.push(`/shared/vendor?vendor_id=8`);
                                }}
                              >
                                <ListWithIcon
                                  icon={<LiaUserTieSolid />}
                                  text="Cakes"
                                  size={24}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Option 4 */}
              <div
                className="relative group"
                onMouseEnter={() => handleOptionHover("FORUMS")}
                onMouseLeave={handleOptionLeave}
              >
                <a
                  href="#"
                  className="text-black cursor-pointer transition duration-100 ease-in-out hover:underline hover:decoration-primary hover:decoration-4 hover:underline-offset-8 "
                  // onClick={() => handleOptionClick(option)}
                >
                  FORUMS
                </a>
                {hoveredOption === "forums" && (
                  <div
                    className="fixed inset-0 z-50 drawer-content shadow-xl"
                    style={{
                      marginTop: "89px",
                      background: "white",
                      padding: "1rem",
                      // boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                      height: "45vh",
                    }}
                    onMouseLeave={handleDrawerLeave}
                  >
                    {selectedOptionContent ? (
                      <p>{selectedOptionContent}</p>
                    ) : (
                      <div className="py-5 px-20 flex ">
                        <div className="w-full">
                          <h1 className="text-black font-semibold mb-5 ">
                            Forums
                          </h1>
                          <div className="flex justify-center p-10 text-4xl text-black">
                            Coming Soon
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Option 5 */}
              <div
                className="relative group"
                onMouseEnter={() => handleOptionHover("DRESSES")}
                onMouseLeave={handleOptionLeave}
              >
                <a
                  href="#"
                  className="text-black cursor-pointer transition duration-100 ease-in-out hover:underline hover:decoration-primary hover:decoration-4 hover:underline-offset-8 "
                  // onClick={() => handleOptionClick(option)}
                >
                  DRESSES
                </a>
                {hoveredOption === "dresses" && (
                  <div
                    className="fixed inset-0 z-50 drawer-content shadow-xl"
                    style={{
                      marginTop: "89px",
                      background: "white",
                      padding: "1rem",
                      // boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                      height: "45vh",
                    }}
                    onMouseLeave={handleDrawerLeave}
                  >
                    {selectedOptionContent ? (
                      <p>{selectedOptionContent}</p>
                    ) : (
                      <div className="py-5 px-20 flex ">
                        <div className="w-full">
                          <h1 className="text-black font-semibold mb-5 ">
                            The latest in bridal fashion
                          </h1>
                          <div className="flex justify-center p-10 text-4xl text-black">
                            Coming Soon
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Option 6 */}
              <div
                className="relative group"
                onMouseEnter={() => handleOptionHover("IDEAS")}
                onMouseLeave={handleOptionLeave}
              >
                <a
                  href="#"
                  className="text-black cursor-pointer transition duration-100 ease-in-out hover:underline hover:decoration-primary hover:decoration-4 hover:underline-offset-8 "
                  // onClick={() => handleOptionClick(option)}
                >
                  IDEAS
                </a>
                {hoveredOption === "ideas" && (
                  <div
                    className="fixed inset-0 z-50 drawer-content shadow-xl"
                    style={{
                      marginTop: "89px",
                      background: "white",
                      padding: "1rem",
                      // boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                      height: "45vh",
                    }}
                    onMouseLeave={handleDrawerLeave}
                  >
                    {selectedOptionContent ? (
                      <p>{selectedOptionContent}</p>
                    ) : (
                      <div className="py-5 px-20 flex ">
                        <div className="w-full">
                          <h1 className="text-black font-semibold mb-5 ">
                            Get wedding inspiration
                          </h1>
                          <div className="flex justify-center p-10 text-4xl text-black">
                            Coming Soon
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Option 7 */}
              <div
                className="relative group "
                onMouseEnter={() => handleOptionHover("INVITATIONS")}
                onMouseLeave={handleOptionLeave}
              >
                <a
                  href="#"
                  className="text-black cursor-pointer transition duration-100 ease-in-out hover:underline hover:decoration-primary hover:decoration-4 hover:underline-offset-8 "
                  // onClick={() => handleOptionClick(option)}
                >
                  INVITATIONS
                </a>
                {hoveredOption === "invitations" && (
                  <div
                    className="fixed inset-0 z-50 drawer-content shadow-xl"
                    style={{
                      marginTop: "89px",
                      background: "white",
                      padding: "1rem",
                      // boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                      height: "45vh",
                    }}
                    onMouseLeave={handleDrawerLeave}
                  >
                    {selectedOptionContent ? (
                      <p>{selectedOptionContent}</p>
                    ) : (
                      <div className="py-5 px-20 flex ">
                        <div className="w-full">
                          <h1 className="text-black font-semibold mb-5 ">
                            Shop by category
                          </h1>
                          <div className="flex justify-center p-10 text-4xl text-black">
                            Coming Soon
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="hidden xl:hidden 2xl:block md:flex items-center">
            <button
              className="text-primary font-semibold mr-5 cursor-pointer"
              onClick={handleClick}
            >
              LOGIN
            </button>
            <button
              className="text-primary font-semibold mr-5 cursor-pointer"
              onClick={handleClick2}
            >
              JOIN NOW
            </button>
          </div>

          <div className="2xl:hidden">
            <CgProfile
              className="text-black text-2xl mt-1 opacity-70 cursor-pointer"
              onClick={handleClick}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
