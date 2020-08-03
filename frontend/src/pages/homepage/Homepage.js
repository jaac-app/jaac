import React from "react";
import Header from "components/Header";

// Section imports
import SideNavbar from "./sections/SideNavbar";

const Homepage = () => {
    return (
        <>
        <div className="layout">
            <Header />
            <SideNavbar />
            <main className="conversation">
            
            </main>
         </div>
      </>
    )
}
export default Homepage;