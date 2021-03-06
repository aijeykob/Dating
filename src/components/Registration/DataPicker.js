import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {
    selectDropDown
} from '../../actions';
import {Form} from "react-bootstrap";

class DataPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {month: ' ', year: ' ', day: ' '};
    }

    monthChange = (event) => {
        this.setState({month: event.target.value});
        this.props.selectDropDown(event.target.value, 'month', 'registration')
    };
    yearChange = (event) => {
        this.setState({year: event.target.value});
        this.props.selectDropDown(event.target.value, 'year', 'registration')
    };
    dayChange = (event) => {
        this.setState({day: event.target.value});
        this.props.selectDropDown(event.target.value, 'day', 'registration')
    };

    getNumberForData() {
        if (this.state.month === '4' || this.state.month === '6' ||
            this.state.month === '9' || this.state.month === '11') {
            return 30;
        } else if (this.state.month === '1' || this.state.month === '3' ||
            this.state.month === '5' || this.state.month === '7' ||
            this.state.month === '8' || this.state.month === '10' || this.state.month === '12') {
            return 31;
        } else if (this.state.month === 'February') {
            if (Number.isInteger(this.state.year / 4)) {
                if (Number.isInteger(this.state.year / 100)) {
                    if (Number.isInteger(this.state.year / 400)) {
                        return 29

                    } else return 28

                } else return 29

            } else return 28

        }
        return 31;
    }

    render() {

        return (
            <Fragment>
                <Form>
                    <select
                        value={this.state.month}
                        onChange={this.monthChange}
                        style={{height: '30px'}}
                        required>
                        <option value=' '></option>
                        <option value='1'>January</option>
                        <option value='2'>February</option>
                        <option value='3'>March</option>
                        <option value='4'>April</option>
                        <option value='5'>May</option>
                        <option value='6'>June</option>
                        <option value='7'>July</option>
                        <option value='8'>August</option>
                        <option value='9'>September</option>
                        <option value='10'>October</option>
                        <option value='11'>November</option>
                        <option value='12'>December</option>
                    </select>
                    <select
                        value={this.state.year}
                        onChange={this.yearChange}
                        style={{height: '30px'}}
                        required
                    >
                        {
                            [...Array(83)].map((el, i) => {
                                if (i === 0) {
                                    return (<option key={i} value={' '}></option>)
                                } else {
                                    return (<option key={i} value={i + 1920}>{i + 1920}</option>)
                                }
                            })
                        }
                    </select>


                    <select value={this.state.day}
                            onChange={this.dayChange}
                            style={{height: '30px',width: '64px'}}
                            required
                    >
                        {
                            [...Array(this.getNumberForData())].map((el, i) => {

                                if (i === 0) {
                                    return (<option key={el} value={' '}></option>)
                                } else {
                                    return (<option key={el} value={i + 1}>{i + 1}</option>)
                                }
                            })
                        }
                    </select>
                </Form>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    name: state.name,
    password: state.password,
    registration: state.registration,
    toggleRegistrationForms: state.toggleRegistrationForms,
    statusRegistration: state.statusRegistration
});


const mapDispatchToProps = dispatch => ({
    selectDropDown: (select, field, stateProperty) => dispatch(selectDropDown(select, field, stateProperty)),
});

const DataPickerWithRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(DataPicker);

export {DataPickerWithRedux as DataPicker}