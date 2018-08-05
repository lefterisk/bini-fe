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
import UiState from '../../records/UiState';

import SearchActions from "../../actions/SearchActions";
import Filters from '../Filters';
import BookList from '../BookList';
import Pagination from '../Pagination';
import Header from '../Header';
import NoResults from '../NoResults';
import Info from '../Info';
import Footer from '../Footer';

class Home extends React.PureComponent {
    static propTypes = {
        ui: PropTypes.instanceOf(UiState).isRequired,
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

    handleBookClick = (linkObj) => {
        this.props.history.push(linkObj);
    };

    render () {
        const {currentSearch, ui} = this.props;
        return (
            <React.Fragment>
                {ui.isLoading() && <div className="page-loader"/>}
                <Helmet>
                    <title>Αναζήτηση</title>
                    <meta name="description" content="Anazitisi"/>
                </Helmet>
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <Header/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <Filters search={currentSearch.search} onSearch={this.onSearch} loading={ui.isLoading()}/>
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
                             {(currentSearch.loading && currentSearch.itemsCount === 0) &&
                             <div className="text-center">
                                 <span className="loader-primary-lg"/>
                             </div>}
                             {currentSearch.itemsCount > 0 && <BookList books={currentSearch.results}
                                                                        searchUrl={currentSearch.search.toQuery()}
                                                                        handleClick={this.handleBookClick}/>}
                             {(currentSearch.itemsCount === 0 && !currentSearch.loading) && <NoResults/>}
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
                        <Col xs={12}><Info/></Col>
                    </Row>
                    <Row>
                        <Col xs={12}><Footer/></Col>
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
        ui: state.ui,
        currentSearch: state.search,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

