import React, { Component } from 'react';
import { Button } from '../../../components';
import { getRandomNumber, checkForEquality, COLORS } from '../../../utils';

import './ColorTask.css';

class ColorTask extends Component {
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
        const currentResult = this.state.currentAnswer.toLowerCase();
        checkForEquality(
            this.state.colorName,
            currentResult,
            this.props.getResult
        );
    };

    componentWillMount() {
        const colorInfo = COLORS[getRandomNumber(0, COLORS.length)];
        const colorName = colorInfo[1];
        const color = { background: colorInfo[0] };
        this.setState({
            ...this.state,
            ...{ colorName, color }
        });
    }

    render() {
        const { color } = this.state;

        return (
            <div className="task color-task">
                <h4>what is color?</h4>
                <div className="color-piece" style={color} />
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

export default ColorTask;
