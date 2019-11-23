import React, { useEffect } from 'react';
import ecom from '../../images/ecom.png';
import number from '../../images/number-guess.png';
import hiredUp from '../../images/hiredUp.png';
import admin from '../../images/adminsite.png';
import slade from '../../images/slade.png';
import starCatcher from '../../images/star-catcher.png';

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
                        <p>Full stack MERN eCommerce</p>
                    </div></a>
                    <a href="https://github.com/l-yang-05/KiwisParadise-Admin" target="_blank" aria-label="JS Calculator repo" rel="noopener noreferrer"><div className="work-item">
                        <img className="screenshot" src={admin} alt="Admin site"></img>
                        <p>C# eCommerce Admin site</p>
                    </div></a>
                    <a href="https://github.com/l-yang-05/Star-Catcher" target="_blank" aria-label="star-catcher" rel="noopener noreferrer"><div className="work-item">
                        <img className="screenshot" src={starCatcher} alt="star-catcher"></img>
                        <p>MERN Auction eCommerce</p>
                    </div></a>
                    <a href="https://github.com/l-yang-05/Number-Guessing-Game" target="_blank" aria-label="Number guessing game repo" rel="noopener noreferrer"><div className="work-item">
                        <img className="screenshot" src={number} alt="Number Guessing Game"></img>
                        <p> React Number Guessing Game</p>
                    </div></a>
                    <a href="https://github.com/l-yang-05/HiredUp" target="_blank" aria-label="API node challenges" rel="noopener noreferrer"><div className="work-item">
                        <img className="screenshot" src={hiredUp} alt="API node challenges"></img>
                        <p>Hired Up App</p>
                    </div></a>
                    <a href="https://github.com/l-yang-05/SLADE" target="_blank" aria-label="SLADE" rel="noopener noreferrer"><div className="work-item">
                        <img className="screenshot slade" src={slade} alt="SLADE"></img>
                        <p>SLADE MERN App</p>
                    </div></a>
                </div>
            </section>
        </div>
    )

}

export default Portfolio;