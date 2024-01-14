import Venue_Nav from '../components/Venue_Nav'
import Venue_Bar from '../components/Venue_Bar'
import Venue_Footer from  '../components/Venue_Footer'

export default function Layout({ children }) {
    return (
      <>
       <Venue_Nav/>
       <div className="divider "></div>

       <Venue_Bar/>
       


        <main>{children}</main>
        {/* <Footer /> */}
      </>
    )
  }