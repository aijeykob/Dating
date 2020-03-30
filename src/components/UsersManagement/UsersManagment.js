import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {} from '../../actions/index';

const UsersManagement = (props) => {
    return (
        <Fragment>
            <p>Role: {props.el.role}</p>

        </Fragment>
    );
};

const mapStateToProps = state => ({
    name: state.name,
    filtered: state.filtered
});


const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersManagement)