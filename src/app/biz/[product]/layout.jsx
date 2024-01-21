import Navbar from "../../components/Navbar"
import Are_You_Vendor from "../../components/Are_You_Vendor"
import SmallNavbar from '../../components/SmallNavbar';
// import Main_Footer from '../../components/Main_Footer';

export default function Layout({ children }) {
    return (
      <>
       <Are_You_Vendor/>
       <Navbar/>
       <SmallNavbar/>
       {/* <div className="divider "></div> */}
       <div class="border-t mt-2 border-gray-300"></div>
       {/* <SearchHero/> */}
        <main>{children}</main>
        {/* <Main_Footer/> */}
      </>
    )
  }