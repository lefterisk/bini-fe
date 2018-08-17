import React from 'react';
import PropTypes from 'prop-types';
import FormControl from 'react-bootstrap/lib/FormControl';

import {FilterTypes} from './../../constants';

class Publisher extends React.PureComponent {
    static propTypes = {
        onChange: PropTypes.func.isRequired,
        value: PropTypes.object
    };

    static defaultProps = {
        value: null
    };

    handleChange = (e) => {
        this.props.onChange({
            type: FilterTypes.PUBLISHER,
            value: e.target.value
        });
    };

    render () {
        return (<FormControl
            type="text"
            value={this.props.value ? this.props.value.value : ''}
            placeholder="Εκδότης/Τυπογράφος"
            onChange={this.handleChange}
        />);
    }
}

export default Publisher;
