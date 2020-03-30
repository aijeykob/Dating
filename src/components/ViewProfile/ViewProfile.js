import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import './viewProfile.scss';
import {
    getAlbumByUserId
} from '../../actions/index';
import moment from "moment";
import {Table} from "react-bootstrap";
import Album from "../Album/Album";

const ViewProfile = (props) => {
    return (
        <Fragment>
            <div
                id='viewProfile'
            >

                <div className="leftHalf ">
                    <img
                        src={`${props.selectedProfile.avatar}`}
                        className={(props.selectedProfile.gender === 'male') ? 'defaultMaleAvatar' : "defaultFemaleAvatar"}
                        alt=''/>
                    {
                        (
                            props.selectedProfile.hasOwnProperty("album")) ? <Album/> : null
                    }

                </div>
                <div className="rightHalf">
                    <div className='d-flex flex-column py-4'>
                        <span
                            className='strongtext'>{props.selectedProfile.username}, {moment().diff(props.selectedProfile.birthday, 'years')} years old </span>
                        <span
                            className='normtext'>Hi, I'm {props.selectedProfile.username}, I live in {props.selectedProfile.commune},
                            {(props.selectedProfile.children && props.selectedProfile.children.startsWith('yes')) ?
                                <span> I have children </span> : <span>I haven't children </span>}
                            and I'm looking for {props.selectedProfile.lookingFor}.
                </span>
                        <span className='normtext'> {props.selectedProfile.greeting}</span>

                        <span className='strongtext'> More about {props.selectedProfile.username}</span>

                    </div>
                    <Table bordered>
                        <tbody>
                        <tr className='oddTr'>
                            <td
                                className='tdtext'
                            >Height: {" "}
                                <span
                                    className='datatext'
                                >
                            {props.selectedProfile.height}

                        </span>
                            </td>
                            <td
                                className='tdtext'
                            >Weight: {" "}
                                <span
                                    className='datatext'
                                >
                            {props.selectedProfile.weight}

                        </span>
                            </td>

                        </tr>
                        <tr>
                            <td
                                className='tdtext'
                            >Education: {" "}
                                <span
                                    className='datatext'
                                >
                            {props.selectedProfile.education}

                        </span>
                            </td>
                            <td
                                className='tdtext'
                            >Children: {" "}
                                <span
                                    className='datatext'
                                >
                            {props.selectedProfile.children}

                        </span>
                            </td>
                        </tr>

                        <tr className='oddTr'>
                            <td
                                className='tdtext'
                            >Commune: {" "}
                                <span
                                    className='datatext'
                                >
                            {props.selectedProfile.commune}

                        </span>
                            </td>
                            <td
                                className='tdtext'
                            >Region: {" "}
                                <span
                                    className='datatext'
                                >
                            {props.selectedProfile.region}

                        </span>
                            </td>

                        </tr>

                        </tbody>
                    </Table>

                </div>
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
    profileUser: state.profileUser,
    selectedProfile: state.selectedProfile,

});


const mapDispatchToProps = dispatch => ({
    getAlbumByUserId: (id) => dispatch(getAlbumByUserId(id)),

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ViewProfile)