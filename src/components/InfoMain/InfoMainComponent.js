import React, {Fragment} from 'react';
import './infoMainComponent.scss';
import InfoOdd from "./InfoOdd";
import InfoEven from "./InfoEven";

const InfoMainComponent = () => {
    const mainContent = [
        {
            label: 'Meet people',
            text: 'Are you looking for friendship, love or fun? You can find thousands of people looking for the same as you on Datingchile.cl. Filter by age, city, interests and personality.',
            src: '/public/images/meet-people.jpg',
        },
        {
            label: 'Chat',
            text: 'In our chat rooms and in Messenger Datingchile.cl there are hundreds of people waiting to meet you. Activate your webcam and speak directly with the person you are interested in.',
            src: '/public/images/chat.png',
        },
        {
            label: 'Events',
            text: 'An event on Datingchile.cl is the best way to meet singles and especially have fun! Together, parties, speed dating, dating games, trips and much more you can find here.',
            src: '/public/images/events.png',
        },
        {
            label: 'Tips',
            text: 'We present you the intimate advice of Datingchile.cl about love and sex that will be presented to you by our team of experts. These tips will change your life.',
            src: '/public/images/tips.png',
        },
        {
            label: 'Blogs',
            text: 'Check out the blogs of the columnists of Datingchile.cl, of our outstanding users and invited authors experts in love and relationships.',
            src: '/public/images/blogs.jpg',
        }
    ];

    return (
        <Fragment>
            <div className='d-flex flex-column align-items-center mb-5 mt-4'>
                <div className="d-flex flex-column mx-5">
                    <span className="label1">Find a Partner and Find Love in Chile</span>
                    <span className="label2">Are you looking for a partner, love or friends in Chile?</span>
                </div>
                <div className='d-flex flex-column w-50 mt-5'>
                    {
                        mainContent.map((content, index) => {
                            if (index % 2) {
                                return (
                                    <InfoOdd content={content} key={content.label}/>
                                )
                            } else {
                                return (
                                    <InfoEven content={content} key={content.label}/>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </Fragment>
    );
};


export default InfoMainComponent