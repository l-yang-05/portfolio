import React, { useEffect } from 'react';

const About = () => {
    useEffect(() => {
        document.title = "Lucy Yang | About Me"
    })
    return (

        <div className="component-wrapper">
            <h1>About Me</h1>
            <div className="content-container">
                <p>Hello, my name is <strong>Lucy Yang</strong>!</p>
                <p>
                    I’m a level 10 wizard at software development<span role="img" aria-label="wizard">🧙</span>. I was born and raised
                    in Charlotte, North Carolina. Over the past few years, I’ve gained much knowledge about software development as well
                    as developing the necessary skills needed for the position. Currently, I am still attending the Road to Hire Tech
                    Academy polishing my skills and growing as a software engineer (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧.
                </p>
            </div>
        </div>

    )

}

export default About;