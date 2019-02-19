import React, { Component } from 'react';
import { Button } from '../../../components';
import { getRandomNumber, checkForEquality, SYNONYMS } from '../../../utils';

import './SynonymsTask.css';

class SynonymsTask extends Component {
    constructor(props) {
        super(props);
        this.sunonym = '';
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
            let currentNumber = getRandomNumber(0, SYNONYMS.length);
            if (arrElem.indexOf(currentNumber) === -1) {
                arrElem.push(currentNumber);
            }
        }
        return arrElem;
    };

    generateVersions = arrElem => {
        const versions = arrElem.map(elem => SYNONYMS[elem][1]);
        this.versions = versions.sort((a, b) => Math.random() - 0.5);
    };

    componentWillMount() {
        const arrElements = this.generateRandomArray();
        const sunonyms = SYNONYMS[arrElements[0]];
        this.generateVersions(arrElements);
        this.sunonym = sunonyms[0];
        this.rightAnswer = sunonyms[1];
    }

    render() {
        const condition = `${this.sunonym} - ... ?`;

        return (
            <div className="task sunonyms-task">
                <h4>Find sunonym:</h4>
                <p>{condition}</p>
                <div className="sunonyms-wrapper" onClick={this.check}>
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

export default SynonymsTask;
