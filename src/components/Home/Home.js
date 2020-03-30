import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {
    toggleClearSearch,
    selectDropDown,
    setSelectedProfile,
} from '../../actions';
import {Route} from "react-router-dom";
import ViewProfile from "../ViewProfile/ViewProfile";
import EditProfile from "../EditProfile/EditProfile";
import {EditPhotos} from "../EditPhotos/EditPhotos";
import {DownloadPhotos} from "../DownloadPhotos/DownloadPhotos";
import SearchComponent from "../Search/SearchComponent";
import HeaderHome from "../HeaderHome/HeaderHome";
import ViewAlbum from "../ViewAlbum/ViewAlbum";
import LeftMainMenu from "../LeftMainMenu/LeftMainMenu";
import './home.scss';

const Home = () => {

    return (
        <Fragment>
            <HeaderHome/>
            <div id='home' className="w-100 d-flex ">

                <div className="leftHome ">
                    <LeftMainMenu/>
                </div>
                <div className="middleHome">
                    <div className='wrapper'>
                        <img  className='bannerImg' src='/public/images/banner.jpg' alt=''/>
                    </div>
                    <Route path="/view-profile" render={() => <ViewProfile/>}/>
                    <Route path="/edit-profile" render={() => <EditProfile/>}/>
                    <Route path="/view-album" render={() => <ViewAlbum/>}/>
                    <Route path="/edit-photos" render={() => <EditPhotos/>}/>
                    <Route path="/download-photos" render={() => <DownloadPhotos/>}/>
                    <Route path="/search" render={() => <SearchComponent/>}/>
                </div>
                <div className="rightHome"></div>
            </div>
        </Fragment>
    );
};

const mapStateToProps = state => ({
    name: state.name,
    password: state.password,
    registration: state.registration,
    toggleRegistrationForms: state.toggleRegistrationForms,
    statusRegistration: state.statusRegistration,
    profileUser: state.profileUser
});


const mapDispatchToProps = dispatch => ({
    selectDropDown: (select, field, stateProperty) => dispatch(selectDropDown(select, field, stateProperty)),
    toggleClearSearch: (status) => dispatch(toggleClearSearch(status)),
    setSelectedProfile: (data) => dispatch(setSelectedProfile(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)