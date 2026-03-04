import React from "react";

//style 
import '@/css/Header.css'

const Header = () => {
    //const [width, setWidth] = useState(685)
    return(
        <div className='header'>
            <div className='container'>
                <div id="title" className="title primary-label">
                    <a href="/" ><h1>Adam Hilario</h1></a>
                </div>
                {/*}
                <div className={`mobile-nav ${scroll? "mobile-sticky" : ""}`}>
                    <SideBar />
                </div>
                <div id='pin' className={`desktop-nav ${scroll? "sticky" : ""}`} >
                    <NavBar id="nav-bar"/>
                </div>
                {*/}
            </div>
        </ div>
    );
}

export default Header;