import React, { useEffect } from 'react';

const About = () => {
    useEffect(() => {
        document.title = "Lucy Yang | Portfolio"
    })
    return (
        <React.Fragment>
            <h1>About Me</h1>
            <div>
                <p>My Name is Lucy Yang</p>
            </div>

        </React.Fragment>
    )

}

export default About;