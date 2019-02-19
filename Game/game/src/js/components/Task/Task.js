import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { wrongAnswer, rightAnswer } from '../../store/actions';
import { getTaskComponent } from '../../gameLogic';

import './Task.css';

const Tasks = ({ wrongAnswer, rightAnswer }) => {
    const getResult = result => {
        if (result) {
            rightAnswer();
        } else {
            wrongAnswer();
        }
    };

    const TaskComponent = getTaskComponent();

    return (
        <div className="tasks">
            <TaskComponent getResult={getResult} />
        </div>
    );
};

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            wrongAnswer,
            rightAnswer
        },
        dispatch
    );

export default connect(
    null,
    mapDispatchToProps
)(Tasks);
