import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    endGame,
    addAudioEffect,
    subtractAudioEffect,
    createNewLevel,
    enemyAction,
    killEnemy
} from '../../store/actions';
import { Health } from '../Health';
import { getUserInfo } from '../../gameLogic';
import {
    gemerateRandomName,
    chooseFitingBackground,
    sleep,
    HEALTH,
    URLS,
    TIME_DELAY
} from '../../utils';

import './RoundInfo.css';

const RoundInfo = props => {
    let { name, level } = getUserInfo(props.score);

    const userDied = async () => {
        await sleep(TIME_DELAY.enemyWins[0]);
        props.addAudioEffect(URLS.enemyWins);
        await sleep(TIME_DELAY.enemyWins[1]);
        props.subtractAudioEffect();
        props.endGame();
    };

    const enemyDied = async () => {
        const name = gemerateRandomName();
        const backGroung = chooseFitingBackground(props.background);
        await sleep(TIME_DELAY.heroWins[0]);
        props.addAudioEffect(URLS.heroWins);
        props.killEnemy(true);
        await sleep(TIME_DELAY.heroWins[1]);
        props.createNewLevel(name, backGroung);
        props.subtractAudioEffect();
        await sleep(TIME_DELAY.heroWins[2]);
        props.enemyAction('stand');
    };

    if (props.userHealth === HEALTH.zero) {
        userDied();
    } else if (props.enemyHealth === HEALTH.zero) {
        enemyDied();
    }

    return (
        <article className="game-info">
            <div className="user-characteristics">
                <h3>{name}</h3>
                <Health className="user-health" health={props.userHealth} />
            </div>
            <div className="round">{'Round ' + (level + 1)}</div>
            <div className="enemy-characteristics">
                <h3>{props.enemyName}</h3>
                <Health className="enemy-health" health={props.enemyHealth} />
            </div>
        </article>
    );
};

const mapStateToProps = state => ({
    score: state.score,
    enemyHealth: state.enemyHealth,
    userHealth: state.userHealth,
    enemyName: state.enemyName,
    background: state.rndBackGround
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            endGame,
            addAudioEffect,
            subtractAudioEffect,
            createNewLevel,
            enemyAction,
            killEnemy
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RoundInfo);
