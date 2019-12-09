import React, { useEffect } from 'react';
import ecom from '../../images/ecom.png';
import number from '../../images/number-guess.png';
import hiredUp from '../../images/hiredUp.png';
import gateway from '../../images/gateway-html.png';
import slade from '../../images/slade.png';
import SASS from '../../images/SASS.png';

const Portfolio = () => {
    useEffect(() => {
        document.title = "Lucy Yang | Portfolio"
    })
    return (
        <div className="port-wrapper">
            <h1>Portfolio</h1>
            <section>
                <div className="work-container">
                    <a href="https://github.com/l-yang-05/gateway-html" target="_blank" aria-label="Gateway" rel="noopener noreferrer"><div className="work-item">
                        <img className="screenshot" src={gateway} alt="Gateway"></img>
                        <p>Gateway Website</p>
                    </div></a>
                    <a href="https://github.com/l-yang-05/sass-buttons" target="_blank" aria-label="SASS" rel="noopener noreferrer"><div className="work-item">
                        <img className="screenshot" src={SASS} alt="SASS"></img>
                        <p>SASS Buttons</p>
                    </div></a>
                    <a href="https://github.com/l-yang-05/Number-Guessing-Game" target="_blank" aria-label="Number guessing game repo" rel="noopener noreferrer"><div className="work-item">
                        <img className="screenshot" src={number} alt="Number Guessing Game"></img>
                        <p> React Number Guessing Game</p>
                    </div></a>
                    <a href="https://github.com/l-yang-05/SLADE" target="_blank" aria-label="SLADE" rel="noopener noreferrer"><div className="work-item">
                        <img className="screenshot slade" src={slade} alt="SLADE"></img>
                        <p>SLADE App</p>
                    </div></a>
                    <a href="https://github.com/l-yang-05/HiredUp" target="_blank" aria-label="Hired Up" rel="noopener noreferrer"><div className="work-item">
                        <img className="screenshot" src={hiredUp} alt="Hired Up"></img>
                        <p>Hired Up App</p>
                    </div></a>
                    <a href="https://github.com/l-yang-05/KiwisParadise-Mobile" target="_blank" aria-label="eCommerce Full stack project's repo" rel="noopener noreferrer"><div className="work-item">
                        <img className="screenshot" src={ecom} alt="PWA Mobile"></img>
                        <p>Full stack eCommerce PWA</p>
                    </div></a>
                </div>
            </section>
        </div>
    )

}

export default Portfolio;