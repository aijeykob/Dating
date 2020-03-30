import React, {Fragment, useEffect} from 'react';
import './app.scss';
import {connect} from 'react-redux'
import {
    viewProfile,
    getRandomImages,
} from './actions/index'
import Home from "./components/Home/Home";
import SubHeaderComponent from "./components/SubHeader/SubHeaderComponent"
import HeaderComponent from "./components/Header/HeaderComponent";
import CarouselComponent from "./components/Carousel/CarouselComponent";
import InfoMainComponent from "./components/InfoMain/InfoMainComponent";
import FooterComponent from "./components/Footer/FooterComponent";
import {Redirect} from "react-router-dom";
import Ban from "./components/Ban/Ban";

const App = (props) => {
    useEffect(() => {
        props.viewProfile();
        props.getRandomImages();
    }, []);
    let decoded = {};
    let token = localStorage.getItem("token");
    if (token) {
        let base64Url = token.split('.')[1];
        let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        let jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        decoded = JSON.parse(jsonPayload);
    }
    return (
        <Fragment>
            {
                (props.profileUser.statusBan === 'true') ? <Ban/> :
                    <div className="d-flex w-100 flex-column">
                        {
                            (props.profileUser.username || decoded.hasOwnProperty('username')) ? <Home/>
                                :
                                <div>
                                    <Redirect to='/'/>
                                    <HeaderComponent/>
                                    <SubHeaderComponent/>
                                    {
                                        (props.randomImages.length > 1) ? <CarouselComponent/> : null
                                    }
                                    <InfoMainComponent/>
                                    <FooterComponent/>
                                </div>
                        }
                    </div>
            }
        </Fragment>
    );
};

const mapStateToProps = state => ({
    name: state.name,
    password: state.password,
    toggleRegistrationForms: state.toggleRegistrationForms,
    profileUser: state.profileUser,
    randomImages: state.randomImages
});

const mapDispatchToProps = dispatch => ({
    viewProfile: () => dispatch(viewProfile()),
    getRandomImages: () => dispatch(getRandomImages()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)