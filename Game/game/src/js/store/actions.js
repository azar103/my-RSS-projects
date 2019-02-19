import { OPTIONS } from '../utils';

export const startGame = () => ({
    type: 'START_GAME',
    payload: 'fightingPage'
});

export const endGame = () => ({ type: 'END_GAME', payload: 'scorePage' });

export const goHome = () => ({ type: 'GO_HOME', payload: 'homePage' });

export const prepareStore = () => ({ type: 'PREPARE_STORE' });

export const addUser = (name, level) => {
    if (name.length > OPTIONS.maxNameLength) {
        name = name.slice(0, OPTIONS.maxNameLength);
    }

    return { type: 'ADD_USER_TO_SCORE', payload: { name, level } };
};

export const setEnemyName = randomName => ({
    type: 'RANDOM_ENEMY_NAME',
    payload: randomName
});

export const togglePopUp = () => ({ type: 'SWITCH_POP_UP' });

export const setBackGround = background => ({
    type: 'SET_RANDOM_BACKGROUND',
    payload: background
});

export const goToTasksWindow = () => ({
    type: 'GO_TO_TASKS_WINDOW',
    payload: 'task'
});

export const rightAnswer = () => ({
    type: 'TO_RIGHT_ANSWER_WINDOW',
    payload: 'rightAnswer'
});

export const wrongAnswer = () => ({
    type: 'TO_WRONG_ANSWER_WINDOW',
    payload: 'wrongAnswer'
});

export const setHealth = () => ({
    type: 'SET_HEALTH'
});

export const subtractHealth = flag => ({
    type: 'SUBTRACT_HEALTH',
    payload: flag
});

export const createNewLevel = (name, bg) => ({
    type: 'CREATE_NEW_LEVEL',
    payload: [name, bg]
});

export const createEnemy = enemy => ({
    type: 'CREATE_ENEMY',
    payload: enemy
});

export const enemyAction = action => ({
    type: 'ENEMY_ACTION',
    payload: action
});

export const heroAction = action => ({
    type: 'HERO_ACTION',
    payload: action
});

export const addAudioEffect = src => ({
    type: 'ADD_AUDIO_EFFECT',
    payload: src
});

export const subtractAudioEffect = () => ({
    type: 'SUBTRACT_AUDIO_EFFECT'
});

export const toggleAttackButton = index => ({
    type: 'TOGGLE_ATTACK_BUTTON',
    payload: index
});

export const throwMistakeAlert = isVisible => ({
    type: 'THROW_MISTAKE_ALERT',
    payload: isVisible
});

export const killEnemy = bool => ({
    type: 'ENEMY_IS_DEAD',
    payload: bool
});
