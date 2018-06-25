import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

import Search from '../records/Search';

function FilterTags({onDelete, search}) {
    const filters = search.getCondensedFilters();

    const onClick = (filterType) => {
        return () => {
            onDelete(filterType);
        };
    };

    const fields = {
        author: 'Συγγραφέας: ',
        language: 'Γλώσσα: ',
        countryOfPublication: 'Χώρα έκδωσης: ',
        cityOfPublication: 'Πόλη έκδωσης: ',
        publicationType: 'Είδος δημοσιεύματος: ',
        publisher: 'Εκδότης/Τυπογράφος: ',
        subject: 'θέμα: ',
        title: 'Τίτλος: ',
        yearOfPublication: 'Έτος έκδωσης: '
    };

    return (<div>
        {filters.map(filter => <Button key={filter.type} onClick={onClick(filter.type)} className="btn-sm">
            <Glyphicon glyph="remove-circle"/>&nbsp;
            <b>{fields[filter.type]}</b> {filter.values.join(' ή ')}
        </Button>)}
    </div>);
}

FilterTags.propTypes = {
    onDelete: PropTypes.func.isRequired,
    search: PropTypes.instanceOf(Search).isRequired
};

export default FilterTags;