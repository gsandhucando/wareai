// import { useState, useRef, useEffect } from "react";
import './footer.css';

function TagComponent({ title, li, inputNeeded = false, mobileResize=false }) {

    return (
        <div className='footerTagContainer' style={mobileResize ? {margin: '30px 0'} : null}>
            <h1 className='footerHeader' style={{ fontWeight: 600 }}>{title}</h1>
            <ul className='footerUl'>
                {
                    li.map((item, i) => {
                        return <li key={i} className='footerLi'>{item}</li>
                    })
                }

            </ul>
            {inputNeeded ?
                <>
                    <input className='emailInput' type='email' placeholder='Enter email adress' />
                    <div className='getDemoBtn'>
                        <p>Subscribe</p>
                    </div>
                </>
                : null
            }
        </div>
    );
}

export default TagComponent;
