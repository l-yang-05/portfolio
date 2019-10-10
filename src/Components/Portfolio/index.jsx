import React, { useEffect } from 'react';

const Portfolio = () => {
    useEffect(() => {
        document.title = "Lucy Yang | Portfolio"
    })
    return (
        <div className="port-wrapper">
            <h1>Portfolio</h1>
            <section>
                <h2 className="work-intro">Coding Projects</h2>
                <div className="work-container">
                    <a href="https://github.com/l-yang-05/Kiwis-Paradise-v2" target="_blank" aria-label="eCommerce Full stack project's repo" rel="noopener noreferrer"><div className="work-item">
                        <p>Full stack eCommerce webstie</p>
                    </div></a>
                    <a href="https://github.com/l-yang-05/Kiwis-Paradise-v2" target="_blank" aria-label="eCommerce Full stack project's repo" rel="noopener noreferrer"><div className="work-item">
                        <p>Full stack eCommerce webstie</p>
                    </div></a>
                    <a href="https://github.com/l-yang-05/Kiwis-Paradise-v2" target="_blank" aria-label="eCommerce Full stack project's repo" rel="noopener noreferrer"><div className="work-item">
                        <p>Full stack eCommerce webstie</p>
                    </div></a>
                    <a href="https://github.com/l-yang-05/Kiwis-Paradise-v2" target="_blank" aria-label="eCommerce Full stack project's repo" rel="noopener noreferrer"><div className="work-item">
                        <p>Full stack eCommerce webstie</p>
                    </div></a>
                    <a href="https://github.com/l-yang-05/Kiwis-Paradise-v2" target="_blank" aria-label="eCommerce Full stack project's repo" rel="noopener noreferrer"><div className="work-item">
                        <p>Full stack eCommerce webstie</p>
                    </div></a>
                    <a href="https://github.com/l-yang-05/Kiwis-Paradise-v2" target="_blank" aria-label="eCommerce Full stack project's repo" rel="noopener noreferrer"><div className="work-item">
                        <p>Full stack eCommerce webstie</p>
                    </div></a>
                </div>
            </section>
        </div>
    )

}

export default Portfolio;