import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {
    selectDropDown,
    viewProfile,
    editProfile,
    writingEditProfileText,
} from '../../actions';
import DropDownComponent from "../DropDown/DropDownComponent";
import {Button, Form} from "react-bootstrap";
import './editProfile.scss';
import _ from 'lodash';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import {green} from '@material-ui/core/colors';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles(theme => ({

    wrapper: {
        margin: theme.spacing(1),
        position: 'relative',
    },
    buttonSuccess: {
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[700],
        },
    },
    fabProgress: {
        color: green[500],
        position: 'absolute',
        top: -6,
        left: -6,
        zIndex: 1,
    },
    buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
}));
const minHeight = 140;
const maxHeight = 221;
const minWeight = 40;
const maxWeight = 201;
const weightItems = _.range(minWeight, maxWeight);
const heightItems = _.range(minHeight, maxHeight);

const EditProfile = (props) => {

    const classes = useStyles();
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const timer = React.useRef();

    const buttonClassname = clsx({
        [classes.buttonSuccess]: success,
    });

    React.useEffect(() => {
        return () => {
            clearTimeout(timer.current);
        };
    }, []);

    const handleButtonClick = () => {
        if (!loading) {
            setSuccess(false);
            setLoading(true);
            timer.current = setTimeout(() => {
                setSuccess(true);
                setLoading(false);
            }, 2000);
        }
    };

    const editProfile = (e) => {
        e.preventDefault();
        const d = props.selectedProfile;
        props.editProfile(d)
    };
    const onChangeInput = (e) => {

        props.writingEditProfileText(e.target.value, e.target.name)
    };

    return (
        <Fragment>

            <div
                className='editProfile'
            >
                <div className="leftMainCol ">
                    <div className='labelBorder'>
                        <div className='blueHead'>PHOTOS</div>
                        <div className='d-flex flex-row justify-content-around labelMiddle'>
                            <button className='photoButton'>Change profile photo</button>
                            <button className='photoButton'>Edit my photo album</button>
                        </div>
                    </div>

                    <div className='labelBorder mt-3'>
                        <div className='blueHead '>PERSONAL INFORMATION</div>
                        <div className='labelMiddle'>
                            <div className="d-flex flex-row justify-content-around">
                                <div className="d-flex flex-column flex-grow-1 m-1 w-50">
                                    <span className="ddLabel">REGION</span>
                                    <DropDownComponent nameDrop={'region'} stateProperty={'selectedProfile'}
                                                       items={[
                                                           'I Region', 'II Region', 'III Region', 'IV Region',
                                                           'IX Region', 'R.M', 'V Region', 'VI Region',
                                                           'VII Region', 'VIII Region', 'X Region', 'XI Region',
                                                           'XII Region', 'XIV Region', 'XV Region',]}
                                                       selected={props.selectedProfile.region}/>
                                </div>

                                <div className="d-flex flex-column flex-grow-1 m-1 w-50">
                                    <span className="ddLabel">COMMUNE</span>
                                    <DropDownComponent nameDrop={'commune'} stateProperty={'selectedProfile'}
                                                       items={['Alto Del Carmen', 'Caldera',
                                                           'Chanaral', 'Copiapo', 'Diego De Almagro', 'Freirina', 'Huasco', 'Tierra Lmarilla', 'Vallenar',]}
                                                       selected={props.selectedProfile.commune}/>
                                </div>
                            </div>

                            <div className="d-flex flex-column ">
                                <span className="ddLabel">WHAT ARE YOU LOOKING FOR</span>
                                <DropDownComponent nameDrop={'lookingFor'} stateProperty={'selectedProfile'}
                                                   items={['partner', 'friends', 'chat']}
                                                   selected={props.selectedProfile.lookingFor}/>
                            </div>
                            <div className="d-flex flex-column ">
                                <span className="ddLabel">PROFILE TITLE:</span>
                                <input
                                    type='text'
                                    name='greeting'
                                    value={props.selectedProfile.greeting}
                                    className='inputText'
                                    maxLength='30'
                                    onChange={(e) => onChangeInput(e)}
                                />
                            </div>
                        </div>
                    </div>
                    {
                        (props.profileUser.role === 'admin' || props.profileUser.role === 'moder') ?
                            <Fragment>
                                <div className='labelBorder mt-3'>
                                    <div className='blueHead '>Statuses</div>
                                    <div className='labelMiddle'>
                                        <div className="d-flex flex-row  justify-content-around">
                                            <div className="d-flex flex-column flex-grow-1 m-1">
                                                <span className="ddLabel">Status ban</span>
                                                <DropDownComponent nameDrop={'statusBan'}
                                                                   stateProperty={'selectedProfile'}
                                                                   items={['true', 'false']}
                                                                   selected={props.selectedProfile.statusBan}/>
                                            </div>
                                            {
                                                (props.profileUser.role === 'admin') ?
                                                    <div className="d-flex flex-column flex-grow-1 m-1 ">
                                                        <span className="ddLabel">Status role</span>
                                                        <DropDownComponent nameDrop={'role'}
                                                                           stateProperty={'selectedProfile'}
                                                                           items={['user', 'moder']}
                                                                           selected={props.selectedProfile.role}/>
                                                    </div>
                                                    : null
                                            }
                                        </div>
                                    </div>
                                </div>
                            </Fragment>
                            : null
                    }
                </div>
                <div className=" rightMainCol ">
                    <div className='labelBorder'>
                        <div className='blueHead'>APPEARANCE</div>
                        <div className='labelMiddle'>

                            <div className="d-flex flex-row  justify-content-around ">
                                <div className="d-flex flex-column  flex-grow-1 m-1 w-50">
                                    <span className="ddLabel">HEIGHT</span>
                                    <DropDownComponent nameDrop={'height'} stateProperty={'selectedProfile'}
                                                       items={heightItems}
                                                       selected={props.selectedProfile.height}/>
                                </div>
                                <div className="d-flex flex-column flex-grow-1  m-1 w-50">
                                    <span className="ddLabel">WEIGHT</span>
                                    <DropDownComponent nameDrop={'weight'} stateProperty={'selectedProfile'}
                                                       items={weightItems}
                                                       selected={props.selectedProfile.weight}/>
                                </div>
                            </div>
                            <div className="d-flex flex-column ">
                                <span className="ddLabel">EDUCATION</span>
                                <DropDownComponent nameDrop={'education'} stateProperty={'selectedProfile'}
                                                   items={['basic', 'half', 'technique', 'university', 'post grade', 'other']}
                                                   selected={props.selectedProfile.education}/>
                            </div>
                        </div>

                    </div>
                    <Form onSubmit={editProfile}>
                        <div className='w-100 d-flex justify-content-center'>
                            <div className='w-50'>
                                <Button className='saveButton' variant='success' type="submit">Save</Button>
                            </div>
                            <div className='w-25'>
                                <div className={classes.wrapper}>
                                    <Fab
                                        aria-label="save"
                                        color="primary"
                                        className={buttonClassname}
                                        size={'small'}
                                        onClick={handleButtonClick}
                                    >

                                        {props.statusUpdateUser ? <CheckIcon/> : <SaveIcon />}
                                    </Fab>
                                    {loading && <CircularProgress size={50} className={classes.fabProgress}/>}
                                </div>
                            </div>
                        </div>
                    </Form>
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
    statusUpdateUser: state.statusUpdateUser,
});


const mapDispatchToProps = dispatch => ({
    selectDropDown: (select, field, stateProperty) => dispatch(selectDropDown(select, field, stateProperty)),
    viewProfile: () => dispatch(viewProfile()),
    editProfile: (data) => dispatch(editProfile(data)),
    writingEditProfileText: (text, field) => dispatch(writingEditProfileText(text, field)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditProfile)