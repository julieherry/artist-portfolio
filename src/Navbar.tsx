import React, { useState, useEffect } from "react";
import './Navbar.css';
import {
  NavLink
} from "react-router-dom";

import config from "./config";
import { isPage, TPageList } from "./types";

export default function Navbar() {
    const [hover, setHover] = useState<string | null>(null);

    const [isPageTop, setIsPageTop] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        window.onscroll = () => {
            if(window.pageYOffset === 0) {
                setIsPageTop(true);
            } else {
                setIsPageTop(false);
            }
        };

        return () => {
            window.onscroll = null;
        }
    }, []);

    return (
        <div className={isPageTop ? "navbar" : "navbar scrolled"}>
            <span className="title">
            
                <NavLink
                    activeClassName="active"
                    onClick={() => setIsOpen(false)}
                    exact
                    to="/"
                >{config.name}</NavLink>
            </span>
            <div className={isOpen ? "burger open" : "burger"} onClick={() => setIsOpen(true)}>
                <svg viewBox="0 0 60 80" width="15" height="15">
                    <rect width="100" height="10"></rect>
                    <rect y="30" width="100" height="10"></rect>
                    <rect y="60" width="100" height="10"></rect>
                </svg>
            </div>
            <div className={isOpen ? "closeBtn open" : "closeBtn"} onClick={() => setIsOpen(false)} >
                <svg xmlns='http://www.w3.org/2000/svg' width='14' height='14'>
                    <rect x='-1.9' y='6' transform='matrix(0.7071 0.7071 -0.7071 0.7071 6.9919 -2.8957)' width='17.8' height='2'/>
                    <rect x='-1.9' y='6' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -2.8956 6.9909)' width='17.8' height='2'/>
                </svg>
            </div>

            <ul className={isOpen ? "navItems open" : "navItems"}>
                {
                    config.sections.map(section => {
                        if (isPage(section)) {
                            return <li className="navItem" key={section.name} onClick={() => setIsOpen(false)}>
                                <NavLink
                                    to={section.path}
                                    activeClassName="active"
                                >{section.name}</NavLink>
                            </li>;
                        } else {
                            return <li 
                                key={section.name}
                                className="navItem"
                                onMouseEnter={() => setHover(section.name)}
                                onMouseLeave={() => setHover(null)}
                            >
                                <span
                                    className={isSubItemActive(section) || hover === section.name ? "active" : ""}
                                >{section.name}</span>
                                <div
                                    onMouseLeave={() => setHover(null)}
                                    onMouseEnter={() => setHover(section.name)}
                                    className={hover === section.name ? "dropdown" : "dropdown hidden"}
                                >
                                    <ul>
                                        {section.pages.map(page => (
                                            <li onClick={() => setIsOpen(false)} className="dropdownItem" key={page.name}><span><NavLink to={page.path}>{page.name}</NavLink></span></li>
                                        ))}
                                    </ul>
                                </div>
                            </li>;
                        }
                    })
                }
            </ul>
      </div>
    );
}

/*
 * Helpers
 */
function isSubItemActive (section: TPageList) : boolean {
    return section.pages.map(p => p.path).includes(window.location.pathname);
}
