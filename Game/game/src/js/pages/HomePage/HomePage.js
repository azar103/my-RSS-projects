import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { prepareStore } from '../../store/actions';
import { UserNameInput } from '../../components';

import './HomePage.css';

const HomePage = ({ prepareStore, mistakeAlert }) => {
    prepareStore();

    return (
        <section className="home-page">
            <h1>CONFRONTATION</h1>
            <UserNameInput />
            <div className="mistake-alert" style={mistakeAlert}>
                <div className="mistake-alert-wrapper">
                    <p>Entered invalid user data!!!</p>
                    <p>Please enter new username.</p>
                </div>
            </div>
        </section>
    );
};

const mapStateToProps = state => ({
    mistakeAlert: state.mistakeAlert
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            prepareStore
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);
