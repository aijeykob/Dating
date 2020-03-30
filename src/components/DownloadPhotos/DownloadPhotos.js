import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {
    selectDropDown,
    setAvatarImg,
    setDeleteImg,
    setUploadImg,
    viewProfileImages,
    changeStatusDownloadImg
} from '../../actions';
import './DownloadPhotos.scss';
import {Button, Image} from "react-bootstrap";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Redirect} from "react-router-dom";

class DownloadPhotos extends React.Component {
    imageTypes = ["image/png", "image/jpg", "image/jpeg"];

    constructor(props) {
        super(props);
    }

    handleUploadImage = (ev) => {
        ev.preventDefault();
        const output = document.getElementById('output');
        output.src = '';
        if (this.uploadInput.files[0] && this.imageTypes.includes(this.uploadInput.files[0].type)) {
            const data = new FormData();
            data.append('file', this.uploadInput.files[0]);
            data.append('filename', Date.now().toString());
            this.props.setUploadImg(data);
            this.props.changeStatusDownloadImg(true);
            this.uploadInput.value = ''
        } else {
            toast("Please select picture")
        }

    };

    handleImageChange(e) {
        const output = document.getElementById('output');
        output.src = '/public/images/spinner.gif';
        if (e.target.files[0]) {
            if (
                this.imageTypes.includes(this.uploadInput.files[0].type)
            ) {
                const reader = new FileReader();
                reader.onload = function () {
                    const dataURL = reader.result;
                    output.src = dataURL;
                };
                reader.readAsDataURL(e.target.files[0]);
            } else {
                output.src = ''
            }
        } else {
            output.src = ''
        }
    };


    render() {

        return (
            <Fragment>
                <div id="edit"
                >
                    <form onSubmit={this.handleUploadImage}>
                        <div className="form-group d-flex ">
                            <label className='inputLabel' htmlFor="input__file">Выберите файл</label>
                            <input className="form-control input__file "
                                   onChange={(e) => this.handleImageChange(e)}
                                   ref={(ref) => {
                                       this.uploadInput = ref;
                                   }}
                                   id="input__file"
                                   type="file"
                            />
                        </div>
                        <Image id='output' variant="top" className='immg'/>
                        <Button type='submit' className="btn h-50 btn-success">Upload</Button>
                    </form>
                </div>
                <ToastContainer/>
                {
                    (this.props.statusDownloadImg) ? <Redirect to='edit-photos'/> : null
                }
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    name: state.name,
    password: state.password,
    registration: state.registration,
    toggleRegistrationForms: state.toggleRegistrationForms,
    statusRegistration: state.statusRegistration,
    profileImages: state.profileImages,
    statusDownloadImg: state.statusDownloadImg,
});


const mapDispatchToProps = dispatch => ({
    selectDropDown: (select, field, stateProperty) => dispatch(selectDropDown(select, field, stateProperty)),
    setDeleteImg: (data) => dispatch(setDeleteImg(data)),
    setAvatarImg: (data) => dispatch(setAvatarImg(data)),
    setUploadImg: (data) => dispatch(setUploadImg(data)),
    changeStatusDownloadImg: (status) => dispatch(changeStatusDownloadImg(status)),
    viewProfileImages: () => dispatch(viewProfileImages()),
});

const DownloadPhotosWithRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(DownloadPhotos);

export {DownloadPhotosWithRedux as DownloadPhotos}