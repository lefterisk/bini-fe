import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

import {ChronologicalClassifications, FilterTypes} from './../../constants';

class ChronologicalClassification extends React.PureComponent {
    static propTypes = {
        onChange: PropTypes.func.isRequired,
        value: PropTypes.object
    };

    static defaultProps = {
        value: null
    };

    handleChange = (value) => {
        this.props.onChange({
            type: FilterTypes.CHRONOLOGICAL_CLASSIFICATION,
            value: value.value
        });
    };

    render() {
        return (<Select
            name="form-field-name"
            noResultsText="Δεν βρέθηκε..."
            placeholder="Επιλέξτε"
            value={this.props.value ? this.props.value.value : null}
            onChange={this.handleChange}
            clearable={false}
            options={ChronologicalClassifications.map(string => {
                return {
                    value: string,
                    label: string === 'Α-Μ-Ν' ? 'Από την αρχαιότητα ως τους νεότερους χρόνους' : string
                };
            })}
        />);
    }
}

export default ChronologicalClassification;
