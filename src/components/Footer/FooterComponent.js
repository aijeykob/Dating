import React, {Fragment} from 'react';
import './footerComponent.scss';

const FooterComponent = () => {
    return (
        <Fragment>
            <div className='MainTopContainer'>
                <div className="d-flex flex-row maxWidth75  ">
                    <span className='textFooter'>Register on Datingchile.cl and look for a partner in Santiago and in all regions of Chile. We operate since 2008 and we are the most important service in the country to find a partner and chat with friends online in Chile. In Datingchile.cl you can chat and perform precise searches to find people who meet what you are looking for in a person and thus find the half-orange you always dreamed of. Dating and chatting with friends in Chile has never been so easy as with Datingchile.cl! Cheer up and trust the story and trust that is Datingchile.cl, we are sure you will find new friends and a couple with us.</span>
                </div>
                <div className='d-flex flex-row maxWidth75 mt-5'>
                    <div className='d-flex flex-column w-25'>
                        <img
                            className='footerLogo'
                            src={'/public/images/logo.svg'}
                            alt="No img"/>
                        <div className='logoLabel'>
                            <span className='textFooter'>We take love seriously</span>
                        </div>
                    </div>
                    <div className='d-flex flex-row w-50  '>
                        <div className='d-flex flex-column test'>
                            <div className='blueLine'> </div>
                            <span className='textFooter'>Press</span>
                            <span className='bottomLink'>Read all about the extensive press coverage Datingchile has received.</span>
                        </div>
                        <div className='d-flex flex-column test'>
                            <div className='blueLine'> </div>
                            <span className='textFooter'>  Privacy Policy</span>
                            <span className='bottomLink'> If you want to know how Datingchile protects your data, you can review our privacy policy.</span>
                        </div>
                        <div className='d-flex flex-column test'>
                            <div className='blueLine'> </div>
                            <span className='textFooter'>  Help</span>
                            <span className='bottomLink'> Customer <br />service<br /> Blog<br /> Tips<br /> U.S</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='MainBottomContainer'>
                <div className='d-flex flex-row w-100 justify-content-around'>
                    <div className='d-flex flex-column pt-2'>
                        <span className='rightsText'>© 2020 Datingchile - All rights reserved</span>
                    </div>
                    <div className='d-flex flex-column'>
                        <div className="d-flex flex-row">
                            <div className='divColorImg'>
                                <img className='colorImg' src='/public/images/facebook.png' alt='noImg'/>
                            </div>
                            <div className='divColorImg ml-3'>
                                <img className='colorImg' src='/public/images/twitter.png' alt='noImg'/>
                            </div>
                        </div>
                        <div>
                            <i className='icon-twitter'> </i>
                        </div>
                    </div>
                </div>

            </div>
        </Fragment>
    );
};

export default FooterComponent