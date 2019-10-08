import React, { useEffect } from 'react';

const About = () => {
    useEffect(() => {
        document.title = "Lucy Yang | About Me"
    })
    return (

        <div className="component-wrapper">
            <h1>About Me</h1>
            <div>
                <p>My Name is <strong>Lucy Yang</strong></p>
            </div>
        </div>

    )

}

export default About;