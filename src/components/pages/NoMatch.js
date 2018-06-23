import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

export default function NoMatch() {
    return (
        <div className="not-found-page">
            <Helmet>
                <title>Page not found</title>
            </Helmet>
            <header>
                <h3>
                    Page not found
                </h3>
            </header>
            <p>Page not found</p>
        </div>
    );
}
