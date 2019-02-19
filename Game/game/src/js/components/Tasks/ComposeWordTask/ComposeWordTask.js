import React, { Component } from 'react';
import { Button } from '../../../components';
import {
    getRandomNumber,
    checkForEquality,
    ENGLISH_DICTIONARY
} from '../../../utils';
import DragSortableList from 'react-drag-sortable';

import './ComposeWordTask.css';

class ComposeWordTask extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.currentAnswer = '';
    }

    onSort = sortedList => {
        const newWord = sortedList.map(elem => elem.content.props.children);
        this.currentAnswer = newWord.join('');
    };

    check = event => {
        event.preventDefault();
        checkForEquality(
            this.state.rightAnswer,
            this.currentAnswer,
            this.props.getResult
        );
    };

    generataLettersList = letters =>
        letters.map(elem => ({
            content: <div>{elem}</div>,
            classes: ['letter']
        }));

    componentWillMount() {
        let word =
            ENGLISH_DICTIONARY[getRandomNumber(0, ENGLISH_DICTIONARY.length)];
        word = word.toLowerCase();
        const rightAnswer = word;
        word = word.split('').sort((a, b) => Math.random() - 0.5);
        this.currentAnswer = word.join('');
        const letterList = this.generataLettersList(word);
        this.setState({
            ...this.state,
            ...{ rightAnswer, letterList }
        });
    }

    render() {
        const list = this.state.letterList;

        return (
            <div className="task compose-task">
                <h4>Compose the word:</h4>
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

export default ComposeWordTask;
