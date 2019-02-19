import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { goHome } from '../../store/actions';
import { Button } from '../../components';

import './EndPage.css';

const generateScoreItems = totalScore => {
    return totalScore.map((user, index) => (
        <li key={index}>
            {user.name}
            <span>{user.level}</span>
        </li>
    ));
};

const EndPage = ({ score, goHome }) => {
    return (
        <section className="end-page">
            <h2>Total Score</h2>
            <div className="score">
                <ul>{generateScoreItems(score)}</ul>
            </div>
            <Button
                className="hendler-game-button new-game-button"
                content="NEW FIGHT"
                makeСhanges={goHome}
            />
        </section>
    );
};

const mapStateToProps = state => ({
    score: state.score
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            goHome
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EndPage);
