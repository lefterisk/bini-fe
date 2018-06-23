import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import SearchState from '../../records/SearchState';

import SearchActions from "../../actions/SearchActions";


class Home extends React.PureComponent {
    static propTypes = {
        currentSearch: PropTypes.instanceOf(SearchState).isRequired,
        search: PropTypes.func.isRequired
    };

    state = {
        loading: false
    };

    onSearch = async (search) => {
        this.setState({
            loading: true
        });

        await this.props.search(search);

        this.setState({
            loading: false
        });
        this.props.history.push(`search/${search.urlEncode()}`);
    };

    render () {
        const {currentSearch} = this.props;
        console.log(currentSearch);
        return (
            <div>
                <Helmet>
                    <title>Anazitisi</title>
                    <meta name="description" content="Anazitisi" />
                </Helmet>
                Anazitisi
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        search: bindActionCreators(SearchActions.search, dispatch)
    };
};

const mapStateToProps = (state) => {
    return {
        currentSearch: state.search,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

