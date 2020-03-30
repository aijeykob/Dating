import React, {Fragment} from 'react';
import './headerComponent.scss';
import {writingLoginText, submitLogin} from "../../actions";
import {connect} from "react-redux";
import {Form} from "react-bootstrap";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HeaderComponent = (props) => {

    const onChangeInput = (e) => {
        props.writingLoginText(e.target.value, e.target.name)

    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (props.login.username && props.login.password) {
            const d = props.login;
            props.submitLogin(d)
        }
        if (!props.statusRegistration) {
            toast("Please enter correct data", {position: toast.POSITION.TOP_LEFT})
        }
    };

    return (
        <Fragment>
            <div id="header">
                <div className="d-flex flex-column pl-5">
                    <img
                        src={'/public/images/logo.svg'}
                        alt="No img"/>
                    <span
                        className="headerLabel">
                        Find your Ideal Partner</span>
                </div>
                <Form onSubmit={onSubmit}>
                    <div
                        className="d-flex flex-column pr-5">
                    <span
                        className="signupLabel"
                    >
                        If you already have a Profile
                    </span>
                        <div className="d-flex w-100">

                            <div className="d-flex flex-column">

                                <input
                                    type="text"
                                    name="username"
                                    onChange={(e) => onChangeInput(e)}
                                    value={props.login.username} required
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    placeholder="Enter email"/>
                                <div className="d-flex my-2">
                                    <input type="checkbox" id="login"/>
                                    <label
                                        className="ml-1 passwordLabel"
                                        htmlFor="login">
                                        Remember Data</label>
                                </div>
                            </div>
                            <div className="d-flex flex-column mx-2">
                                <input
                                    type="password"
                                    name="password"
                                    value={props.login.password} required
                                    onChange={(e) => onChangeInput(e)}
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    placeholder="Password"/>
                                <span
                                    className="passwordLabel my-2">
                                Did you forget your password?</span>
                            </div>

                            <button type="submit" className="btn h-50 btn-outline-light">Log in</button>

                        </div>
                    </div>
                </Form>
            </div>
            <ToastContainer/>
        </Fragment>
    );
};

const mapStateToProps = state => ({
    login: state.login,
    statusRegistration: state.statusRegistration,
});
const mapDispatchToProps = dispatch => ({
    writingLoginText: (text, field) => dispatch(writingLoginText(text, field)),
    submitLogin: (data) => dispatch(submitLogin(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderComponent)