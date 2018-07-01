import React from 'react';
import PropTypes from 'prop-types';
import {List} from 'immutable';

import BookListItem from "./BookListItem";

function BookList({books, searchUrl}) {
    return (<ul className="book-list">
        {books.map(book => <BookListItem key={book.id} book={book} searchUrl={searchUrl}/>)}
    </ul>);
}

BookList.propTypes = {
    books: PropTypes.instanceOf(List).isRequired,
    searchUrl: PropTypes.string.isRequired,
};

export default BookList;
