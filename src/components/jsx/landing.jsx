import React from 'react';
import landing_classes from "../css/landing.module.css"
import {Social} from "./social";
import {NavLink} from "react-router-dom";
import {CSSTransitionGroup} from "react-transition-group";

export const Landing = () => {
    return (
        <CSSTransitionGroup
            transitionName="transition"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            <div className={landing_classes.landingWrapper}>
                <div className={landing_classes.navBarWrapper}>
                    <div>
                        <img width="100%" src={process.env.PUBLIC_URL + '/img/logos/lhntrx_logo_slim.png'} alt=""/>
                    </div>
                    <nav className={landing_classes.navBar}>
                        <ul>
                            <li><NavLink to="/about"
                                      className={landing_classes.btn}
                            >ABOUT</NavLink></li>

                            <li><NavLink to="/work"
                                      className={landing_classes.btn}
                            >BEATS</NavLink></li>

                            {/* <li><NavLink to="/studios"
                                      className={landing_classes.btn}
                            >ASTRALÉ STUDIOS</NavLink></li> */}

                            <li><a
                                className={landing_classes.btn}
                                href="https://youtube.com/playlist?list=PLaf2E4FkJy0H6K7mE13IM1UXUqcTmsgDP&si=W9Kp21WrYse8RByR"
                            >PORTFOLIO</a></li>
                        </ul>
                    </nav>
                </div>
                <div className={landing_classes.socialWrapper}>
                    <Social/>
                </div>
            </div>
        </CSSTransitionGroup>
    );
};