import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {
    selectDropDown,
    writingTextRegistration,
    checkBoxRegistration,
    submitRegistration
} from '../../actions';
import DropDownComponent from "../DropDown/DropDownComponent";
import {Button, Form} from "react-bootstrap";
import {DataPicker} from "./DataPicker";
import './secondRegistrationForm.scss';
import 'react-toastify/dist/ReactToastify.css';
import moment from "moment";
import {toast, ToastContainer} from "react-toastify";

const SecondRegistrationForm = (props) => {
    const onChangeInput = (e) => {
        props.writingTextRegistration(e.target.value, e.target.name)
    };
    const clickCheckBox = (status) => {
        props.checkBoxRegistration(status)
    };
    const finalizeRegistration = (e) => {
        e.preventDefault();
        const age = moment().diff(`${props.registration.year}-${props.registration.month}-${props.registration.day}`, 'years');
        let validatedEmail = props.registration.email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
        let validatedUsername = props.registration.username.match(/^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/i);
        if (!validatedEmail) {
            toast("Please enter correct email");
            return false
        }
        if (!validatedUsername) {
            toast("Please enter correct username with a restriction of 2-20 characters, which can be letters and numbers, the first character is necessarily a letter");
            return false
        }

        if (age < 18) {
            toast('Its available for 18+ years old')
        }
        if (props.registration.username && props.registration.email && props.registration.password &&
            props.registration.education && props.registration.children && props.registration.region &&
            props.registration.commune && props.registration.checkbox && age > 18) {
            const d = props.registration;
            props.submitRegistration(d)
        } else {
            toast("Please fill correct all fields")
        }
    };
    return (
        <Fragment>
            <Form onSubmit={finalizeRegistration}>

                <div
                    id="secondRegistration"
                >
                    <div className="d-flex">
                        <div className="d-flex flex-column">
                            <div className="d-flex flex-column mr-4">
                                <span className="topLabel">Username</span>
                                <input type='text' name='username'
                                       onChange={(e) => onChangeInput(e)}
                                       value={props.registration.username} required/>

                            </div>

                            <div className="d-flex flex-column mr-4">
                                <span className="topLabel">Password</span>
                                <input type='password' name='password'
                                       onChange={(e) => onChangeInput(e)}
                                       value={props.registration.password} required/>
                            </div>

                            <div className="d-flex flex-column mr-4">
                                <span className="topLabel">Education Level</span>
                                <DropDownComponent nameDrop={'education'} stateProperty={'registration'}
                                                   items={['basic', 'half', 'technique', 'university', 'post grade', 'other']}
                                                   selected={props.registration.education}/>
                            </div>

                            <div className="d-flex flex-column mr-4">
                                <span className="topLabel">Region</span>
                                <DropDownComponent nameDrop={'region'} stateProperty={'registration'} items={[
                                    'I Region', 'II Region', 'III Region', 'IV Region',
                                    'IX Region', 'R.M', 'V Region', 'VI Region',
                                    'VII Region', 'VIII Region', 'X Region', 'XI Region',
                                    'XII Region', 'XIV Region', 'XV Region',]} selected={props.registration.region}/>
                            </div>
                            <div className='acceptCheck'>
                                <input type='checkbox' onClick={() => clickCheckBox(!props.registration.checkbox)}
                                       checked={props.registration.checkbox} required/>
                                <span className="topLabel paddingLeft15">I accept<span className='blueText'> Terms of use</span></span>
                            </div>
                        </div>


                        <div className="d-flex flex-column">
                            <div className="d-flex flex-column mr-4">
                                <span className="topLabel">E-Mail</span>
                                <input type='email' name='email'
                                       onChange={(e) => onChangeInput(e)}
                                       value={props.registration.email} required/>
                            </div>

                            <div className="d-flex flex-column mr-4">
                                <span className="topLabel">Birthday</span>
                                <DataPicker/>
                            </div>

                            <div className="d-flex flex-column mr-4">
                                <span className="topLabel">Children</span>
                                <DropDownComponent nameDrop={'children'} stateProperty={'registration'}
                                                   items={['yes, at home', 'yes', 'yes visiting', 'do not']}
                                                   selected={props.registration.children}/>
                            </div>

                            <div className="d-flex flex-column mr-4">
                                <span className="topLabel">Commune</span>
                                <DropDownComponent nameDrop={'commune'} stateProperty={'registration'}
                                                   items={['Alto Del Carmen', 'Caldera',
                                                       'Chanaral', 'Copiapo', 'Diego De Almagro', 'Freirina', 'Huasco', 'Tierra Lmarilla', 'Vallenar',]}
                                                   selected={props.registration.commune}/>
                            </div>
                            <div className="d-flex flex-column mr-4 mt-3">
                                <Button className='submitButton' type="submit">Finalize</Button>
                            </div>
                        </div>
                    </div>
                </div>

                <ToastContainer/>
            </Form>
        </Fragment>
    );
};

const mapStateToProps = state => ({
    name: state.name,
    password: state.password,
    registration: state.registration,
    toggleRegistrationForms: state.toggleRegistrationForms
});

const mapDispatchToProps = dispatch => ({
    writingTextRegistration: (text, field) => dispatch(writingTextRegistration(text, field)),
    selectDropDown: (select, field, stateProperty) => dispatch(selectDropDown(select, field, stateProperty)),
    checkBoxRegistration: (select, field) => dispatch(checkBoxRegistration(select, field)),
    submitRegistration: (data) => dispatch(submitRegistration(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SecondRegistrationForm)