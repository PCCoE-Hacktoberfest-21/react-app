import "../styles/scroll-button.css";
import React, { useState } from 'react'


function Scroll_button() {

    let [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }

    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <>
            {
                visible ? <button onClick={window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })} className="button">
                    <img src="src/2117-scroll-down-arrow1.png" alt="" />
                </button> : <></>
            }
        </>
    )
}

export default Scroll_button
