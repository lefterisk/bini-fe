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

    componentDidMount () {
        const {location, getBook} = this.props;
        const parts = location.pathname.split('--');

        if (!parts[1]) {
            this.props.history.push({
                pathname: '/',
                search: location.state && location.state.referer ? location.state.referer : null
            });
            return;
        }

        getBook(parts[1]);
    }

    render () {
        const {bookState, location} = this.props;
        const {book} = bookState;
        if (bookState.failed) {
            return (<Redirect to={{
                pathname: '/',
                search: location.state && location.state.referer ? location.state.referer : null
            }}/>);
        }
        return (
            <React.Fragment>
                {bookState.loading &&
                <div className="text-center">
                    <span className="loader-primary-lg"/>
                </div>}
                {bookState.book && <React.Fragment>
                    <Helmet>
                        <title>{book.book_title}</title>
                        <meta name="description"
                              content={`${book.book_title} ${book.book_parallel_title} ${book.book_sub_title}`}/>
                    </Helmet>
                    <Grid>
                        <Row>
                            <Col xs={12}>
                                <Header/>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <table className="table table-striped">
                                    <tbody>
                                    <tr>
                                        <td><b>Τίτλος: </b></td>
                                        <td>{book.book_title}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </Col>
                        </Row>
                    </Grid>
                </React.Fragment>}
            </React.Fragment>
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

