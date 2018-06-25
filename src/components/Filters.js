import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';

import {FilterTypes} from './../constants';
import Search from '../records/Search';
import Author from "./searchFields/Author";
import Language from "./searchFields/Language";
import CountryOfPublication from "./searchFields/CountryOfPublication";
import CityOfPublication from "./searchFields/CityOfPublication";
import PublicationType from "./searchFields/PublicationType";
import Publisher from "./searchFields/Publisher";
import Subject from "./searchFields/Subject";
import Title from "./searchFields/Title";
import YearOfPublication from "./searchFields/YearOfPublication";
import FilterTags from "./FilterTags";

class Filters extends React.PureComponent {
    static propTypes = {
        search: PropTypes.instanceOf(Search).isRequired,
        onSearch: PropTypes.func.isRequired
    };

    state = {
        currentFilterType: FilterTypes.AUTHOR,
        currentValue: null
    };

    onSearch = async () => {
        this.setState({
            currentValue: null
        });
        const {search} = this.props;
        this.props.onSearch(search.addFilter(this.state.currentValue));
    };

    handleChangeType = async ({value}) => {
        this.setState({
            currentValue: null,
            currentFilterType: value
        });
    };

    changeFieldValue = (value) => {
        this.setState({
            currentValue: value
        });
    };

    handleDeleteFilter = (type) => {
        const {search} = this.props;
        this.props.onSearch(search.removeFilter(type));
    };

    getFilterField () {
        const {currentFilterType, currentValue} = this.state;
        switch (currentFilterType) {
            case FilterTypes.AUTHOR:
                return <Author onChange={this.changeFieldValue} value={currentValue}/>;
            case FilterTypes.LANGUAGE:
                return <Language onChange={this.changeFieldValue} value={currentValue}/>;
            case FilterTypes.COUNTRY_OF_PUBLICATION:
                return <CountryOfPublication onChange={this.changeFieldValue} value={currentValue}/>;
            case FilterTypes.CITY_OF_PUBLICATION:
                return <CityOfPublication onChange={this.changeFieldValue} value={currentValue}/>;
            case FilterTypes.PUBLICATION_TYPE:
                return <PublicationType onChange={this.changeFieldValue} value={currentValue}/>;
            case FilterTypes.PUBLISHER:
                return <Publisher onChange={this.changeFieldValue} value={currentValue}/>;
            case FilterTypes.SUBJECT:
                return <Subject onChange={this.changeFieldValue} value={currentValue}/>;
            case FilterTypes.TITLE:
                return <Title onChange={this.changeFieldValue} value={currentValue}/>;
            case FilterTypes.YEAR_OF_PUBLICATION:
                return <YearOfPublication onChange={this.changeFieldValue} value={currentValue}/>;
        }
    }

    render () {
        const {currentFilterType} = this.state;
        return (
            <React.Fragment>
                <Row>
                    <Col sm={6}>{this.getFilterField()}</Col>
                    <Col sm={4}>
                        <Select
                            name="form-field-name"
                            value={currentFilterType}
                            onChange={this.handleChangeType}
                            clearable={false}
                            options={[
                                { value: FilterTypes.AUTHOR, label: 'Συγγραφέας' },
                                { value: FilterTypes.TITLE, label: 'Τίτλος' },
                                { value: FilterTypes.COUNTRY_OF_PUBLICATION, label: 'Χώρα έκδωσης' },
                                { value: FilterTypes.CITY_OF_PUBLICATION, label: 'Πόλη έκδωσης' },
                                { value: FilterTypes.YEAR_OF_PUBLICATION, label: 'Έτος έκδωσης' },
                                { value: FilterTypes.PUBLISHER, label: 'Εκδότης/Τυπογράφος' },
                                { value: FilterTypes.PUBLICATION_TYPE, label: 'Είδος δημοσιεύματος' },
                                { value: FilterTypes.LANGUAGE, label: 'Γλώσσα' },
                                { value: FilterTypes.SUBJECT, label: 'θέμα' },
                            ]}
                        />
                    </Col>
                    <Col sm={2}>
                        <Button bsStyle="primary"
                                className="btn-block"
                                onClick={this.onSearch}>
                            Αναζήτηση
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <FilterTags onDelete={this.handleDeleteFilter} search={this.props.search}/>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default Filters;
