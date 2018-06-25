import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {FilterTypes} from './../../constants';
import CountriesActions from "../../actions/CountriesActions";
import CountriesState from "../../records/CountriesState";

class CountryOfPublication extends React.PureComponent {
    static propTypes = {
        onChange: PropTypes.func.isRequired,
        value: PropTypes.object,
        countries: PropTypes.instanceOf(CountriesState),
        getCountries: PropTypes.func.isRequired
    };

    static defaultProps = {
        value: null
    };

    componentDidMount () {
        const {countries, getCountries} = this.props;
        if (!countries.loaded && !countries.loading) {
            getCountries();
        }
    }

    handleChange = (value) => {
        this.props.onChange({
            type: FilterTypes.COUNTRY_OF_PUBLICATION,
            value: value.value
        });
    };

    render () {
        const {countries} = this.props;
        const options = countries.results.map(result => { return {
            label: result,
            value: result
        };}).toArray();

        return (<Select
            name="form-field-name"
            value={this.props.value ? this.props.value.value : null}
            onChange={this.handleChange}
            clearable={false}
            isLoading={countries.loading}
            options={options}
        />);
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCountries: bindActionCreators(CountriesActions.get, dispatch)
    };
};

const mapStateToProps = (state) => {
    return {
        countries: state.countries,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CountryOfPublication);
