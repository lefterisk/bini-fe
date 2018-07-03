import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import {Helmet} from 'react-helmet';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import {bindActionCreators} from 'redux';

import BookActions from "../../actions/BookActions";
import BookState from "../../records/BookState";

import Header from '../Header';

class Book extends React.PureComponent {
    static propTypes = {
        bookState: PropTypes.instanceOf(BookState).isRequired,
        getBook: PropTypes.func.isRequired
    };

    componentDidMount() {
        const {location, getBook} = this.props;
        const parts = location.pathname.split('--');

        if (!parts[1]) {
            this.props.history.push({
                pathname: '/',
                search: location.state && location.state.referer ? location.state.refere : null
            });
            return;
        }

        getBook(parts[1]);
    }

    render() {
        const {bookState, location} = this.props;
        if (bookState.failed) {
            return (<Redirect to={{
                pathname: '/',
                search: location.state && location.state.referer ? location.state.referer : null
            }}/>);
        }
        return (
            <div>
                <Helmet>
                    <title>Vivlio</title>
                    <meta name="description" content="Vivlio"/>
                </Helmet>
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <Header/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            Book
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getBook: bindActionCreators(BookActions.get, dispatch)
    };
};

const mapStateToProps = (state) => {
    return {
        bookState: state.book,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Book);

