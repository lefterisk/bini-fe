import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {FilterTypes} from './../../constants';
import CitiesActions from "../../actions/CitiesActions";
import CitiesState from "../../records/CitiesState";

class CityOfPublication extends React.PureComponent {
    static propTypes = {
        onChange: PropTypes.func.isRequired,
        value: PropTypes.object,
        cities: PropTypes.instanceOf(CitiesState),
        getCities: PropTypes.func.isRequired
    };

    static defaultProps = {
        value: null
    };

    componentDidMount () {
        const {cities, getCities} = this.props;
        if (!cities.loaded && !cities.loading) {
            getCities();
        }
    }

    handleChange = (value) => {
        this.props.onChange({
            type: FilterTypes.CITY_OF_PUBLICATION,
            value: value.value
        });
    };

    render () {
        const {cities} = this.props;
        const options = cities.results.map(result => { return {
            label: result,
            value: result
        };}).toArray();

        return (<Select
            noResultsText="Δεν βρέθηκε..."
            placeholder="Επιλέξτε"
            name="form-field-name"
            value={this.props.value ? this.props.value.value : null}
            onChange={this.handleChange}
            clearable={false}
            isLoading={cities.loading}
            options={options}
        />);
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCities: bindActionCreators(CitiesActions.get, dispatch)
    };
};

const mapStateToProps = (state) => {
    return {
        cities: state.cities,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CityOfPublication);
