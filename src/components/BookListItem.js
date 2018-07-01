import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Book from '../records/Book';
import slugger from '../helpers/slugger';

function BookListItem({book, searchUrl}) {
    return (<li className="book-list-item">
        <Link to={{
            pathname: `/${slugger(book.book_title)}--${book.id}`,
            state: { referer: searchUrl }
        }} className="book-list-item-title">{book.book_title}</Link>
        <div className="book-list-item-author">
            <span className="book-list-item-label">Συγγραφέας:</span>&nbsp;
            {book.book_author}
        </div>
        <div className="book-list-item-publication-year">
            <span className="book-list-item-label">Έτος έκδωσης:</span>&nbsp;
            {book.book_publication_year}
        </div>
        <div className="book-list-item-publication-place">
            <span className="book-list-item-label">Τόπος έκδωσης:</span>&nbsp;
            {book.book_publication_country} {book.book_publication_city}
        </div>
        { !book.book_subject.isEmpty() && <div className="book-list-item-subject">
            <span className="book-list-item-label">Θέμα:</span>&nbsp;
            {book.book_subject.join(', ')}
        </div> }
    </li>);
}

BookListItem.propTypes = {
    book: PropTypes.instanceOf(Book).isRequired,
    searchUrl: PropTypes.string.isRequired
};

export default BookListItem;
