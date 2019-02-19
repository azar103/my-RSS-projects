import React, { Component } from 'react';
import { Button } from '../../../components';
import {
    getRandomNumber,
    checkForEquality,
    RUSSIAN_DICTIONARY,
    ENGLISH_DICTIONARY
} from '../../../utils';

import './RusTranslatioTask.css';

class RusTranslatioTask extends Component {
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
        checkForEquality(this.state.rightAnswer, answer, this.props.getResult);
    };

    componentWillMount() {
        const wordIndex = getRandomNumber(0, RUSSIAN_DICTIONARY.length);
        let word = RUSSIAN_DICTIONARY[wordIndex][0].split('');
        word[0] = word[0].toUpperCase();
        word = word.join('');
        const rightAnswer = ENGLISH_DICTIONARY[wordIndex].toLowerCase();
        this.setState({
            ...this.state,
            ...{ rightAnswer, word }
        });
    }

    render() {
        const { word } = this.state;

        return (
            <div className="task rus-translatio-task">
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

export default RusTranslatioTask;
