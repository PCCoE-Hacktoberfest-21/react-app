import "../styles/scroll-button.css";
import React, { useState } from 'react'
import Image from "./download.jpeg";


function ScrollButton() {

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
                visible ? <button onClick={() => {window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })}} className="button">
                    <img src={Image} alt="" className="img"/>
                </button> : <></>
            }
        </>
    )
}

export default ScrollButton
