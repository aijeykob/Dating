import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {selectDropDown, switchToggleRegistrationForms} from '../../actions';
import DropDownComponent from "../DropDown/DropDownComponent";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Button} from "react-bootstrap";
import './firstRegistrationForm.scss';
import InfiniteCarousel from "../Carousel/CarouselComponent";

const FirstRegistrationForm = (props) => {


    const switchToggle = (status) => {
        props.switchToggleRegistrationForms(status)
    };

    const validateFirstForm = () => {
        if (props.registration.gender && props.registration.lookingFor &&
            props.registration.inAge && props.registration.region) {
            switchToggle(true)
        } else {
            toast("Please fill all fields")
        }
    };

    return (
        <Fragment>
            <div id="firstRegistration">
                <div className="d-flex">
                    <div className="d-flex flex-column mr-4 ">
                        <span className="topLabel">I am</span>
                        <DropDownComponent nameDrop={'gender'} stateProperty={'registration'} items={['male', 'female']}
                                           selected={props.registration.gender}/>
                    </div>
                    <div className="d-flex flex-column mr-4">
                        <span className="topLabel">Looking for</span>
                        <DropDownComponent nameDrop={'lookingFor'} stateProperty={'registration'}
                                           items={['partner', 'friends', 'chat']}
                                           selected={props.registration.lookingFor}/>
                    </div>
                    <div className="d-flex flex-column mr-4">
                        <span className="topLabel">between</span>
                        <DropDownComponent nameDrop={'inAge'} stateProperty={'registration'}
                                           items={['18-24', '25-31', '32-38', '39-45', '46-52', '53 or older',]}
                                           selected={props.registration.inAge}/>
                    </div>
                    <div className="d-flex flex-column mr-4">
                        <span className="topLabel">that live in</span>
                        <DropDownComponent nameDrop={'region'} stateProperty={'registration'} items={[
                            'I Region', 'II Region', 'III Region', 'IV Region',
                            'IX Region', 'R.M', 'V Region', 'VI Region',
                            'VII Region', 'VIII Region', 'X Region', 'XI Region',
                            'XII Region', 'XIV Region', 'XV Region',]} selected={props.registration.region}/>
                    </div>
                    <div className="d-flex flex-column-reverse mr-4">
                        <Button type="button" onClick={() => validateFirstForm()}>Next</Button>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </Fragment>
    );
};

const mapStateToProps = state => ({
    registration: state.registration,
    toggleRegistrationForms: state.toggleRegistrationForms
});


const mapDispatchToProps = dispatch => ({
    selectDropDown: (select, field, stateProperty) => dispatch(selectDropDown(select, field, stateProperty)),
    switchToggleRegistrationForms: (status) => dispatch(switchToggleRegistrationForms(status)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FirstRegistrationForm)
