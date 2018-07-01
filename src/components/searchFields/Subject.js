import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {FilterTypes} from './../../constants';
import SubjectsActions from "../../actions/SubjectsActions";
import SubjectsState from "../../records/SubjectsState";

class Subject extends React.PureComponent {
    static propTypes = {
        onChange: PropTypes.func.isRequired,
        value: PropTypes.object,
        subjects: PropTypes.instanceOf(SubjectsState),
        getSubjects: PropTypes.func.isRequired
    };

    static defaultProps = {
        value: null
    };

    componentDidMount () {
        const {subjects, getSubjects} = this.props;
        if (!subjects.loaded && !subjects.loading) {
            getSubjects();
        }
    }

    handleChange = (value) => {
        this.props.onChange({
            type: FilterTypes.SUBJECT,
            value: value.value
        });
    };

    render () {
        const {subjects} = this.props;
        const options = subjects.results.map(result => { return {
            label: result,
            value: result
        };}).toArray();

        return (<Select
            name="form-field-name"
            noResultsText="Δεν βρέθηκε..."
            placeholder="Επιλέξτε"
            value={this.props.value ? this.props.value.value : null}
            onChange={this.handleChange}
            clearable={false}
            isLoading={subjects.loading}
            options={options}
        />);
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSubjects: bindActionCreators(SubjectsActions.get, dispatch)
    };
};

const mapStateToProps = (state) => {
    return {
        subjects: state.subjects,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Subject);
