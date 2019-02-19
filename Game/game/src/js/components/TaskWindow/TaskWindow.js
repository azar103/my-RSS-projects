import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    togglePopUp,
    enemyAction,
    subtractHealth,
    addAudioEffect,
    subtractAudioEffect,
    heroAction
} from '../../store/actions';
import { Skills, Task } from '../../components';
import { sleep, HEALTH, TIME_DELAY, URLS } from '../../utils';

import './TaskWindow.css';

const TaskWindow = props => {
    const swordHeroAttack = async () => {
        await sleep(TIME_DELAY.swordHeroAttack[0]);
        props.heroAction('sword-attack');
        await sleep(TIME_DELAY.swordHeroAttack[1]);
        props.addAudioEffect(URLS.heroAttack);
        await sleep(TIME_DELAY.swordHeroAttack[2]);
        if (props.enemyHealth <= HEALTH.piece) {
            props.enemyAction('dying');
            await sleep(TIME_DELAY.swordHeroAttack[3]);
            props.subtractHealth(true);
            await sleep(TIME_DELAY.swordHeroAttack[4]);
        } else {
            props.enemyAction('hurt');
            await sleep(TIME_DELAY.swordHeroAttack[3]);
            props.subtractHealth(true);
            await sleep(TIME_DELAY.swordHeroAttack[3]);
            props.enemyAction('stand');
            await sleep(TIME_DELAY.swordHeroAttack[3]);
        }
        props.heroAction('stand');
        props.subtractAudioEffect();
    };

    const throwHeroAttack = async () => {
        await sleep(TIME_DELAY.throwHeroAttack[0]);
        props.heroAction('throw-attack');
        await sleep(TIME_DELAY.throwHeroAttack[1]);
        props.addAudioEffect(URLS.heroAttack);
        await sleep(TIME_DELAY.throwHeroAttack[2]);
        if (props.enemyHealth <= HEALTH.piece) {
            props.heroAction('stand');
            props.enemyAction('dying');
            await sleep(TIME_DELAY.throwHeroAttack[3]);
            props.subtractHealth(true);
        } else {
            props.enemyAction('hurt');
            props.heroAction('stand');
            await sleep(TIME_DELAY.throwHeroAttack[3]);
            props.subtractHealth(true);
            await sleep(TIME_DELAY.throwHeroAttack[3]);
            props.enemyAction('stand');
        }
        await sleep(TIME_DELAY.throwHeroAttack[4]);
        props.subtractAudioEffect();
    };

    const enemyAttackHero = async () => {
        await sleep(TIME_DELAY.enemyAttack[0]);
        props.enemyAction('attack');
        await sleep(TIME_DELAY.enemyAttack[0]);
        props.addAudioEffect(URLS.enemyAttack);
        if (props.userHealth <= HEALTH.piece) {
            await sleep(TIME_DELAY.enemyAttack[1]);
            props.subtractHealth(false);
            await sleep(TIME_DELAY.enemyAttack[2]);
            props.heroAction('dying');
        } else {
            await sleep(TIME_DELAY.enemyAttack[2]);
            props.heroAction('hurt');
            await sleep(TIME_DELAY.enemyAttack[3]);
            props.subtractHealth(false);
            props.heroAction('stand');
        }
        await sleep(TIME_DELAY.enemyAttack[4]);
        props.enemyAction('stand');
        props.subtractAudioEffect();
    };

    const attackToEnemy = async () => {
        await sleep(TIME_DELAY.beforeAttack);
        props.togglePopUp();

        if (!props.attackIndex) {
            swordHeroAttack();
        } else {
            throwHeroAttack();
        }
    };

    const attackToHero = async () => {
        await sleep(TIME_DELAY.beforeAttack);
        props.togglePopUp();
        enemyAttackHero();
    };

    const defineTaskWindow = () => {
        switch (props.currentWindow) {
            case 'skills':
                return <Skills />;
            case 'task':
                return <Task />;
            case 'rightAnswer':
                attackToEnemy();
                return <p className="result">You are right!</p>;
            case 'wrongAnswer':
                attackToHero();
                return <p className="result">You are mistaken!</p>;
            default:
                return null;
        }
    };

    return <div className="task-window">{defineTaskWindow()}</div>;
};

const mapStateToProps = state => ({
    currentWindow: state.currentTaskWindow,
    attackIndex: state.attackButtonIndex,
    enemyHealth: state.enemyHealth,
    userHealth: state.userHealth
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            togglePopUp,
            enemyAction,
            subtractHealth,
            addAudioEffect,
            subtractAudioEffect,
            heroAction
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskWindow);
