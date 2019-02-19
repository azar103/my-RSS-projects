import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    setEnemyName,
    setBackGround,
    togglePopUp,
    createNewLevel
} from '../../store/actions';
import { chooseFitingBackground, gemerateRandomName } from '../../utils';
import { RoundInfo, Button, PopUpWindow, Enemy } from '../../components';

import './FightingPage.css';
import './HetoActions.css';

class FightingPage extends Component {
    defineCurentPopUp = currentPopUp => {
        if (currentPopUp) {
            return <PopUpWindow />;
        }
        return null;
    };

    componentWillMount() {
        this.props.setEnemyName(gemerateRandomName());
        this.props.setBackGround(
            chooseFitingBackground(this.props.rndBackGround)
        );
    }

    render() {
        const popUp = this.defineCurentPopUp(this.props.popUpIsVisible);
        const heroActionClassName = 'hero hero-' + this.props.heroState;

        return (
            <section className={this.props.rndBackGround || ''}>
                <div className="info-wrapper">
                    <RoundInfo />
                    <Button
                        className="attack"
                        makeСhanges={this.props.togglePopUp}
                    />
                </div>
                <div className="fighting-plase">
                    <div className={heroActionClassName} />
                    <Enemy />
                </div>
                {popUp}
                <audio
                    id="attack-sound"
                    src={this.props.audioEffect}
                    autoPlay="autoplay"
                />
            </section>
        );
    }
}

const mapStateToProps = state => ({
    audioEffect: state.audioEffect,
    popUpIsVisible: state.popUpIsVisible,
    rndBackGround: state.rndBackGround,
    enemyHealth: state.enemyHealth,
    heroState: state.heroState
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            setEnemyName,
            setBackGround,
            togglePopUp,
            createNewLevel
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FightingPage);
