import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import './filteredComponent.scss';
import {getAlbumByUserId, selectDropDown, changeFavorite, setSelectedProfile, changeFavoriteDb} from '../../actions';
import moment from "moment";
import {NavLink} from "react-router-dom";
import PaginationSearchProfiles from "./PaginationSearchProfiles";

const FilteredComponent = (props) => {


    const selectProfile = (e) => {
        const userForView = props.filtered.find(el => +el.id === +e.target.id);
        props.getAlbumByUserId(e.target.id);
        props.setSelectedProfile(userForView)
    };
    const changeFavorite = (e) => {
        let filteredFavorite = props.profileUser.favorites;
        let data = {action: e.target.dataset.name, name: e.target.id};
        props.changeFavoriteDb(data);
        if (e.target.dataset.name === 'set') {
            filteredFavorite.push(e.target.id);
            props.changeFavorite(filteredFavorite)
        } else if (e.target.dataset.name === 'unset') {
            filteredFavorite = filteredFavorite.filter(item => item !== e.target.id);
            props.changeFavorite(filteredFavorite)
        }
    };
    return (
        <Fragment>
            <ul className='cards'
            >
                {
                    props.filtered.map(el => {
                        return (
                            <li className="cards__item">
                                <div
                                    key={el.id}
                                    className='card'
                                >
                                    <NavLink to="/view-profile">
                                        <div className="card__image"
                                             style={{
                                                 backgroundImage: (!!el.avatar) ? `url(${el.avatar})`
                                                     : (el.gender === 'male') ? `url(/public/images/defaultMan.jpg)`
                                                         : `url(/public/images/defaultWoman.jpg)`
                                             }}
                                        >
                                        </div>
                                    </NavLink>
                                    <div className="card-img-overlay">
                                        <div>
                                            {el.username}
                                        </div>
                                        <div>
                                            {moment().diff(el.birthday, 'years')} years
                                        </div>
                                        {
                                            (props.profileUser.favorites.includes(el.username)) ?
                                                <i className="material-icons favorite"
                                                   title='Remove favorite'
                                                   id={el.username}
                                                   data-name='unset'
                                                   onClick={(e) => changeFavorite(e)}
                                                >
                                                    star
                                                </i>
                                                :

                                                <i className="material-icons favorite"
                                                   title='Add favorite'
                                                   id={el.username}
                                                   data-name='set'
                                                   onClick={(e) => changeFavorite(e)}
                                                >
                                                    star_border
                                                </i>
                                        }
                                    </div>
                                    <div className="card__content">
                                        {
                                            (props.profileUser.role === 'admin' || props.profileUser.role === 'moder') ?
                                                <div key={el.id}>
                                                    {
                                                        (el.role === 'admin' && el.username !== props.profileUser.username) ?
                                                            <button
                                                                className="editButton"
                                                                disabled>Edit</button>
                                                            :
                                                            <NavLink to="/edit-profile">
                                                                <button
                                                                    id={el.id}
                                                                    className="editButton"
                                                                    onClick={(e) => selectProfile(e)}
                                                                >Edit
                                                                </button>
                                                            </NavLink>
                                                    }

                                                    <p>Role: {el.role}</p>
                                                    <p>Status ban: {el.statusBan}</p>
                                                </div>
                                                : null
                                        }
                                        <p className="card-text"> Looking for {el.lookingFor}</p>
                                        <p className="card-text">{el.commune}</p>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }

            </ul>
            <PaginationSearchProfiles/>
        </Fragment>
    );
};

const mapStateToProps = state => ({
    name: state.name,
    filtered: state.filtered,
    selectedProfile: state.selectedProfile,
    profileUser: state.profileUser
});


const mapDispatchToProps = dispatch => ({
    selectDropDown: (select, field, stateProperty) => dispatch(selectDropDown(select, field, stateProperty)),
    setSelectedProfile: (data) => dispatch(setSelectedProfile(data)),
    changeFavoriteDb: (data) => dispatch(changeFavoriteDb(data)),
    getAlbumByUserId: (id) => dispatch(getAlbumByUserId(id)),
    changeFavorite: (filteredFavorite) => dispatch(changeFavorite(filteredFavorite)),

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilteredComponent)