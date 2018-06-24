import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import {Helmet} from 'react-helmet';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import SearchState from '../../records/SearchState';
import Search from '../../records/Search';

import SearchActions from "../../actions/SearchActions";
import Filters from "../Filters";

class Home extends React.PureComponent {
    static propTypes = {
        currentSearch: PropTypes.instanceOf(SearchState).isRequired,
        search: PropTypes.func.isRequired
    };

    componentDidMount () {
        const query = decodeURI(this.props.location.search.replace('?', ''));
        const currentQuery = decodeURI(this.props.currentSearch.search.toQuery());
        if (query !== currentQuery) {
            this.props.search(Search.fromQuery(query));
        }
    }

    componentWillReceiveProps (newProps) {
        const query = decodeURI(newProps.location.search.replace('?', ''));
        const newQuery = decodeURI(newProps.currentSearch.search.toQuery());
        if (query !== newQuery) {
            this.props.search(Search.fromQuery(query));
        }
    }

    onSearch = async (search) => {
        this.props.history.push({
            pathname: '/',
            search: search.toQuery()
        });
    };

    render () {
        const {currentSearch} = this.props;
        return (
            <React.Fragment>
                <Helmet>
                    <title>Anazitisi</title>
                    <meta name="description" content="Anazitisi" />
                </Helmet>
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <Filters search={currentSearch.search} onSearch={this.onSearch}/>
                        </Col>
                    </Row>
                </Grid>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        search: bindActionCreators(SearchActions.search, dispatch)
    };
};

const mapStateToProps = (state) => {
    return {
        currentSearch: state.search,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

