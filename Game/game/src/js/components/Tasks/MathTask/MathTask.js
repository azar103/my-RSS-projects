import React, { Component } from 'react';
import { Button } from '../../../components';
import { getRandomNumber, checkForEquality } from '../../../utils';

import './MathTask.css';

const MAX_MIN_VALUES = {
    forAddAndSubtr: 300,
    forMult: {
        firstNumMax: 50,
        secondNumMax: 10
    },
    forDivis: {
        firstNumMax: 300,
        secondNumMax: 20
    },
    min: 1
};
class MathTask extends Component {
    constructor(props) {
        super(props);

        this.state = { currentAnswer: '' };
        this.sign = ['+', '-', '*', '/'];
    }

    generateNumbers = sign => {
        let firstNumber;
        let secondNumber;

        if (sign === '+' || sign === '-') {
            firstNumber = getRandomNumber(
                MAX_MIN_VALUES.min,
                MAX_MIN_VALUES.forAddAndSubtr
            );
            secondNumber = getRandomNumber(
                MAX_MIN_VALUES.min,
                MAX_MIN_VALUES.forAddAndSubtr
            );
            return [firstNumber, secondNumber];
        } else if (sign === '*') {
            firstNumber = getRandomNumber(
                MAX_MIN_VALUES.min,
                MAX_MIN_VALUES.forMult.firstNumMax
            );
            secondNumber = getRandomNumber(
                MAX_MIN_VALUES.min,
                MAX_MIN_VALUES.forMult.secondNumMax
            );
            return [firstNumber, secondNumber];
        } else {
            firstNumber = getRandomNumber(
                MAX_MIN_VALUES.min,
                MAX_MIN_VALUES.forDivis.firstNumMax
            );
            secondNumber = getRandomNumber(
                MAX_MIN_VALUES.min,
                MAX_MIN_VALUES.forDivis.secondNumMax
            );
            while (firstNumber % secondNumber) {
                secondNumber = getRandomNumber(
                    MAX_MIN_VALUES.min,
                    MAX_MIN_VALUES.forDivis.secondNumMax
                );
            }
            return [firstNumber, secondNumber];
        }
    };

    getRightAnswer = (a, b, sign) => {
        switch (sign) {
            case '+': {
                return a + b;
            }
            case '-': {
                return a - b;
            }
            case '*': {
                return a * b;
            }
            case '/': {
                return a / b;
            }
            default: {
                return;
            }
        }
    };

    addAnswer = event => {
        event.preventDefault();
        const value = Number(event.target.value);
        this.setState({ ...this.state, currentAnswer: value });
    };

    check = event => {
        event.preventDefault();
        checkForEquality(
            this.state.rightAnswer,
            this.state.currentAnswer,
            this.props.getResult
        );
    };

    componentWillMount() {
        const currentSign = this.sign[getRandomNumber(0, this.sign.length)];
        const [firstNumber, secondNumber] = this.generateNumbers(currentSign);
        const rightAnswer = this.getRightAnswer(
            firstNumber,
            secondNumber,
            currentSign
        );
        this.setState({
            ...this.state,
            ...{ rightAnswer, firstNumber, secondNumber, currentSign }
        });
    }

    render() {
        const { firstNumber, secondNumber, currentSign } = this.state;
        const condition = `${firstNumber} ${currentSign} ${secondNumber} = ?`;

        return (
            <div className="task math-task">
                <h4>Solve an example:</h4>
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

export default MathTask;
