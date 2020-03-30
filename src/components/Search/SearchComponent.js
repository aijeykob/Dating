import React, {Fragment, useState} from 'react';
import {connect} from 'react-redux';
import './searchComponent.scss';
import {
    changeSearchInAge,
    changeSearchInHeight,
    changeSearchInWeight,
    selectDropDown,
    setFilterToAll,
    submitSearch,
    submitSearchAll,
    viewProfile,
    writingSearchText,
} from '../../actions';
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import DropDownComponent from "../DropDown/DropDownComponent";
import {Form} from "react-bootstrap";
import FilteredComponent from "./FilteredComponent";


const SearchComponent = (props) => {

    const valuetext = (value) => {
        return `${value}°C`;
    };


    const [valueAge, setValueAge] = useState([25, 40]);
    const [valueWeight, setValueWeight] = useState([40, 80]);
    const [valueHeight, setValueHeight] = useState([160, 180]);
    const handleChangeAge = (event, newValue) => {
        props.changeSearchInAge(newValue);
        setValueAge(newValue);
    };
    const handleChangeWeight = (event, newValue) => {
        props.changeSearchInWeight(newValue);
        setValueWeight(newValue);
    };
    const handleChangeHeight = (event, newValue) => {
        props.changeSearchInHeight(newValue);
        setValueHeight(newValue);
    };

    const onChangeInput = (e) => {
        props.writingSearchText(e.target.value, e.target.name)

    };
    const onSubmit = (e) => {
        e.preventDefault();
        const d = props.searchParams;
        if (e.target.name === 'all') {
            props.submitSearchAll(d)
        } else props.submitSearch(d)
    };
    return (
        <Fragment>{
            (!props.toggleSearch) ?
                <div id='search'>
                    <div className='slider'>
                        <Typography id="range-age" gutterBottom>
                            <span className="ddLabel"> AGE RANGE</span>
                        </Typography>
                        <Slider
                            value={valueAge}
                            min={18}
                            max={99}
                            onChange={handleChangeAge}
                            valueLabelDisplay="auto"
                            aria-labelledby="range-age"
                            getAriaValueText={valuetext}
                        />
                    </div>
                    <div className="rowWrap ">
                        <div className="colWrap ">
                            <span className="ddLabelSearch">Commune</span>
                            <DropDownComponent nameDrop={'commune'} stateProperty={'searchParams'}
                                               items={['', 'Alto Del Carmen', 'Caldera',
                                                   'Chanaral', 'Copiapo', 'Diego De Almagro', 'Freirina', 'Huasco', 'Tierra Lmarilla', 'Vallenar',]}
                                               selected={props.searchParams.commune}/>
                        </div>
                        <div className="colWrap ">
                            <span className="ddLabelSearch">Region</span>
                            <DropDownComponent nameDrop={'region'} stateProperty={'searchParams'} items={[
                                '', 'I Region', 'II Region', 'III Region', 'IV Region',
                                'IX Region', 'R.M', 'V Region', 'VI Region',
                                'VII Region', 'VIII Region', 'X Region', 'XI Region',
                                'XII Region', 'XIV Region', 'XV Region',]} selected={props.searchParams.region}/>
                        </div>
                    </div>

                    <div className=" rowWrap ">
                        <div className="colWrap">
                            <span className="ddLabelSearch">EDUCATION</span>
                            <DropDownComponent nameDrop={'education'} stateProperty={'searchParams'}
                                               items={['', 'basic', 'half', 'technique', 'university', 'post grade', 'other']}
                                               selected={props.searchParams.education}/>
                        </div>
                        <div className="colWrap ">
                            <span className="ddLabelSearch">INTERESTED IN</span>
                            <DropDownComponent nameDrop={'lookingFor'} stateProperty={'searchParams'}
                                               items={['', 'partner', 'friends', 'chat']}
                                               selected={props.searchParams.lookingFor}/>
                        </div>
                    </div>

                    <div className='slider'>
                        <Typography id="range-weight" gutterBottom>
                            <span className="ddLabel"> WEIGHT</span>
                        </Typography>
                        <Slider
                            value={valueWeight}
                            min={40}
                            max={200}
                            onChange={handleChangeWeight}
                            valueLabelDisplay="auto"
                            aria-labelledby="range-weight"
                            getAriaValueText={valuetext}
                        />
                    </div>
                    <div className='slider'>
                        <Typography id="range-height" gutterBottom>
                            <span className="ddLabel">   HEIGHT</span>
                        </Typography>
                        <Slider
                            value={valueHeight}
                            min={140}
                            max={220}
                            onChange={handleChangeHeight}
                            valueLabelDisplay="auto"
                            aria-labelledby="range-height"
                            getAriaValueText={valuetext}
                        />
                    </div>
                    <div className="d-flex flex-column ">
                        <span className='inputLabel pb-2'>SEARCH BY NAME</span>
                        <input type='text'
                               name='username'
                               className='inputText'
                               onChange={(e) => onChangeInput(e)}
                               placeholder='User'
                               value={props.searchParams.username}/>
                    </div>
                    <Form onSubmit={onSubmit}>
                        <div className='d-flex pt-4 w-100'>
                            <button className='submitButton' type="submit">Search</button>


                        </div>
                        {
                            (props.profileUser.role === 'admin' || props.profileUser.role === 'moder') ?
                                <div className='d-flex pt-4 w-100'>
                                    <button name='all'
                                            className="submitButton"
                                            onClick={(e) => onSubmit(e)}> findAll
                                    </button>
                                </div>
                                : null
                        }

                    </Form>
                </div>
                :
                <FilteredComponent/>
        }
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
    searchParams: state.searchParams,
    toggleSearch: state.toggleSearch
});


const mapDispatchToProps = dispatch => ({
    selectDropDown: (select, field, stateProperty) => dispatch(selectDropDown(select, field, stateProperty)),
    changeSearchInAge: (data) => dispatch(changeSearchInAge(data)),
    submitSearch: (data) => dispatch(submitSearch(data)),
    changeSearchInWeight: (data) => dispatch(changeSearchInWeight(data)),
    changeSearchInHeight: (data) => dispatch(changeSearchInHeight(data)),
    writingSearchText: (text, field) => dispatch(writingSearchText(text, field)),
    viewProfile: () => dispatch(viewProfile()),
    setFilterToAll: () => dispatch(setFilterToAll()),
    submitSearchAll: (data) => dispatch(submitSearchAll(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchComponent)