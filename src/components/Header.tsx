'use client'

import React, { useState } from "react";
import Link from "next/link";
//style 
import '@/css/Header.css'

const breakpoint= 685;


const Header = () => {
    const [width, setWidth] = useState(685);
     const [scroll, setScroll] = useState(false);
    const [navElem, setNavElem] = useState<HTMLElement | null>();

    
    return(
        <div className='header'>
            <div className='container'>
                <div id="title" className="title primary-label">
                    <Link href="/" ><h1>Adam Hilario</h1></Link>
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