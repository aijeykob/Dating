import React, {Fragment} from 'react';
import {leaveProfile} from "../../actions";
import {connect} from "react-redux";

const Ban = (props) => {
    const leaveProfile = () => {
        localStorage.removeItem('token');
        props.leaveProfile()
    };
    return (
        <Fragment>
            <div>Your account banned!!!!!!</div>
            <button onClick={() => leaveProfile()}>Go home</button>
        </Fragment>
    );
};
const mapDispatchToProps = dispatch => ({
    leaveProfile: () => dispatch(leaveProfile()),
});

export default connect(
    null,
    mapDispatchToProps
)(Ban)