import React, { useEffect } from 'react';

const Portfolio = () => {
    useEffect(() => {
        document.title = "Lucy Yang | Portfolio"
    })
    return (
        <React.Fragment>
            <h1>Portfolio</h1>
            <div>
                <h2>Code</h2>
            </div>
            <div>
                <h2>Videos</h2>
            </div>


        </React.Fragment>
    )

}

export default Portfolio;