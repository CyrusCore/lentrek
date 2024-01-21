import React from 'react';
import face_classes from '../css/face.module.css'
import about_classes from '../css/about.module.css'
import {MainNavBar} from "./mainNavBar";
import {Footer} from "./footer";
import {CSSTransitionGroup} from "react-transition-group";


export const About = () => {
    return (
        <div className={face_classes.faceWrapper}>
            <MainNavBar/>
            <CSSTransitionGroup
                transitionName="transition"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
                <div className={about_classes.aboutWrapper}>
                <span className={about_classes.aboutTextBase}>
                    LHNTRX<br/><br/>
                    <span className={about_classes.aboutTextHeavy}>Saya adalah pembuat musik dari Indonesia, yang kadang-kadang membuat musik ga jelas, kadang-kadang juga bikin musik lofi, rock, edm, DJ jedag jedug, dan lain-lain</span><br/><br/>
                    {/* EVERSINCE, THE YOUNG ARTIST HAS BEEN WORKING ON LEAVING HIS MARK ON THE WHOLE GENRE OF WAVE AND TRANSLATING THE PURE EMOTION INTO SOUND OF TRUE ASTRAL EXPERIENCE, GATHERING THE AUDIENCE THROUGHOUT THE YEARS.<br/><br/> */}
                    <span className={about_classes.aboutTextHeavy}>Saya juga lumayan jago dalam bermain keyboard ataupun piano ( menurut saya sendiri ), dan saya juga lagi membuka jasa pembuatan musik, untuk yang butuh perBGMan, perCoveran, dan perOriginalSong an</span><br/><br/>
                    {/* LIVE-ACT EXPERIENCE HE HAS BEEN GATHERING, PLAYING ALL AROUND THE EUROPE, FROM LONDON TO WARSAW, WITH THE BIGGEST AND MOST-KNOWN UNDERGROUND PRODUCERS AND RAPPERS MAKE HIS PERFORMANCES ONE-OF-A-KIND STORY, WORTH TO LIVE THROUGH AT ANY FESTIVAL OR EVENT HE PLAYS AT.<br/><br/> */}
                    <span className={about_classes.aboutTextHeavy}>Kadang LHNTRX juga ngeband di beberapa event Wibu, dan juga kadang saya nge-band di event-event tertentu</span><br/><br/>
                    {/* HIS GOAL? SOUNDTRACKS. DUE TO HUGE INFLUENCE FROM THE ORCHESTRAL AND FILM MUSIC, THE ARTIST'S DREAM IS TO PRODUCE MUSIC TO FILMS AND SERIES, AND WHO KNOWS - IT MAY AS WELL HAPPEN ONE DAY...<br/><br/> */}
                </span>
                </div>
                <Footer/>
            </CSSTransitionGroup>
        </div>
    );
};