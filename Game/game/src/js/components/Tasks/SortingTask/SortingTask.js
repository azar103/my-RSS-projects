import React, { Component } from 'react';
import { Button } from '../../../components';
import { getRandomNumber, checkForEquality } from '../../../utils';
import DragSortableList from 'react-drag-sortable';

import './SortingTask.css';

const MIN_MAX_NUMBERS = {
    min: 10,
    max: 999
};

class SortingTask extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.currentAnswer = '';
        this.rightAnswer = '';
    }

    onSort = sortedList => {
        const values = sortedList.map(elem => elem.content.props.children);
        this.currentAnswer = values.join('.');
    };

    check = event => {
        event.preventDefault();
        checkForEquality(
            this.rightAnswer,
            this.currentAnswer,
            this.props.getResult
        );
    };

    generataNumdersList = numders =>
        numders.map(elem => ({
            content: <div>{elem}</div>,
            classes: ['sort-numbers']
        }));

    componentWillMount() {
        const randomNumders = [];
        for (let i = 0; i < 5; i++) {
            randomNumders.push(
                getRandomNumber(MIN_MAX_NUMBERS.min, MIN_MAX_NUMBERS.max)
            );
        }
        const numbersList = this.generataNumdersList(randomNumders);
        const answerAscending = randomNumders
            .slice()
            .sort((a, b) => a - b)
            .join('.');
        const answerDescending = randomNumders
            .slice()
            .sort((a, b) => b - a)
            .join('.');
        this.setState({
            ...this.state,
            ...{
                numbersList,
                ascending: [answerAscending, 'Sort numbers ascending:'],
                descending: [answerDescending, 'Sort numbers descending:']
            }
        });
    }

    render() {
        const definiteSorting = getRandomNumber(0, 2);
        const numbersList = this.state.numbersList;
        let caption = '';
        if (definiteSorting) {
            const currentSort = this.state.ascending;
            caption = currentSort[1];
            this.rightAnswer = currentSort[0];
        } else {
            const currentSort = this.state.descending;
            caption = currentSort[1];
            this.rightAnswer = currentSort[0];
        }

        return (
            <div className="task sort-task">
                <h4>{caption}</h4>
                <DragSortableList
                    items={numbersList}
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

export default SortingTask;
