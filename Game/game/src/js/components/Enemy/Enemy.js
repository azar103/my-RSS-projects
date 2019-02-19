import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createEnemy, killEnemy } from '../../store/actions';
import { EnemyPart } from '../../components';
import { getEnemyParts, getEnemy, makeEnemy } from '../../gameLogic';

import './Enemy.css';

class Enemy extends Component {
    componentWillReceiveProps(nextProps) {
        const enemy = nextProps.enemy;
        if (nextProps.enemyIsDead) {
            this.props.killEnemy(false);
            makeEnemy(enemy, this.props.createEnemy, this.props.killEnemy);
        }
    }

    componentWillMount() {
        getEnemyParts().then(parts => {
            const currentEnemy = getEnemy(parts);
            currentEnemy.parts = parts;
            this.props.createEnemy(currentEnemy);
        });
    }

    render() {
        if (!this.props.enemy) {
            return null;
        }

        const enemyState = this.props.enemyState;
        let {
            head,
            body,
            handLeft,
            handRight,
            legLeft,
            legRight
        } = this.props.enemy;

        return (
            <div className="enemy">
                <EnemyPart name={'head-enemy-' + enemyState} partUrl={head} />
                <EnemyPart name={'body-enemy-' + enemyState} partUrl={body} />
                <EnemyPart
                    name={'hand-left-enemy-' + enemyState}
                    partUrl={handLeft}
                />
                <EnemyPart
                    name={'hand-right-enemy-' + enemyState}
                    partUrl={handRight}
                />
                <EnemyPart
                    name={'leg-left-enemy-' + enemyState}
                    partUrl={legLeft}
                />
                <EnemyPart
                    name={'leg-right-enemy-' + enemyState}
                    partUrl={legRight}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    enemyHealth: state.enemyHealth,
    enemy: state.enemy,
    enemyState: state.enemyState,
    enemyIsDead: state.enemyIsDead
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            createEnemy,
            killEnemy
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Enemy);
