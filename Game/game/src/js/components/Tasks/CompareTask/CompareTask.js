import React, { Component } from 'react';
import { Button } from '../../../components';
import { checkForEquality, getRandomNumber } from '../../../utils';

import './CompareTask.css';

const MAX_MIN_VALUES = {
    max: 500,
    min: -200
};

class CompareTask extends Component {
    constructor(props) {
        super(props);

        this.state = { currentAnswer: '' };
        this.sign = ['<', '>'];
    }

    getRightAnswer = (a, b, sign) => {
        switch (sign) {
            case '>': {
                if (a > b) {
                    return true;
                }
                return false;
            }
            case '<': {
                if (a < b) {
                    return true;
                }
                return false;
            }
            default: {
                return;
            }
        }
    };

    addAnswer = event => {
        event.preventDefault();
        const value = event.target.value;
        this.setState({ ...this.state, currentAnswer: value });
    };

    check = event => {
        event.preventDefault();
        const answer = this.state.currentAnswer.toLowerCase();
        checkForEquality(this.state.rightAnswer, answer, this.props.getResult);
    };

    componentWillMount() {
        const currentSign = this.sign[getRandomNumber(0, this.sign.length)];
        const firstNumber = getRandomNumber(
            MAX_MIN_VALUES.min,
            MAX_MIN_VALUES.max
        );
        const secondNumber = getRandomNumber(
            MAX_MIN_VALUES.min,
            MAX_MIN_VALUES.max
        );
        const rightAnswer = String(
            this.getRightAnswer(firstNumber, secondNumber, currentSign)
        );
        this.setState({
            ...this.state,
            ...{ rightAnswer, firstNumber, secondNumber, currentSign }
        });
    }

    render() {
        const { firstNumber, secondNumber, currentSign } = this.state;
        const condition = `${firstNumber} ${currentSign} ${secondNumber}`;

        return (
            <div className="task compare-task">
                <h4>True or False?</h4>
                <p>{condition}</p>
                <form onSubmit={this.check}>
                    <input
                        type="text"
                        onChange={this.addAnswer}
                        autoFocus="autofocus"
                        className="task-input"
                    />
                </form>
                <Button
                    content="Reply"
                    className="hendler-game-button"
                    makeСhanges={this.check}
                />
            </div>
        );
    }
}

export default CompareTask;
