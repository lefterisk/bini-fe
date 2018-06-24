import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

import {Languages, FilterTypes} from './../../constants';

class Language extends React.PureComponent {
    static propTypes = {
        onChange: PropTypes.func.isRequired,
        value: PropTypes.object
    };

    static defaultProps = {
        value: null
    };

    handleChange = (value) => {
        this.props.onChange({
            type: FilterTypes.LANGUAGE,
            value: value.value
        });
    };

    render () {
        return <Select
                name="form-field-name"
                value={this.props.value ? this.props.value.value : null}
                onChange={this.handleChange}
                clearable={false}
                options={[
                    { value: Languages.MODERN_GREEK, label: Languages.MODERN_GREEK },
                    { value: Languages.ANCIENT_GREEK, label: Languages.ANCIENT_GREEK },
                    { value: Languages.FRENCH, label: Languages.FRENCH },
                    { value: Languages.ITALIAN, label: Languages.ITALIAN },
                    { value: Languages.RUSSIAN, label: Languages.RUSSIAN },
                    { value: Languages.GERMAN, label: Languages.GERMAN },
                    { value: Languages.LATIN, label: Languages.LATIN },
                    { value: Languages.SERBIAN, label: Languages.SERBIAN },
                    { value: Languages.TURKISH, label: Languages.TURKISH },
                ]}
            />;
    }
}

export default Language;