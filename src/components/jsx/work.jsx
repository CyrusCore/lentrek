import React from 'react';
import face_classes from '../css/face.module.css'
import work_classes from '../css/work.module.css'
import ClipLoader from "react-spinners/ClipLoader";
import {CSSTransitionGroup} from "react-transition-group";
import {MainNavBar} from "./mainNavBar";
import {Footer} from "./footer";

class Work extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            iframeLoadedAmount: 0
        };

    }

    hideSpinner = () => {
        this.setState({
            loading: false
        });
    };

    getTracksCodes() {
        return [
            '2JsrHQtEuABa5aXW0IthxO',
            '2Xx7QECPrDRY1rmE3UgbT8',
            '1Mmm5VJeViYh4PKCHl4ucm',
            '6AhJQt9fNMUG6kLGc5KDGd',
            '4SYTrCFQvLTLn0w3CWbeHT',
            '0IHLni2rEu057yiGPSnWC1'
        ];
    }

    iframeLoadedAmountAdd = () => {
        let iframeLoadedAmount = this.state.iframeLoadedAmount
        iframeLoadedAmount++;
        this.setState({iframeLoadedAmount: iframeLoadedAmount});
        if (this.state.iframeLoadedAmount === this.getTracksCodes().length - 1) {
            this.hideSpinner();
        }
    }

    getTracksIframes() {
        let res = [];
        const tracks = this.getTracksCodes()
        tracks.forEach((value) => {
            let src = `https://open.spotify.com/embed/track/${value}`
            res.push(
                <div
                    key={src}
                    className={work_classes.track}>
                    <iframe
                        title={src}
                        src={src}
                        width="300"
                        height="380"
                        frameBorder="0"
                        allow="encrypted-media"
                        onLoad={this.iframeLoadedAmountAdd}/>
                </div>
            )
        })
        return res;
    }

    render() {
        return (
            <div className={face_classes.faceWrapper}>
                <MainNavBar/>
                <div>
                    {this.state.loading ? (
                        <div className={work_classes.loaderWrapper}>
                            <ClipLoader
                                css={'text-align: center; display: block; margin: auto; top: 50%;'}
                                size={200}
                                color={"#fff"}
                                loading={this.state.loading}/>
                            <h2>Fetching Spotify data...</h2>
                        </div>
                    ) : null}

                    <CSSTransitionGroup
                        transitionName="transition"
                        transitionAppear={true}
                        transitionAppearTimeout={500}
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}>
                        <div
                            className={work_classes.workWrapper}
                            style={{opacity: this.state.loading ? 0 : 1 }}>
                            {this.getTracksIframes()}
                            <div
                                className={work_classes.vimeo}
                                style={{opacity: this.state.loading ? 0 : 1 }}>
                                <iframe
                                    title={'vimeo'}
                                    className={work_classes.vimeoIframe}
                                    // src="https://www.youtube.com/embed/vPtrZDPWon8?si=y0kpxnmx97ASEDN-"
                                    frameBorder="0"
                                    allow="autoplay; fullscreen"
                                    allowFullScreen/>
                            </div>
                        </div>
                    </CSSTransitionGroup>
                </div>
                <Footer/>
            </div>
        );
    }
}

Work.propTypes = {};

export default Work;