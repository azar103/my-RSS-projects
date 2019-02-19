import React from 'react';
import { connect } from 'react-redux';
import { routGamePage } from './js/gameLogic';

const App = ({ currentPage }) => {
    const Component = routGamePage(currentPage);
    return (
        <div className="app">
            <Component />
        </div>
    );
};

const mapStateToProps = state => ({ currentPage: state.currentPage });

export default connect(mapStateToProps)(App);
