import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {
    getAlbumByUserId
} from '../../actions';
import './viewAlbum.scss';

const ViewAlbum = (props) => {

    return (
        <Fragment>
            <div
                id='viewAlbum'
            >
                <div className='d-flex flex-wrap'
                >
                    {
                        props.selectedProfile.album.map((el, i) => {
                            return (

                                <img src={`${el.url}`} key={el.url} className='smallImg' alt='noImg'/>
                            )
                        })
                    }
                </div>
            </div>
        </Fragment>
    );
};

const mapStateToProps = state => ({
    name: state.name,
    selectedProfile: state.selectedProfile
});


const mapDispatchToProps = dispatch => ({
    getAlbumByUserId: (id) => dispatch(getAlbumByUserId(id)),

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ViewAlbum)