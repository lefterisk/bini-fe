import React from 'react';
import {Link} from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

function Header() {
    return (<React.Fragment>
        <ScrollToTop/>
        <h1><Link to="/">Εργογραφία νεοελληνικής χρονογραφίας και ιστοριογραφίας<br/> (1529 - 1900)</Link></h1>
    </React.Fragment>);
}

export default Header;
