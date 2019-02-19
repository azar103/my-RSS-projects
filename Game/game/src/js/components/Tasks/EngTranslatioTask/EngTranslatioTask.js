import React, { Component } from 'react';
import { Button } from '../../../components';
import {
    getRandomNumber,
    checkForConsistency,
    RUSSIAN_DICTIONARY,
    ENGLISH_DICTIONARY
} from '../../../utils';

import './EngTranslatioTask.css';

class EngTranslatioTask extends Component {
    constructor(props) {
        super(props);

        this.state = { currentAnswer: '' };
    }

    addAnswer = event => {
        event.preventDefault();
        const value = event.target.value;
        this.setState({ ...this.state, currentAnswer: value });
    };

    check = event => {
        event.preventDefault();
        const answer = this.state.currentAnswer.toLowerCase();
        checkForConsistency(
            this.state.rightAnswer,
            answer,
            this.props.getResult
        );
    };

    componentWillMount() {
        const wordIndex = getRandomNumber(0, ENGLISH_DICTIONARY.length);
        const word = ENGLISH_DICTIONARY[wordIndex];
        const rightAnswer = RUSSIAN_DICTIONARY[wordIndex];
        this.setState({
            ...this.state,
            ...{ rightAnswer, word }
        });
    }

    render() {
        const { word } = this.state;

        return (
            <div className="task eng-translatio-task">
                <h4>Write the correct translation:</h4>
                <p>{word}</p>
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

export default EngTranslatioTask;
