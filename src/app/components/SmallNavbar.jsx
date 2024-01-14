"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { getVenueTypes, getVendorTypes } from "../api/api";

const SmallNavbar = () => {
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isPlanningToolsDrawerOpen, setIsPlanningToolsDrawerOpen] =
    useState(false);
  const [isVenuesToolsDrawerOpen, setIsVenuesToolsDrawerOpen] = useState(false);
  const [isVendorsToolsDrawerOpen, setIsVendorsToolsDrawerOpen] =
    useState(false);
  const [isForumsToolsDrawerOpen, setIsForumsToolsDrawerOpen] = useState(false);
  const [isDressesToolsDrawerOpen, setIsDressesToolsDrawerOpen] =
    useState(false);
  const [isIdeasToolsDrawerOpen, setIsIdeasToolsDrawerOpen] = useState(false);
  const [isInvitationsToolsDrawerOpen, setIsInvitationsToolsDrawerOpen] =
    useState(false);
  const [venueTypes, setVenueTypes] = useState([]);
  const [vendorTypes, setVendorTypes] = useState([]);

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        // Fetch venue types from the API using the imported function
        const venuedata = await getVenueTypes();
        setVenueTypes(venuedata);
        const vendordata = await getVendorTypes();
        setVendorTypes(vendordata);
      } catch (error) {
        console.error("Error fetching venue or vendor types:", error);
      }
    };

    fetchTypes();
  }, []);
  const handleProfileClick = () => {
    router.push("/profile");
  };

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handlePlanningToolsDrawerToggle = () => {
    setIsPlanningToolsDrawerOpen(!isPlanningToolsDrawerOpen);
  };
  const handleVenuesToolsDrawerToggle = () => {
    setIsVenuesToolsDrawerOpen(!isVenuesToolsDrawerOpen);
  };
  const handleVendorsToolsDrawerToggle = () => {
    setIsVendorsToolsDrawerOpen(!isVendorsToolsDrawerOpen);
  };

  const handleForumsToolsDrawerToggle = () => {
    setIsForumsToolsDrawerOpen(!isForumsToolsDrawerOpen);
  };

  const handleDressesToolsDrawerToggle = () => {
    setIsDressesToolsDrawerOpen(!isDressesToolsDrawerOpen);
  };

  const handleIdeasToolsDrawerToggle = () => {
    setIsIdeasToolsDrawerOpen(!isIdeasToolsDrawerOpen);
  };

  const handleInvitationsToolsDrawerToggle = () => {
    setIsInvitationsToolsDrawerOpen(!isInvitationsToolsDrawerOpen);
  };

  const handleDrawerItemClicked = (path) => {
    router.push(path);
    setIsDrawerOpen(false);
    setIsPlanningToolsDrawerOpen(false);
  };

  const handleDrawerItem2Clicked = (path) => {
    router.push(path);
    setIsDrawerOpen(false);
    setIsVenuesToolsDrawerOpen(false);
  };

  const handleDrawerItem3Clicked = (path) => {
    router.push(path);
    setIsDrawerOpen(false);
    setIsVendorsToolsDrawerOpen(false);
  };

  const handleDrawerItem4Clicked = (path) => {
    router.push(path);
    setIsDrawerOpen(false);
    setIsForumsToolsDrawerOpen(false);
  };

  const handleDrawerItem5Clicked = (path) => {
    router.push(path);
    setIsDrawerOpen(false);
    setIsDressesToolsDrawerOpen(false);
  };

  const handleDrawerItem6Clicked = (path) => {
    router.push(path);
    setIsDrawerOpen(false);
    setIsIdeasToolsDrawerOpen(false);
  };

  const handleDrawerItem7Clicked = (path) => {
    router.push(path);
    setIsDrawerOpen(false);
    setIsInvitationsToolsDrawerOpen(false);
  };

  const closeDrawers = () => {
    setIsDrawerOpen(false);
    setIsPlanningToolsDrawerOpen(false);
  };

  const close2Drawers = () => {
    setIsDrawerOpen(false);
    setIsVenuesToolsDrawerOpen(false);
  };

  const close3Drawers = () => {
    setIsDrawerOpen(false);
    setIsVendorsToolsDrawerOpen(false);
  };

  const close4Drawers = () => {
    setIsDrawerOpen(false);
    setIsForumsToolsDrawerOpen(false);
  };

  const close5Drawers = () => {
    setIsDrawerOpen(false);
    setIsDressesToolsDrawerOpen(false);
  };

  const close6Drawers = () => {
    setIsDrawerOpen(false);
    setIsIdeasToolsDrawerOpen(false);
  };

  const close7Drawers = () => {
    setIsDrawerOpen(false);
    setIsInvitationsToolsDrawerOpen(false);
  };

  return (
    <div className="xl:hidden text-white flex p-3 justify-between relative">
      <div>
        <HiOutlineMenuAlt2
          className="text-black mt-1 text-2xl opacity-70 cursor-pointer"
          onClick={handleDrawerToggle}
        />
      </div>
      <h1
        className="text-primary text-2xl md:text-2xl font-semibold cursor-pointer"
        onClick={() => router.push("/")}
      >
        COMPANY NAME
      </h1>
      <div>
        <CgProfile
          className="text-black text-2xl mt-1 opacity-70 cursor-pointer"
          onClick={handleProfileClick}
        />
      </div>
      {/* ======================Main Drawer ==================*/}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={handleDrawerToggle}
        ></div>
      )}

      <div
        className={`fixed left-0 top-0 h-full w-64 bg-white transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform ease-in-out z-50`}
      >
        <div className="flex justify-end p-2 cursor-pointer">
          <span
            className="text-black text-4xl opacity-70"
            onClick={handleDrawerToggle}
          >
            &times;
          </span>
        </div>
        <div class="border-t  border-gray-300"></div>
        <ul className="p-4">
          <div className="flex mb-4 justify-between">
            <li
              className="cursor-pointer text-black hover:text-primary font-semibold "
              onClick={() => handlePlanningToolsDrawerToggle()}
            >
              PLANNING TOOLS
            </li>

            <div>
              <MdOutlineKeyboardArrowRight
                className="text-primary text-2xl"
                onClick={() => handlePlanningToolsDrawerToggle()}
              />
            </div>
          </div>

          <div className="flex mb-4 justify-between">
            <li
              className="cursor-pointer text-black hover:text-primary font-semibold "
              onClick={() => handleVenuesToolsDrawerToggle()}
            >
              VENUES
            </li>

            <div>
              <MdOutlineKeyboardArrowRight
                className="text-primary text-2xl"
                onClick={() => handleVenuesToolsDrawerToggle()}
              />
            </div>
          </div>

          <div className="flex mb-4 justify-between">
            <li
              className="cursor-pointer text-black hover:text-primary font-semibold "
              onClick={() => handleVendorsToolsDrawerToggle()}
            >
              VENDORS
            </li>

            <div>
              <MdOutlineKeyboardArrowRight
                className="text-primary text-2xl"
                onClick={() => handleVendorsToolsDrawerToggle()}
              />
            </div>
          </div>

          <div className="flex mb-4 justify-between">
            <li
              className="cursor-pointer text-black hover:text-primary font-semibold "
              onClick={() => handleForumsToolsDrawerToggle()}
            >
              FORUMS
            </li>

            <div>
              <MdOutlineKeyboardArrowRight
                className="text-primary text-2xl"
                onClick={() => handleForumsToolsDrawerToggle()}
              />
            </div>
          </div>

          <div className="flex mb-4 justify-between">
            <li
              className="cursor-pointer text-black hover:text-primary font-semibold "
              onClick={() => handleDressesToolsDrawerToggle()}
            >
              DRESSES
            </li>

            <div>
              <MdOutlineKeyboardArrowRight
                className="text-primary text-2xl"
                onClick={() => handleDressesToolsDrawerToggle()}
              />
            </div>
          </div>

          <div className="flex mb-4 justify-between">
            <li
              className="cursor-pointer text-black hover:text-primary font-semibold "
              onClick={() => handleIdeasToolsDrawerToggle()}
            >
              IDEAS
            </li>

            <div>
              <MdOutlineKeyboardArrowRight
                className="text-primary text-2xl"
                onClick={() => handleIdeasToolsDrawerToggle()}
              />
            </div>
          </div>

          <div className="flex mb-4 justify-between">
            <li
              className="cursor-pointer text-black hover:text-primary font-semibold "
              onClick={() => handleInvitationsToolsDrawerToggle()}
            >
              INVITATIONS
            </li>

            <div>
              <MdOutlineKeyboardArrowRight
                className="text-primary text-2xl"
                onClick={() => handleInvitationsToolsDrawerToggle()}
              />
            </div>
          </div>
          {/* Add more list items as needed */}
        </ul>

        <div class="border-t  border-gray-300"></div>

        <ul className="p-4">
          <div className="flex mb-4 justify-between">
            <li
              className="cursor-pointer text-black hover:text-primary  "
              onClick={() => handlePlanningToolsDrawerToggle()}
            >
              Help
            </li>
          </div>

          <div className="flex mb-4 justify-between">
            <li
              className="cursor-pointer text-black hover:text-primary  "
              onClick={() => handlePlanningToolsDrawerToggle()}
            >
              Privacy Policy
            </li>
          </div>

          <div className="flex mb-4 justify-between">
            <li
              className="cursor-pointer text-black hover:text-primary  "
              onClick={() => handlePlanningToolsDrawerToggle()}
            >
              Terms of use
            </li>
          </div>

          <div className="flex mb-4 justify-between">
            <li
              className="cursor-pointer text-black hover:text-primary  "
              onClick={() => handlePlanningToolsDrawerToggle()}
            >
              Do Not Sell My Info
            </li>
          </div>

          <div className="flex mb-4 justify-between">
            <li
              className="cursor-pointer text-black hover:text-primary  "
              onClick={() => router.push("/sector-login")}
            >
              Are You Vendor
            </li>
          </div>
        </ul>

        <div class="border-t  border-gray-300"></div>

        <ul className="p-4">
          <div className="flex mb-4 justify-between">
            <li
              className="cursor-pointer text-black hover:text-primary font-semibold  "
              onClick={() => router.push("/user/login")}
            >
              Log in
            </li>
          </div>
        </ul>
      </div>
      {/*================= Planning tool=======================  */}
      {isPlanningToolsDrawerOpen && (
        <div
          className={`fixed left-0 top-0 h-full w-64 bg-white transform ${
            isPlanningToolsDrawerOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform ease-in-out z-50`}
        >
          <div className="flex justify-between p-2 cursor-pointer">
            <MdOutlineKeyboardArrowLeft
              className="text-black opacity-70 mt-1 text-2xl"
              onClick={() => handlePlanningToolsDrawerToggle()}
            />

            <div className="flex items-center">
              <h1 className="text-primary text-lg font-semibold cursor-pointer">
                PLANNING TOOLS
              </h1>
            </div>

            <RxCross2
              className="text-black opacity-70 mt-1 text-xl"
              onClick={() => closeDrawers()}
            />
          </div>

          <div class="border-t  border-gray-300"></div>
          <ul className="p-4">
            <li
              className="cursor-pointer text-black py-2 font-semibold"
              onClick={() =>
                handleDrawerItemClicked("/planning-tools/checklist")
              }
            >
              View all
            </li>

            <li
              className="cursor-pointer text-black py-2"
              onClick={() =>
                handleDrawerItemClicked("/planning-tools/checklist")
              }
            >
              Checklist
            </li>
            <li
              className="cursor-pointer text-black py-2"
              onClick={() =>
                handleDrawerItemClicked("/planning-tools/seating-chart")
              }
            >
              Seating Chart
            </li>

            <li
              className="cursor-pointer text-black py-2"
              onClick={() =>
                handleDrawerItemClicked("/planning-tools/checklist")
              }
            >
              Vendors
            </li>
            <li
              className="cursor-pointer text-black py-2"
              onClick={() =>
                handleDrawerItemClicked("/planning-tools/seating-chart")
              }
            >
              Guests
            </li>
            <li
              className="cursor-pointer text-black py-2"
              onClick={() =>
                handleDrawerItemClicked("/planning-tools/checklist")
              }
            >
              Budget
            </li>
          </ul>

          <div class="border-t  border-gray-300"></div>

          <ul className="p-4">
            <li
              className="cursor-pointer text-black py-2 font-semibold"
              onClick={() =>
                handleDrawerItemClicked("/planning-tools/checklist")
              }
            >
              Personalize your event
            </li>

            <li
              className="cursor-pointer text-black py-2"
              onClick={() =>
                handleDrawerItemClicked("/planning-tools/checklist")
              }
            >
              Hotel Blocks
            </li>
            <li
              className="cursor-pointer text-black py-2"
              onClick={() =>
                handleDrawerItemClicked("/planning-tools/seating-chart")
              }
            >
              Date Finder
            </li>

            <li
              className="cursor-pointer text-black py-2"
              onClick={() =>
                handleDrawerItemClicked("/planning-tools/checklist")
              }
            >
              Hashtag Generator
            </li>
            <li
              className="cursor-pointer text-black py-2"
              onClick={() =>
                handleDrawerItemClicked("/planning-tools/seating-chart")
              }
            >
              Date Finder
            </li>
            <li
              className="cursor-pointer text-black py-2"
              onClick={() =>
                handleDrawerItemClicked("/planning-tools/checklist")
              }
            >
              Cost Guide
            </li>
          </ul>
        </div>
      )}

      {/*================= Venues=======================  */}
      {isVenuesToolsDrawerOpen && (
        <div
          className={`fixed left-0 top-0 h-full w-64 bg-white transform ${
            isVenuesToolsDrawerOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform ease-in-out z-50`}
        >
          <div className="flex justify-between p-2 cursor-pointer">
            <MdOutlineKeyboardArrowLeft
              className="text-black opacity-70 mt-1 text-2xl"
              onClick={() => handleVenuesToolsDrawerToggle()}
            />

            <div className="flex items-center">
              <h1 className="text-primary text-lg font-semibold cursor-pointer">
                VENUES
              </h1>
            </div>

            <RxCross2
              className="text-black opacity-70 mt-1 text-xl"
              onClick={() => close2Drawers()}
            />
          </div>

          <div class="border-t  border-gray-300"></div>

          <ul className="p-4">
            <li
              className="cursor-pointer text-black py-2 font-semibold"
              onClick={() => {
                router.push(`/shared`);
              }}
            >
              View all
            </li>

            {venueTypes.map((venueType, index) => (
              <li
                key={index}
                className="cursor-pointer text-black py-2"
                onClick={() => {
                  console.log("Clicked!");
                  router.push(`/shared?venue_id=${venueType.id}`);
                }}
              >
                {venueType.type}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/*================= Vendors=======================  */}
      {isVendorsToolsDrawerOpen && (
        <div
          className={`fixed left-0 top-0 h-full w-64 bg-white transform ${
            isVendorsToolsDrawerOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform ease-in-out z-50`}
        >
          <div className="flex justify-between p-2 cursor-pointer">
            <MdOutlineKeyboardArrowLeft
              className="text-black opacity-70 mt-1 text-2xl"
              onClick={() => handleVendorsToolsDrawerToggle()}
            />

            <div className="flex items-center">
              <h1 className="text-primary text-lg font-semibold cursor-pointer">
                VENDORS
              </h1>
            </div>

            <RxCross2
              className="text-black opacity-70 mt-1 text-xl"
              onClick={() => close3Drawers()}
            />
          </div>

          <div class="border-t  border-gray-300"></div>

          <ul className="p-4">
            <li
              className="cursor-pointer text-black py-2 font-semibold"
              onClick={() => {
                router.push(`/shared/vendor`);
              }}
            >
              View all
            </li>

            {vendorTypes.map((vendorType, index) => (
              <li
                key={index}
                className="cursor-pointer text-black py-2"
                onClick={() => {
                  console.log("Clicked!");
                  router.push(`/shared?venue_id=${vendorType.id}`);
                }}
              >
                {vendorType.name}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/*=================Forums =======================  */}
      {isForumsToolsDrawerOpen && (
        <div
          className={`fixed left-0 top-0 h-full w-64 bg-white transform ${
            isForumsToolsDrawerOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform ease-in-out z-50`}
        >
          <div className="flex justify-between p-2 cursor-pointer">
            <MdOutlineKeyboardArrowLeft
              className="text-black opacity-70 mt-1 text-2xl"
              onClick={() => handleForumsToolsDrawerToggle()}
            />

            <div className="flex items-center">
              <h1 className="text-primary text-lg font-semibold cursor-pointer">
                FORUMS
              </h1>
            </div>

            <RxCross2
              className="text-black opacity-70 mt-1 text-xl"
              onClick={() => close4Drawers()}
            />
          </div>
          <div class="border-t  border-gray-300"></div>
          <div className="flex justify-center p-7">
            <h1 className="text-black text-3xl font-bold">Coming Soon </h1>
          </div>
        </div>
      )}

      {/*=================DRESSES =======================  */}
      {isDressesToolsDrawerOpen && (
        <div
          className={`fixed left-0 top-0 h-full w-64 bg-white transform ${
            isDressesToolsDrawerOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform ease-in-out z-50`}
        >
          <div className="flex justify-between p-2 cursor-pointer">
            <MdOutlineKeyboardArrowLeft
              className="text-black opacity-70 mt-1 text-2xl"
              onClick={() => handleDressesToolsDrawerToggle()}
            />

            <div className="flex items-center">
              <h1 className="text-primary text-lg font-semibold cursor-pointer">
                DRESSES
              </h1>
            </div>

            <RxCross2
              className="text-black opacity-70 mt-1 text-xl"
              onClick={() => close5Drawers()}
            />
          </div>
          <div class="border-t  border-gray-300"></div>
          <div className="flex justify-center p-7">
            <h1 className="text-black text-3xl font-bold">Coming Soon </h1>
          </div>
        </div>
      )}

      {/*=================Ideas =======================  */}
      {isIdeasToolsDrawerOpen && (
        <div
          className={`fixed left-0 top-0 h-full w-64 bg-white transform ${
            isIdeasToolsDrawerOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform ease-in-out z-50`}
        >
          <div className="flex justify-between p-2 cursor-pointer">
            <MdOutlineKeyboardArrowLeft
              className="text-black opacity-70 mt-1 text-2xl"
              onClick={() => handleIdeasToolsDrawerToggle()}
            />

            <div className="flex items-center">
              <h1 className="text-primary text-lg font-semibold cursor-pointer">
                IDEAS
              </h1>
            </div>

            <RxCross2
              className="text-black opacity-70 mt-1 text-xl"
              onClick={() => close6Drawers()}
            />
          </div>
          <div class="border-t  border-gray-300"></div>
          <div className="flex justify-center p-7">
            <h1 className="text-black text-3xl font-bold">Coming Soon </h1>
          </div>
        </div>
      )}

      {/*=================Invitations =======================  */}
      {isInvitationsToolsDrawerOpen && (
        <div
          className={`fixed left-0 top-0 h-full w-64 bg-white transform ${
            isInvitationsToolsDrawerOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform ease-in-out z-50`}
        >
          <div className="flex justify-between p-2 cursor-pointer">
            <MdOutlineKeyboardArrowLeft
              className="text-black opacity-70 mt-1 text-2xl"
              onClick={() => handleInvitationsToolsDrawerToggle()}
            />

            <div className="flex items-center">
              <h1 className="text-primary text-lg font-semibold cursor-pointer">
                INVITATIONS
              </h1>
            </div>

            <RxCross2
              className="text-black opacity-70 mt-1 text-xl"
              onClick={() => close7Drawers()}
            />
          </div>
          <div class="border-t  border-gray-300"></div>
          <div className="flex justify-center p-7">
            <h1 className="text-black text-3xl font-bold">Coming Soon </h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default SmallNavbar;
