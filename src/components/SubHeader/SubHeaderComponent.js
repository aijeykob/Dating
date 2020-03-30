import React, {Fragment} from 'react';
import './subHeaderComponent.scss';
import {connect} from "react-redux";
import FirstRegistrationForm from "../Registration/FirstRegistrationForm";
import SecondRegistrationForm from "../Registration/SecondRegistrationForm";


const SubHeaderComponent = (props) => {

    return (
        <Fragment>
            <div
                id="subheader"
            >
                <span className="mt-50 greetingLabel">Create your free profile</span>
                <div className="d-flex flex-column mr-4">
                    <div className="d-flex">

                        {
                            (!props.toggleRegistrationForms) ? <FirstRegistrationForm/> : <SecondRegistrationForm/>
                        }
                    </div>
                </div>
                <span
                    className="mb-50 greetingLabel">Join us to meet people! Today we are more than 900,000 registered</span>
            </div>
        </Fragment>
    );
};


const mapStateToProps = state => ({
    name: state.name,
    password: state.password,
    registration: state.registration,
    toggleRegistrationForms: state.toggleRegistrationForms
});


const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SubHeaderComponent)