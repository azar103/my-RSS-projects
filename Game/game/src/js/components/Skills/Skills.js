import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { goToTasksWindow, toggleAttackButton } from '../../store/actions';
import { Button } from '../../components';

import './Skills.css';

const Skills = ({ goToTasksWindow, toggleAttackButton }) => {
    const startTestForSwordAttack = () => {
        goToTasksWindow();
        toggleAttackButton(false);
    };

    const startTestForThrowAttack = () => {
        goToTasksWindow();
        toggleAttackButton(true);
    };

    return (
        <div className="skills">
            <Button
                content="Swart Attack"
                className="hendler-game-button skills-button"
                makeСhanges={startTestForSwordAttack}
            />
            <Button
                content="Throw Attack"
                className="hendler-game-button skills-button"
                makeСhanges={startTestForThrowAttack}
            />
        </div>
    );
};

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            goToTasksWindow,
            toggleAttackButton
        },
        dispatch
    );

export default connect(
    null,
    mapDispatchToProps
)(Skills);
