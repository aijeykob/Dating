import React, {Fragment} from 'react';

const InfoOdd = (props) => {

    return (
        <Fragment>
            <div key={props.content.label} className="d-flex  w-100 mt-3">
                <div className="w-50 subText">
                    <h3 className='subLabel'>{props.content.label}</h3>
                    <span className='textLabel'>  {props.content.text}</span>
                </div>
                <div className="w-50">
                    <div
                        style={{backgroundImage: `url(${props.content.src})`}}
                        className="immg"
                    >
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
export default InfoOdd