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
import Filters from '../Filters';
import BookList from '../BookList';
import Pagination from '../Pagination';
import Header from '../Header';
import NoResults from '../NoResults';
import Info from '../Info';

class Home extends React.PureComponent {
    static propTypes = {
        currentSearch: PropTypes.instanceOf(SearchState).isRequired,
        search: PropTypes.func.isRequired
    };

    componentDidMount () {
        const query = decodeURI(this.props.location.search.replace('?', ''));
        this.props.search(Search.fromQuery(query));
    }

    componentWillReceiveProps (newProps) {
        const locationSearch = Search.fromQuery(decodeURI(newProps.location.search.replace('?', '')));
        if (newProps.currentSearch.search.toQuery() !== locationSearch.toQuery()) {
            this.props.search(locationSearch);
        }
    }

    onSearch = async (search) => {
        this.props.history.push({
            pathname: '/',
            search: search.toQuery()
        });
    };

    onLimitChange = (limit) => {
        const search = this.props.currentSearch.search;
        this.props.history.push({
            pathname: '/',
            search: search.set('limit', Number(limit)).toQuery()
        });
    };

    onPageChange = (page) => {
        const search = this.props.currentSearch.search;
        this.props.history.push({
            pathname: '/',
            search: search.set('page', Number(page)).toQuery()
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
                            <Header/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <Filters search={currentSearch.search} onSearch={this.onSearch}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <Pagination search={currentSearch.search}
                                        count={currentSearch.itemsCount}
                                        onLimitChange={this.onLimitChange}
                                        onPageChange={this.onPageChange}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            { currentSearch.itemsCount > 0 && <BookList books={currentSearch.results} searchUrl={currentSearch.search.toQuery()}/> }
                            { currentSearch.itemsCount === 0 && <NoResults/> }
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <Pagination currentPage={currentSearch.search.page}
                                        limit={currentSearch.search.limit}
                                        count={currentSearch.itemsCount}
                                        onLimitChange={this.onLimitChange}
                                        onPageChange={this.onPageChange}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}><Info /></Col>
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

