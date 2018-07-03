import React from 'react';
import PropTypes from 'prop-types';
import {List} from 'immutable';

import BookListItem from "./BookListItem";

function BookList({books, searchUrl, handleClick}) {
    return (<ul className="book-list">
        {books.map(book => <BookListItem key={book.id} book={book} searchUrl={searchUrl} handleClick={handleClick}/>)}
    </ul>);
}

BookList.propTypes = {
    books: PropTypes.instanceOf(List).isRequired,
    searchUrl: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
};

export default BookList;
