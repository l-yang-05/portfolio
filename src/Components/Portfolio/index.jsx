import React, { useEffect } from 'react';

const Portfolio = () => {
    useEffect(() => {
        document.title = "Lucy Yang | Portfolio"
    })
    return (
        <div className="component-wrapper">
            <h1>Portfolio</h1>
            <div>
                <h2>Code</h2>
            </div>
            <div>
                <h2>Videos</h2>
            </div>


        </div>
    )

}

export default Portfolio;