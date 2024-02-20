import { FaLinkedin } from 'react-icons/fa';
import { MdOutlineEmail } from "react-icons/md";

import React, { useState, useRef } from 'react';

export default function ContactMe() {
    const [showText, setShowText] = useState(false);

    return (
        <section id="Contact" className="contact--section">
            <div>
                <h2 className='skills--section--heading'>Contact Me!</h2>
                <p className="hero--section-description ">
                    Please feel free to contact me on Email or LinkedIn. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                </p>
            </div>
            <div className="contact-icon-container">
            <a href="https://www.linkedin.com/in/mathiasjoe/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin style={{ verticalAlign: 'middle', fontSize: '150px' }} />
            </a>
            
                <MdOutlineEmail
                    className="contact-icon"
                     onClick={() => navigator.clipboard.writeText('mathias@jorgensen.nu')}
                     onMouseLeave={() => {
                        console.log('Mouse left');
                        setShowText(false);
                      }}
                    onMouseEnter={() => {
                        console.log('Mouse entered');
                        setShowText(true);
                      }}
                />
            <span className={`contact-tooltip ${showText ? 'contact-tooltip-visible' : ''}`}>
                Click to copy the email
            </span>
            </div>
        </section>
        
    );
}

