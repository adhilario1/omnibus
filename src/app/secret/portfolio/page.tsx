import React from "react";

//components
import Header from "@/components/Header";

const Portfolio = () => {
    return (
        <div className="portfolio container">
            <Header />
            <div>
                <h1>Adam Hilario</h1>
                <p>
                    If you have found yourself on this page, you are either a talent recruiter who has received the link to this page directly, or you are a passerby who is dreadfully lost. 
                    <br/> 
                    In the case of the latter, you can find your way back to the top of site <a href="/">this way.</a>
                    <br/>
                    If you are here intentionally, or are just curious, feel free to look around.
                </p>
            </div>
        </div>
    )
}

export default Portfolio;