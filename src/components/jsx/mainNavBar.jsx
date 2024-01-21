import React from 'react';

import nav_classes from '../css/mainNavBar.module.css'
import {Social} from "./social";
import {NavLink} from 'react-router-dom'
import {CSSTransitionGroup} from "react-transition-group";

export const MainNavBar = () => {
    return (
        <CSSTransitionGroup
            transitionName="transition"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
        <div className={nav_classes.navBarWrapper}>
            <div className={nav_classes.mainLogoWrapper}>
                <img src={process.env.PUBLIC_URL + '/img/logos/lhntrx_logo_slim.png'} alt=""/>
            </div>
            <div className={nav_classes.socialWrapperSmall}>
                <Social/>
            </div>
            <nav className={nav_classes.navBar}>
                <ul>
                    <li key={0}><NavLink exact to="/"
                                         className={nav_classes.btn}
                    >HOME</NavLink></li>

                    <li key={1}><NavLink exact to="/about"
                                         className={nav_classes.btn}
                                         activeStyle={{"letterSpacing": "5px", "color": "white"}}
                    >ABOUT</NavLink></li>

                    <li key={2}><NavLink exact to="/work"
                                         className={nav_classes.btn}
                                         activeStyle={{"letterSpacing": "5px", "color": "white"}}
                    >BEATS</NavLink></li>

                    {/* <li key={3}><NavLink to="/studios"
                                         className={nav_classes.btn}
                                         activeStyle={{"letterSpacing": "5px", "color": "white"}}
                    >ASTRALÉ STUDIOS</NavLink></li> */}

                    <li key={'beats'}><a
                        className={nav_classes.btn}
                        href="https://youtube.com/playlist?list=PLaf2E4FkJy0H6K7mE13IM1UXUqcTmsgDP&si=W9Kp21WrYse8RByR"
                    >PORTFOLIO</a></li>
                </ul>
            </nav>
        </div>
        
        </CSSTransitionGroup>
    );
}