import React, { useEffect } from 'react';
import ecom from '../../images/ecom.png';
import gateway from '../../images/gateway-html.png';
import number from '../../images/number-guess.png';
import comment from '../../images/comment-app.png';
import calculator from '../../images/calculator.png'

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
                        <img className="screenshot" src={ecom} alt="eCommerece site"></img>
                        <p>Full stack eCommerce</p>
                    </div></a>
                    <a href="https://github.com/l-yang-05/gateway-html" target="_blank" aria-label="Gateway repo" rel="noopener noreferrer"><div className="work-item">
                        <img className="screenshot" src={gateway} alt="Gateway site"></img>
                        <p>Kyoto Japan Gateway</p>
                    </div></a>
                    <a href="https://github.com/l-yang-05/Number-Guessing-Game" target="_blank" aria-label="Number guessing game repo" rel="noopener noreferrer"><div className="work-item">
                        <img className="screenshot" src={number} alt="Number Guessing Game"></img>
                        <p>Number Guessing Game</p>
                    </div></a>
                    <a href="https://github.com/l-yang-05/API-Node-Challenges" target="_blank" aria-label="API node challenges" rel="noopener noreferrer"><div className="work-item">
                        <img className="screenshot" src="https://www.digital-loggers.com/images/rest.png" alt="API node challenges"></img>
                        <p>API Node Challenge</p>
                    </div></a>
                    <a href="https://github.com/l-yang-05/Comment-app" target="_blank" aria-label="Comment app repo" rel="noopener noreferrer"><div className="work-item">
                        <img className="screenshot" src={comment} alt="Number Guessing Game"></img>
                        <p>React Comment App</p>
                    </div></a>
                    <a href="https://github.com/l-yang-05/calculator-js" target="_blank" aria-label="JS Calculator repo" rel="noopener noreferrer"><div className="work-item">
                        <img className="screenshot" src={calculator} alt="JavaScript Calculator"></img>
                        <p>JS Calculator</p>
                    </div></a>
                </div>
            </section>
        </div>
    )

}

export default Portfolio;