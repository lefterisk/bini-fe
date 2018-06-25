import React from 'react';
import PropTypes from 'prop-types';
import FormControl from 'react-bootstrap/lib/FormControl';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import {FilterTypes} from './../../constants';

class YearOfPublication extends React.PureComponent {
    static propTypes = {
        onChange: PropTypes.func.isRequired,
        value: PropTypes.object
    };

    static defaultProps = {
        value: null
    };

    handleChange = (type) => (e) => {
        const value = this.props.value ? this.props.value.value : '';
        const parts = value.split('-');
        let valueString = '';
        if (type === 'from') {
            valueString = `${e.target.value}-${parts[1] ? parts[1] : ''}`;
        } else {
            valueString = `${parts[0] ? parts[0] : ''}-${e.target.value}`;
        }

        this.props.onChange({
            type: FilterTypes.YEAR_OF_PUBLICATION,
            value: valueString
        });
    };

    getFromValue () {
        const value = this.props.value ? this.props.value.value : '';
        const parts = value.split('-');
        return parts[0];
    }

    getToValue () {
        const value = this.props.value ? this.props.value.value : '';
        const parts = value.split('-');
        return parts[1] ? parts[1] : '';
    }

    render () {
        return (
            <Row>
                <Col xs={6}>
                    <FormControl
                        type="number"
                        name="from"
                        min="0"
                        max="2000"
                        size="4"
                        value={this.getFromValue()}
                        placeholder="Δημοσιεύτηκε μετά από"
                        onChange={this.handleChange('from')}
                    />
                </Col>
                <Col xs={6}>
                    <FormControl
                        type="number"
                        name="to"
                        min="0"
                        max="2000"
                        size="4"
                        value={this.getToValue()}
                        placeholder="Δημοσιεύτηκε πριν από"
                        onChange={this.handleChange('to')}
                    />
                </Col>
            </Row>
        );
    }
}

export default YearOfPublication;
