import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { startGame, addUser, throwMistakeAlert } from '../../store/actions';
import { Button } from '../Button';
import { isNameCorrect, sleep, TIME_DELAY, OPTIONS } from '../../utils';

import './UserNameInput.css';

const UserNameInput = ({ score, addUser, startGame, throwMistakeAlert }) => {
    let currentUserName = '';

    const addName = event => {
        event.preventDefault();
        currentUserName = event.target.value;
    };

    const throwAndcloseAlert = async () => {
        throwMistakeAlert(true);
        await sleep(TIME_DELAY.closeMistakeAlert);
        throwMistakeAlert();
    };

    const toFight = event => {
        event.preventDefault();
        let name = currentUserName;
        name = name.replace(/(^\s+|\s+$)/g, '');

        if (isNameCorrect(name, score)) {
            addUser(name, OPTIONS.initialLevel);
            startGame();
        } else {
            throwAndcloseAlert();
        }
    };

    return (
        <article className="name-input">
            <span>-What is your name warrior?</span>
            <span>-My name is:</span>
            <form onSubmit={toFight}>
                <input
                    type="text"
                    placeholder="Name"
                    onChange={addName}
                    autoFocus="autofocus"
                />
            </form>
            <Button
                className="hendler-game-button"
                content="FIGHT"
                makeСhanges={toFight}
            />
        </article>
    );
};

const mapStateToProps = state => ({
    score: state.score
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            startGame,
            addUser,
            throwMistakeAlert
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserNameInput);
