import React from 'react'
import Navbar from './Navbar'
import Recommend from './recommend'
import Footer from '../component/Footer/Footer'

//This page contains header ,'Reccomend.js' and footer
//This page is used to display the contents of 'Myads.js' in the profile Dashboard
//It contains the default route of '/myads'

const Myads = () => {
    return (
        <><div>
      {/* Navbar component is imported from the navbar.js present in "src/Components/Navbar.js" */}
            <Navbar />
        </div><div>
     {/* Recommend component is imported from the navbar.js present in "src/Components//Recommend.js" */}
                <Recommend />
            </div><div>
      {/* Footerr component is imported from the navbar.js present in "src/Component/Footer/Footer.js" */}
                <Footer />
            </div></>
    )
}

export default Myads;
