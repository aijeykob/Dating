import React from 'react';
import {connect} from 'react-redux';
import {
    selectDropDown,
    setAvatarImg,
    setDeleteImg,
    setUploadImg,
    viewProfileImages,
    changeStatusDownloadImg
} from '../../actions';
import './editPhotos.scss';

class EditPhotos extends React.Component {


    constructor(props) {
        super(props);
        this.props.viewProfileImages();
        this.props.changeStatusDownloadImg(false)
    }

    deleteImage(e) {
        this.props.setDeleteImg(e.target.id)
    }

    setAvatar(e) {
        this.props.setAvatarImg(e.target.id)
    }

    render() {

        return (
            <div className="edit">
                {
                    this.props.profileImages.items.map(el => {
                        return (<div key={el.url} className="bl">
                                <div className="image">
                                    <img src={el.url} alt='noImg' height='200px'/>
                                </div>
                                <div className='buttonGroup'>
                                    <button className='editProfileButton' id={el.url}
                                            onClick={(e) => this.deleteImage(e)}>delete
                                    </button>
                                    <button className='editProfileButton' id={el.url}
                                            onClick={(e) => this.setAvatar(e)}>avatar
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    name: state.name,
    password: state.password,
    registration: state.registration,
    toggleRegistrationForms: state.toggleRegistrationForms,
    statusRegistration: state.statusRegistration,
    profileImages: state.profileImages
});


const mapDispatchToProps = dispatch => ({
    selectDropDown: (select, field, stateProperty) => dispatch(selectDropDown(select, field, stateProperty)),
    setDeleteImg: (data) => dispatch(setDeleteImg(data)),
    setAvatarImg: (data) => dispatch(setAvatarImg(data)),
    setUploadImg: (data) => dispatch(setUploadImg(data)),
    changeStatusDownloadImg: (status) => dispatch(changeStatusDownloadImg(status)),
    viewProfileImages: () => dispatch(viewProfileImages()),
});

const EditPhotosWithRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditPhotos);

export {EditPhotosWithRedux as EditPhotos}