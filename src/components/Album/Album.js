import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {getAlbumByUserId} from '../../actions';
import './album.scss';
import {NavLink} from "react-router-dom";

const Album = (props) => {

    const limitImages = 6;
    return (
        <Fragment>
            <div
                id='album'
            >
                <div className='d-flex flex-wrap'
                >
                    {
                        props.selectedProfile.album.map((el, i) => {
                            if (i < limitImages)
                                return (
                                    <img src={`${el.url}`} key={el.url} className='smallImg' alt='noImg'/>
                                )
                        })
                    }
                </div>
                {
                    (props.selectedProfile.album.length > limitImages) ?
                        <NavLink to="/view-album">See All</NavLink> : null
                }
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
)(Album)