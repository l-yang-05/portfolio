import React, { useEffect } from 'react';
import ecom from '../../images/ecom.png';
import gateway from '../../images/gateway-html.png';
import number from '../../images/number-guess.png';
import comment from '../../images/comment-app.png';
import hiredUp from '../../images/hiredUp.png';
import admin from '../../images/adminsite.png'

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
                    <a href="https://github.com/l-yang-05/KiwisParadise-Mongo" target="_blank" aria-label="eCommerce Full stack project's repo" rel="noopener noreferrer"><div className="work-item">
                        <img className="screenshot" src={ecom} alt="eCommerece site"></img>
                        <p>Full stack eCommerce</p>
                    </div></a>
                    <a href="https://github.com/l-yang-05/KiwisParadise-Admin" target="_blank" aria-label="JS Calculator repo" rel="noopener noreferrer"><div className="work-item">
                        <img className="screenshot" src={admin} alt="Admin site"></img>
                        <p>C# eCommerce Admin site</p>
                    </div></a>
                    <a href="https://github.com/l-yang-05/gateway-html" target="_blank" aria-label="Gateway repo" rel="noopener noreferrer"><div className="work-item">
                        <img className="screenshot" src={gateway} alt="Gateway site"></img>
                        <p>Kyoto Japan Gateway</p>
                    </div></a>
                    <a href="https://github.com/l-yang-05/Number-Guessing-Game" target="_blank" aria-label="Number guessing game repo" rel="noopener noreferrer"><div className="work-item">
                        <img className="screenshot" src={number} alt="Number Guessing Game"></img>
                        <p> React Number Guessing Game</p>
                    </div></a>
                    <a href="https://github.com/l-yang-05/HiredUp" target="_blank" aria-label="API node challenges" rel="noopener noreferrer"><div className="work-item">
                        <img className="screenshot" src={hiredUp} alt="API node challenges"></img>
                        <p>Hired Up App</p>
                    </div></a>
                    <a href="https://github.com/l-yang-05/Comment-app" target="_blank" aria-label="Comment app repo" rel="noopener noreferrer"><div className="work-item">
                        <img className="screenshot" src={comment} alt="Comment App"></img>
                        <p>React Comment App</p>
                    </div></a>
                </div>
            </section>
        </div>
    )

}

export default Portfolio;