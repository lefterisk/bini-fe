import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import {Helmet} from 'react-helmet';
import {connect} from 'react-redux';
import {Redirect, Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';

import BookActions from "../../actions/BookActions";
import BookState from "../../records/BookState";

import Header from '../Header';
import Info from '../Info';

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

        const show2ndTab = book && (!book.contributors.isEmpty()
            || book.funding
            || book.title_page_text
            || book.title_page_text
            || book.kolofonas_text
            || book.description);
        const show3rdTab = book && (!book.prototype_author.isEmpty()
            || book.prototype_title
            || book.prototype_parallel_title
            || book.prototype_subtitle
            || book.prototype_publisher
            || book.prototype_printer
            || book.prototype_publication_country
            || book.prototype_publication_city
            || Number(book.prototype_publication_year) !== 0
            || book.prototype_shape
            || Number(book.prototype_volumes) !== 0
            || Number(book.prototype_pages) !== 0
            || book.prototype_pagination
            || book.prototype_illustration
            || book.prototype_publication_type
            || book.prototype_original_prototype
            || book.prototype_original_language
            || book.translated_prototype_original_language
            || book.prototype_description
            || book.prototype_url);
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
                                <Link className="btn btn-primary pull-right" to={{
                                    pathname: '/',
                                    search: location.state && location.state.referer ? location.state.referer : null
                                }}>Επιστροφή στην αναζήτηση</Link>
                                <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
                                    <Tab eventKey={1} title="Βασικά στοιχεία">
                                        <br/>
                                        <table className="table table-striped">
                                            <tbody>
                                            <tr>
                                                <td width="200"><b>Συγγραφέας: </b></td>
                                                <td>{book.book_author.join(', ')}</td>
                                            </tr>
                                            {book.book_title && <tr>
                                                <td><b>Τίτλος: </b></td>
                                                <td>{book.book_title}</td>
                                            </tr>}
                                            {book.book_parallel_title && <tr>
                                                <td><b>Παράλληλος τίτλος: </b></td>
                                                <td>{book.book_parallel_title}</td>
                                            </tr>}
                                            {book.book_sub_title && <tr>
                                                <td><b>Υπότιτλος: </b></td>
                                                <td>{book.book_sub_title}</td>
                                            </tr>}
                                            {book.book_publisher && <tr>
                                                <td><b>Εκδότης: </b></td>
                                                <td>{book.book_publisher}</td>
                                            </tr>}
                                            {book.book_printer && <tr>
                                                <td><b>Τυπογράφος: </b></td>
                                                <td>{book.book_printer}</td>
                                            </tr>}
                                            {book.country_name && <tr>
                                                <td><b>Χώρα έκδοσης: </b></td>
                                                <td>{book.country_name}</td>
                                            </tr>}
                                            {book.city_name && <tr>
                                                <td><b>Πόλη έκδοσης: </b></td>
                                                <td>{book.city_name}</td>
                                            </tr>}
                                            {book.book_publication_year && <tr>
                                                <td><b>Έτος: </b></td>
                                                <td>{book.book_publication_year}</td>
                                            </tr>}
                                            {Number(book.book_publication_number) !== 0 && <tr>
                                                <td><b>Αρ.Έκδ.: </b></td>
                                                <td>{book.book_publication_number}</td>
                                            </tr>}
                                            {book.book_shape && <tr>
                                                <td><b>Σχήμα: </b></td>
                                                <td>{book.book_shape}</td>
                                            </tr>}
                                            {Number(book.book_height) !== 0 && <tr>
                                                <td><b>Ύψος: </b></td>
                                                <td>{book.book_height}</td>
                                            </tr>}
                                            {Number(book.book_volumes) !== 0 && <tr>
                                                <td><b>Τόμοι: </b></td>
                                                <td>{book.book_volumes}</td>
                                            </tr>}
                                            {Number(book.book_pages) !== 0 && <tr>
                                                <td><b>Σελ.: </b></td>
                                                <td>{book.book_pages}</td>
                                            </tr>}
                                            {book.book_pagination && <tr>
                                                <td><b>Αρίθμηση σελίδων: </b></td>
                                                <td>{book.book_pagination}</td>
                                            </tr>}
                                            {book.book_illustration && <tr>
                                                <td><b>Εικονογράφηση: </b></td>
                                                <td>{book.book_illustration === 'no' ? 'Όχι' : 'Ναι'}</td>
                                            </tr>}
                                            {book.book_publication_type && <tr>
                                                <td><b>Τύπος δημοσιεύματος: </b></td>
                                                <td>{book.book_publication_type}</td>
                                            </tr>}
                                            {book.book_bibliography && <tr>
                                                <td><b>Βιβλιογραφία: </b></td>
                                                <td>{book.book_bibliography}</td>
                                            </tr>}
                                            {!book.book_subject.isEmpty() && <tr>
                                                <td><b>Θέμα: </b></td>
                                                <td>{book.book_subject.join(', ')}</td>
                                            </tr>}
                                            {book.included_book_author && <tr>
                                                <td><b>Συγγραφέας Περιέχοντος βιβλίου: </b></td>
                                                <td>{book.included_book_author}</td>
                                            </tr>}
                                            {book.included_book_title && <tr>
                                                <td><b>Τίτλος Περιέχοντος βιβλίου: </b></td>
                                                <td>{book.included_book_title}</td>
                                            </tr>}
                                            {book.series_title && <tr>
                                                <td><b>Τίτλος σειράς: </b></td>
                                                <td>{book.series_title}</td>
                                            </tr>}
                                            {Number(book.volume_number) !== 0 && <tr>
                                                <td><b>Αριθμός τόμου: </b></td>
                                                <td>{book.volume_number}</td>
                                            </tr>}
                                            {book.magazine_title && <tr>
                                                <td><b>Τίτλος περιοδικού: </b></td>
                                                <td>{book.magazine_title}</td>
                                            </tr>}
                                            {Number(book.magazine_opuscule) !== 0 && <tr>
                                                <td><b>Τεύχος: </b></td>
                                                <td>{book.magazine_opuscule}</td>
                                            </tr>}
                                            {Number(book.magazine_volume) !== 0 && <tr>
                                                <td><b>Τόμος: </b></td>
                                                <td>{book.magazine_volume}</td>
                                            </tr>}
                                            {book.newspaper_title && <tr>
                                                <td><b>Τίτλος εφημερίδας: </b></td>
                                                <td>{book.newspaper_title}</td>
                                            </tr>}
                                            {Number(book.newspaper_volume) !== 0 && <tr>
                                                <td><b>Φύλλο: </b></td>
                                                <td>{book.newspaper_volume}</td>
                                            </tr>}
                                            {book.idological_classification && <tr>
                                                <td><b>Ειδολογική κατάταξη: </b></td>
                                                <td>{book.idological_classification}</td>
                                            </tr>}
                                            {book.cronological_classification && <tr>
                                                <td><b>Χρονολογική κατάταξη: </b></td>
                                                <td>{book.cronological_classification}</td>
                                            </tr>}
                                            {!book.thematical_classification.isEmpty() && <tr>
                                                <td><b>Θεματική κατάταξη: </b></td>
                                                <td>{book.thematical_classification.join(', ')}</td>
                                            </tr>}
                                            {!book.tekmirio_language.isEmpty() && <tr>
                                                <td><b>Γλώσσα Τεκμηρίου: </b></td>
                                                <td>{book.tekmirio_language.join(', ')}</td>
                                            </tr>}
                                            {book.prototype && <tr>
                                                <td><b>Πρωτοτυπία: </b></td>
                                                <td>{book.prototype}</td>
                                            </tr>}
                                            {book.original_language && <tr>
                                                <td><b>Γλώσσα αρχικού πρωτοτύπου: </b></td>
                                                <td>{book.original_language}</td>
                                            </tr>}
                                            {book.original_translated_language && <tr>
                                                <td><b>Γλώσσα μεταφ/ένου πρωτοτύπου: </b></td>
                                                <td>{book.original_translated_language}</td>
                                            </tr>}
                                            {!book.libraries.isEmpty() && <tr>
                                                <td><b>Βιβλιοθήκες: </b></td>
                                                <td>{book.libraries.join(', ')}</td>
                                            </tr>}
                                            {!book.url.isEmpty() && <tr>
                                                <td><b>URL: </b></td>
                                                <td>{book.url.map(url => <a key={url} href={url} target="_blank">
                                                    <Glyphicon glyph="new-window"/> {url}
                                                </a>)}</td>
                                            </tr>}
                                            </tbody>
                                        </table>
                                    </Tab>
                                    {show2ndTab && <Tab eventKey={2} title="Λεπτομέρειες-Περιγραφή">
                                        <br/>
                                        <table className="table table-striped">
                                            <tbody>
                                            {!book.contributors.isEmpty() && <tr>
                                                <td width="200"><b>Συντελεστές: </b></td>
                                                <td>{book.contributors.join(', ')}</td>
                                            </tr>}
                                            {book.funding && <tr>
                                                <td width="200"><b>Χρηματοδότηση: </b></td>
                                                <td>{book.funding}</td>
                                            </tr>}
                                            {book.title_page_text && <tr>
                                                <td width="200"><b>Κείμενο σελίδας τίτλου: </b></td>
                                                <td>{book.title_page_text}</td>
                                            </tr>}
                                            {book.kolofonas_text && <tr>
                                                <td width="200"><b>Κείμενο κολοφώνα: </b></td>
                                                <td>{book.kolofonas_text}</td>
                                            </tr>}
                                            {book.description && <tr>
                                                <td width="200"><b>Περιγραφή: </b></td>
                                                <td>{book.description}</td>
                                            </tr>}

                                            </tbody>
                                        </table>
                                    </Tab>}
                                    {show3rdTab && <Tab eventKey={3} title="Στοιχεία πρωτοτύπου">
                                        <br/>
                                        <table className="table table-striped">
                                            <tbody>
                                            {!book.prototype_author.isEmpty() && <tr>
                                                <td width="200"><b>Συγγραφέας πρωτοτύπου: </b></td>
                                                <td>{book.prototype_author.join(', ')}</td>
                                            </tr>}
                                            {book.prototype_title && <tr>
                                                <td width="200"><b>Τίτλος πρωτοτύπου: </b></td>
                                                <td>{book.prototype_title}</td>
                                            </tr>}
                                            {book.prototype_parallel_title && <tr>
                                                <td width="200"><b>Τίτλος αρχικού πρωτοτύπου: </b></td>
                                                <td>{book.prototype_parallel_title}</td>
                                            </tr>}
                                            {book.prototype_subtitle && <tr>
                                                <td width="200"><b>Υπότιτλος πρωτοτύπου: </b></td>
                                                <td>{book.prototype_subtitle}</td>
                                            </tr>}
                                            {book.prototype_publisher && <tr>
                                                <td width="200"><b>Εκδότης πρωτοτύπου: </b></td>
                                                <td>{book.prototype_publisher}</td>
                                            </tr>}
                                            {book.prototype_printer && <tr>
                                                <td width="200"><b>Τυπογράφος πρωτοτύπου: </b></td>
                                                <td>{book.prototype_printer}</td>
                                            </tr>}
                                            {book.prototype_publication_country && <tr>
                                                <td width="200"><b>Χώρα έκδοσης πρωτοτύπου: </b></td>
                                                <td>{book.prototype_publication_country}</td>
                                            </tr>}
                                            {book.prototype_publication_city && <tr>
                                                <td width="200"><b>Πόλη έκδοσης πρωτοτύπου: </b></td>
                                                <td>{book.prototype_publication_city}</td>
                                            </tr>}
                                            {Number(book.prototype_publication_year) !== 0 && <tr>
                                                <td width="200"><b>Έτος έκδοσης πρωτοτύπου: </b></td>
                                                <td>{book.prototype_publication_year}</td>
                                            </tr>}
                                            {book.prototype_shape && <tr>
                                                <td width="200"><b>Σχήμα πρωτοτύπου: </b></td>
                                                <td>{book.prototype_shape}</td>
                                            </tr>}
                                            {Number(book.prototype_volumes) !== 0 && <tr>
                                                <td width="200"><b>Τόμοι πρωτοτύπου: </b></td>
                                                <td>{book.prototype_volumes}</td>
                                            </tr>}
                                            {Number(book.prototype_pages) !== 0 && <tr>
                                                <td width="200"><b>Σελ. πρωτοτύπου: </b></td>
                                                <td>{book.prototype_pages}</td>
                                            </tr>}
                                            {book.prototype_pagination && <tr>
                                                <td width="200"><b>Αρίθμηση σελίδων πρωτοτύπου: </b></td>
                                                <td>{book.prototype_pagination}</td>
                                            </tr>}
                                            {book.prototype_illustration && <tr>
                                                <td width="200"><b>Εικονογράφηση πρωτοτύπου: </b></td>
                                                <td>{book.prototype_illustration}</td>
                                            </tr>}
                                            {book.prototype_publication_type && <tr>
                                                <td width="200"><b>Τύπος δημοσιεύματος πρωτοτύπου: </b></td>
                                                <td>{book.prototype_publication_type}</td>
                                            </tr>}
                                            {book.prototype_original_prototype && <tr>
                                                <td width="200"><b>Πρωτοτυπία πρωτοτύπου: </b></td>
                                                <td>{book.prototype_original_prototype}</td>
                                            </tr>}
                                            {book.prototype_original_language && <tr>
                                                <td width="200"><b>Γλώσσα αρχικού πρωτοτύπου: </b></td>
                                                <td>{book.prototype_original_language}</td>
                                            </tr>}
                                            {book.translated_prototype_original_language && <tr>
                                                <td width="200"><b>Γλώσσα μετφρ. πρωτοτύπου: </b></td>
                                                <td>{book.translated_prototype_original_language}</td>
                                            </tr>}
                                            {book.prototype_description && <tr>
                                                <td width="200"><b>Περιγραφή πρωτοτύπου: </b></td>
                                                <td>{book.prototype_description}</td>
                                            </tr>}
                                            {book.prototype_url && <tr>
                                                <td width="200"><b>URL πρωτοτύπου: </b></td>
                                                <td>
                                                    <a href={book.prototype_url} target="_blank">
                                                        <Glyphicon glyph="new-window"/> {book.prototype_url}
                                                    </a>
                                                </td>
                                            </tr>}
                                            </tbody>
                                        </table>
                                    </Tab>}
                                </Tabs>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}><Info/></Col>
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

