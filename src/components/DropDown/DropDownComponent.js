import React, {Fragment} from 'react';
import {Dropdown} from "react-bootstrap";
import {connect} from 'react-redux'
import {
    selectDropDown
} from '../../actions'

const DropDownComponent = (props) => {

    const selectItem = (el) => {
        props.selectDropDown(el, props.nameDrop, props.stateProperty)
    };

    return (
        <Fragment>
            <Dropdown>
                <Dropdown.Toggle
                    variant="light"
                    title={props.selected || " "}
                    id="dropdown-basic-button"
                    style={{width: '100%', border: '2px solid #ccc'}}
                >{props.selected || " "}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {
                        props.items.map(el => {
                            return (
                                <Dropdown.Item className="dropdown-item"
                                               onClick={() => selectItem(el)}
                                               key={el}
                                > {el} </Dropdown.Item>
                            )
                        })
                    }
                </Dropdown.Menu>

            </Dropdown>
        </Fragment>
    );
};


const mapStateToProps = state => ({
    name: state.name,
    password: state.password,
    profileUser: state.profileUser,
    registration: state.registration,

});


const mapDispatchToProps = dispatch => ({
    selectDropDown: (select, field, stateProperty) => dispatch(selectDropDown(select, field, stateProperty)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DropDownComponent)