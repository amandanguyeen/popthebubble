import React from 'react';
import { Navbar } from '../../common';
import './Header.css'

function Header(){
    return (
        <section className="Header">
             {/* This is where the logo and the links will go */}
            <section className="header-top-half">
                <section className="header-top-navbar">
                    <Navbar firstLink="ABOUT" secondLink="RULES AND GUIDELINES"/>
                </section>
                <section className="header-title">
                        Pop the Bubble.
                </section>
                <section className="header-top-navbar">
                    <Navbar firstLink="CONTACT US" secondLink="ACCOUNT"/>
                </section>
            </section>

            <section className = "header-middle">
                <section className="header-quote">
                    Seek first to understand, then to be understood.
                </section>
            </section>

            <section className="header-bottom-half">
                PICTURE
                <hr className="header-seperator" /> 
            </section>
        </section>
    )
}

export default Header;