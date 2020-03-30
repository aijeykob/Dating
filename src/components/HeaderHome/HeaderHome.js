import React, {Fragment} from 'react';
import './headerHome.scss';
import {
    writingLoginText,
    submitLogin,
    toggleClearSearch,
    setSelectedProfile,
    leaveProfile,
} from "../../actions";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";

const HeaderHome = (props) => {

    const leaveProfile = () => {
        localStorage.removeItem('token');
        props.leaveProfile()
    };

    return (
        <Fragment>
            <div className="headerHome">
                <div className="leftHeader ">
                    <img
                        className='logo'
                        src={'/public/images/logo.svg'}
                        alt="No img"
                    />
                </div>
                <div
                    className=" middleHeader">

                    <div
                        className="d-flex flex-column  pt-4">
                    <span
                        className="redirectLabel"
                    >
                        Start
                    </span>
                    </div>

                    <div
                        className="d-flex flex-column  pt-4">
                    <span
                        className="redirectLabel"
                    >
                        Events
                    </span>
                    </div>
                    <div
                        className="d-flex flex-column  pt-4">
                    <span
                        className="redirectLabel"
                    >
                        Blogs
                    </span>
                    </div>
                    <div
                        className="d-flex flex-column  pt-4">
                        <button
                            className="btn  btn-outline-light"
                        >
                            Payment Center
                        </button>
                    </div>

                    <div
                        className="d-flex flex-column pt-4">
                    <span
                        className="redirectLabel"
                    >
                        24 Hours VIP •
                                            <div className="dropdown">
                        <p className="dropBtn">Configuration
                            <i className="material-icons">
                                settings
                            </i>
                        </p>
                        <div className="dropdown-content">
            <NavLink onClick={() => props.setSelectedProfile(props.profileUser)}
                     to="/view-profile">view-profile</NavLink>
            <NavLink to="/edit-profile">edit-profile</NavLink>
            <NavLink to="/edit-photos">edit-photos</NavLink>
            <NavLink to="/download-photos">download-photos</NavLink>
            <NavLink onClick={() => props.toggleClearSearch(false)} to="/search">search</NavLink>
            <NavLink onClick={() => leaveProfile()} to="/">leave</NavLink>
                        </div>
                    </div>
                    </span>
                    </div>
                    <div
                        className="d-flex flex-column pl-2">
                        <img
                            src={(!!props.profileUser.avatar) ? `${props.profileUser.avatar}` : null}
                            className={(props.profileUser.gender === 'male') ? 'defaultMaleAvatar' : "defaultFemaleAvatar"}
                        />
                    </div>
                </div>
                <div className='rightHome'></div>
            </div>
        </Fragment>
    );
};

const mapStateToProps = state => ({
    login: state.login,
    profileUser: state.profileUser,
    toggleSearch: state.toggleSearch
});
const mapDispatchToProps = dispatch => ({
    writingLoginText: (text, field) => dispatch(writingLoginText(text, field)),
    submitLogin: (data) => dispatch(submitLogin(data)),
    toggleClearSearch: (status) => dispatch(toggleClearSearch(status)),
    leaveProfile: () => dispatch(leaveProfile()),
    setSelectedProfile: (data) => dispatch(setSelectedProfile(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderHome)
// display: flex;
// flex-flow: row wrap;
// justify-content: center;
// align-items: center;
// align-content: stretch;
// max-width: 860px;
// margin: 20px auto;
