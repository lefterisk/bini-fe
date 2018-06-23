import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import {connect} from 'react-redux';

import Search from '../../records/Search';

class Book extends React.PureComponent {
    static propTypes = {
        currentSearch: PropTypes.instanceOf(Search).isRequired,
        search: PropTypes.func.isRequired
    };

    state = {
        loading: false
    };

    render () {
        const {currentSearch} = this.props;
        console.log(currentSearch);
        return (
            <div>
                <Helmet>
                    <title>Vivlio</title>
                    <meta name="description" content="Vivlio" />
                </Helmet>
                Vivlio
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentSearch: state.search,
    };
};

export default connect(mapStateToProps)(Book);

