import List from "./list";
import { FaEdit } from "react-icons/fa";
import { MdOutlineMenu, MdClose } from "react-icons/md";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex justify-between  mx-4 sm:mx-20 font-[Poppins] space-x-2">
        <div className="text-3xl text-text100 flex">
          <FaEdit className="mr-2 mt-1" /> Edit Business Information
        </div>
        <div className="dropdown dropdown-end cursor-pointer">
          <label tabIndex={0}>
            <div className="w-10 border border-slate-600  p-2">
              <MdOutlineMenu size={20} className="text-text100" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 menu bg-base-200 menu-md dropdown-content rounded-box w-72"
          >
            <li>
              <Link
                href="/venue-home/storefront"
                className="text-text100 hover:bg-primary hover:text-white mb-2"
              >
                Basic Information
              </Link>
            </li>
            <li>
             
              <Link
                href="/venue-home/storefront/gallery"
                className="text-text100 hover:bg-primary hover:text-white"
              >
                Add Gallery
              </Link>
            </li>
           
          </ul>
        </div>
      </div>

      <div className="flex mx-4 sm:mx-20 font-[Poppins]">
        {/* Menu Div */}
        <List />
        <div className="flex-1 conatiner ">
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}
