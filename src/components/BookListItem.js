import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import Book from '../records/Book';
import slugger from '../helpers/slugger';

function BookListItem ({book, searchUrl, handleClick}) {
    const linkObj = {
        pathname: `/${slugger(book.book_title)}--${book.id}`,
        state: {referer: searchUrl}
    };

    const onClick = () => {
        handleClick(linkObj);
    };

    return (<li className="book-list-item" onClick={onClick}>
        <Link to={linkObj} className="book-list-item-title">{book.book_title}</Link>
        <div className="book-list-item-author">
            <span className="book-list-item-label">Συγγραφέας:</span>&nbsp;
            {book.book_author.join(', ')}
        </div>
        <div className="book-list-item-publication-year">
            <span className="book-list-item-label">Έτος έκδωσης:</span>&nbsp;
            {book.book_publication_year}
        </div>
        <div className="book-list-item-publication-place">
            <span className="book-list-item-label">Τόπος έκδωσης:</span>&nbsp;
            {book.book_publication_country} {book.book_publication_city}
        </div>
        {!book.book_subject.isEmpty() && <div className="book-list-item-subject">
            <span className="book-list-item-label">Θέμα:</span>&nbsp;
            {book.book_subject.join(', ')}
        </div>}
    </li>);
}

BookListItem.propTypes = {
    book: PropTypes.instanceOf(Book).isRequired,
    handleClick: PropTypes.func.isRequired,
    searchUrl: PropTypes.string.isRequired
};

export default BookListItem;