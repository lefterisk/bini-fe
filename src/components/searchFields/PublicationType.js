import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

import {PublicationTypes, FilterTypes} from './../../constants';

class PublicationType extends React.PureComponent {
    static propTypes = {
        onChange: PropTypes.func.isRequired,
        value: PropTypes.object
    };

    static defaultProps = {
        value: null
    };

    handleChange = (value) => {
        this.props.onChange({
            type: FilterTypes.PUBLICATION_TYPE,
            value: value.value
        });
    };

    render () {
        return (<Select
            name="form-field-name"
            value={this.props.value ? this.props.value.value : null}
            onChange={this.handleChange}
            clearable={false}
            options={[
                { value: PublicationTypes.BOOK, label: PublicationTypes.BOOK },
                { value: PublicationTypes.BOOK_PART, label: PublicationTypes.BOOK_PART },
                { value: PublicationTypes.SCHOOL_MANUAL, label: PublicationTypes.SCHOOL_MANUAL },
                { value: PublicationTypes.UNI_BOOK, label: PublicationTypes.UNI_BOOK },
                { value: PublicationTypes.TWO_PAGE, label: PublicationTypes.TWO_PAGE },
                { value: PublicationTypes.ONE_PAGE, label: PublicationTypes.ONE_PAGE },
                { value: PublicationTypes.ARTICLE, label: PublicationTypes.ARTICLE },
                { value: PublicationTypes.MAP, label: PublicationTypes.MAP },
            ]}
        />);
    }
}

export default PublicationType;
