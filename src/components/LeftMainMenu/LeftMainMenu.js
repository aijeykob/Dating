import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import './leftMainMenu.scss';
import {
    toggleClearSearch,
    selectDropDown,
    setSelectedProfile,
} from '../../actions';
import {NavLink} from "react-router-dom";

const LeftMainMenu = (props) => {

    return (
        <Fragment>
            <div id='leftMainMenu' className='d-flex'>
                <NavLink className='menuNavigation' activeClassName='activeMenuNavigation'
                         onClick={() => props.setSelectedProfile(props.profileUser)}
                         to="/view-profile">view-profile</NavLink>
                <NavLink className='menuNavigation' activeClassName='activeMenuNavigation'
                         to="/edit-profile">edit-profile</NavLink>
                <NavLink className='menuNavigation' activeClassName='activeMenuNavigation'
                         to="/edit-photos">edit-photos</NavLink>
                <NavLink className='menuNavigation' activeClassName='activeMenuNavigation'
                         to="/download-photos">download-photos</NavLink>
                <NavLink className='menuNavigation' activeClassName='activeMenuNavigation'
                         onClick={() => props.toggleClearSearch(false)} to="/search">search</NavLink>
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
)(LeftMainMenu)