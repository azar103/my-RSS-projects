import { HEALTH } from '../utils';

const initialState = {
    currentPage: 'homePage',
    score: [],
    popUpIsVisible: false,
    responseReceived: false,
    enemyState: 'stand',
    heroState: 'stand',
    mistakeAlert: { display: 'none' },
    enemyIsDead: false
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PREPARE_STORE': {
            const newStore = {
                popUpIsVisible: false,
                responseReceived: false,
                enemyState: 'stand',
                heroState: 'stand',
                enemyHealth: HEALTH.initial,
                userHealth: HEALTH.initial
            };
            return { ...state, ...newStore };
        }
        case 'START_GAME':
        case 'END_GAME':
        case 'GO_HOME':
            return { ...state, currentPage: action.payload };
        case 'SET_HEALTH':
            return {
                ...state,
                ...{ enemyHealth: HEALTH.initial, userHealth: HEALTH.initial }
            };
        case 'SUBTRACT_HEALTH': {
            if (action.payload) {
                const health = state.enemyHealth - HEALTH.piece;
                return { ...state, enemyHealth: health };
            } else {
                const health = state.userHealth - HEALTH.piece;
                return { ...state, userHealth: health };
            }
        }
        case 'ADD_USER_TO_SCORE':
            state.score.push(action.payload);
            return state;
        case 'THROW_MISTAKE_ALERT': {
            if (action.payload) {
                return {
                    ...state,
                    mistakeAlert: { display: 'flex' }
                };
            } else {
                return {
                    ...state,
                    mistakeAlert: { display: 'none' }
                };
            }
        }
        case 'RANDOM_ENEMY_NAME':
            return { ...state, enemyName: action.payload };
        case 'SWITCH_POP_UP': {
            if (!state.popUpIsVisible) {
                return {
                    ...state,
                    ...{
                        popUpIsVisible: !state.popUpIsVisible,
                        currentTaskWindow: 'skills'
                    }
                };
            }
            return { ...state, popUpIsVisible: !state.popUpIsVisible };
        }
        case 'SET_RANDOM_BACKGROUND':
            return { ...state, rndBackGround: action.payload };
        case 'GO_TO_TASKS_WINDOW':
            return { ...state, currentTaskWindow: action.payload };
        case 'TO_RIGHT_ANSWER_WINDOW':
            return { ...state, currentTaskWindow: action.payload };
        case 'TO_WRONG_ANSWER_WINDOW':
            return { ...state, currentTaskWindow: action.payload };
        case 'CREATE_NEW_LEVEL': {
            const user = state.score.pop();
            user.level = user.level + 1;
            state.score.push(user);
            return {
                ...state,
                ...{
                    enemyName: action.payload[0],
                    rndBackGround: action.payload[1],
                    enemyHealth: HEALTH.initial
                }
            };
        }
        case 'CREATE_ENEMY':
            return { ...state, enemy: action.payload };
        case 'ENEMY_ACTION': {
            if (action.payload === 'attack') {
                return { ...state, enemyState: 'attack' };
            } else if (action.payload === 'hurt') {
                return { ...state, enemyState: 'hurt' };
            } else if (action.payload === 'dying') {
                return { ...state, enemyState: 'dying' };
            }
            return { ...state, enemyState: 'stand' };
        }
        case 'HERO_ACTION': {
            if (action.payload === 'sword-attack') {
                return { ...state, heroState: 'sword-attack' };
            } else if (action.payload === 'throw-attack') {
                return { ...state, heroState: 'throw-attack' };
            } else if (action.payload === 'hurt') {
                return { ...state, heroState: 'hurt' };
            } else if (action.payload === 'dying') {
                return { ...state, heroState: 'dying' };
            }
            return { ...state, heroState: 'stand' };
        }
        case 'ADD_AUDIO_EFFECT':
            return { ...state, audioEffect: action.payload };
        case 'SUBTRACT_AUDIO_EFFECT':
            return { ...state, audioEffect: '' };
        case 'TOGGLE_ATTACK_BUTTON': {
            if (action.payload) {
                return { ...state, attackButtonIndex: 1 };
            } else {
                return { ...state, attackButtonIndex: 0 };
            }
        }
        case 'ENEMY_IS_DEAD':
            return { ...state, enemyIsDead: action.payload };
        default:
            return state;
    }
};
