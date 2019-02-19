import React, { Component } from 'react';
import { Button } from '../../../components';
import {
    getRandomNumber,
    checkForEquality,
    ENGLISH_PHRASES
} from '../../../utils';
import DragSortableList from 'react-drag-sortable';

import './ComposePhraseTask.css';

class ComposePhraseTask extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.currentAnswer = '';
    }

    onSort = sortedList => {
        const newPhrase = sortedList.map(elem => elem.content.props.children);
        this.currentAnswer = newPhrase.join(' ');
    };

    check = event => {
        event.preventDefault();
        checkForEquality(
            this.state.rightAnswer,
            this.currentAnswer,
            this.props.getResult
        );
    };

    generataWordsList = words =>
        words.map(elem => ({
            content: <div>{elem}</div>,
            classes: ['words']
        }));

    componentWillMount() {
        let phrase =
            ENGLISH_PHRASES[getRandomNumber(0, ENGLISH_PHRASES.length)];
        const rightAnswer = phrase;
        phrase = phrase.split(' ').sort((a, b) => Math.random() - 0.5);
        this.currentAnswer = phrase.join(' ');
        const wordsList = this.generataWordsList(phrase);
        this.setState({
            ...this.state,
            ...{ rightAnswer, wordsList }
        });
    }

    render() {
        const list = this.state.wordsList;

        return (
            <div className="task compose-phrase-task">
                <h4>Compose the phrase:</h4>
                <DragSortableList
                    items={list}
                    moveTransitionDuration={0.3}
                    dropBackTransitionDuration={0.3}
                    onSort={this.onSort}
                    type="horizontal"
                />
                <Button
                    content="Reply"
                    className="hendler-game-button"
                    makeСhanges={this.check}
                />
            </div>
        );
    }
}

export default ComposePhraseTask;
