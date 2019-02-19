import React, { Component } from 'react';
import { Button } from '../../../components';
import { getRandomNumber, checkForEquality, ANTONYMS } from '../../../utils';

import './AntonymsTask.css';

class AntonymsTask extends Component {
    constructor(props) {
        super(props);
        this.antonym = '';
        this.rightAnswer = '';
        this.versions = '';
    }

    check = event => {
        const activeElem = event.target;
        if (activeElem.tagName === 'BUTTON') {
            checkForEquality(
                this.rightAnswer,
                activeElem.textContent,
                this.props.getResult
            );
        }
    };

    generateRandomArray = () => {
        const arrElem = [];
        while (arrElem.length < 4) {
            let currentNumber = getRandomNumber(0, ANTONYMS.length);
            if (arrElem.indexOf(currentNumber) === -1) {
                arrElem.push(currentNumber);
            }
        }
        return arrElem;
    };

    generateVersions = arrElem => {
        const versions = arrElem.map(elem => ANTONYMS[elem][1]);
        this.versions = versions.sort((a, b) => Math.random() - 0.5);
    };

    componentWillMount() {
        const arrElements = this.generateRandomArray();
        const antonyms = ANTONYMS[arrElements[0]];
        this.generateVersions(arrElements);
        this.antonym = antonyms[0];
        this.rightAnswer = antonyms[1];
    }

    render() {
        const condition = `${this.antonym} - ... ?`;

        return (
            <div className="task antonyms-task">
                <h4>Find antonym:</h4>
                <p>{condition}</p>
                <div className="antonyms-wrapper" onClick={this.check}>
                    <Button
                        content={this.versions[0]}
                        className="antonyms-sunonyms-button"
                    />
                    <Button
                        content={this.versions[1]}
                        className="antonyms-sunonyms-button"
                    />
                    <Button
                        content={this.versions[2]}
                        className="antonyms-sunonyms-button"
                    />
                    <Button
                        content={this.versions[3]}
                        className="antonyms-sunonyms-button"
                    />
                </div>
            </div>
        );
    }
}

export default AntonymsTask;
