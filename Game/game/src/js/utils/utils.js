import {
    BACKGROUND_CLASS,
    THIRD_ENEMY_NAME,
    SECOND_ENEMY_NAME,
    FIRST_ENEMY_NAME
} from './constants';

const getRandomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min) + min);

const isNameCorrect = (name, score) => {
    const names = score.map(user => user.name);
    if (!name || names.indexOf(name) > -1) {
        return false;
    }
    return true;
};

const chooseFitingBackground = previousBg => {
    let currentBg =
        BACKGROUND_CLASS[getRandomNumber(0, BACKGROUND_CLASS.length)];
    while (previousBg === currentBg) {
        currentBg =
            BACKGROUND_CLASS[getRandomNumber(0, BACKGROUND_CLASS.length)];
    }
    return currentBg;
};

const gemerateRandomName = () => {
    let name = '';
    name += FIRST_ENEMY_NAME[getRandomNumber(0, FIRST_ENEMY_NAME.length)] + ' ';
    name +=
        SECOND_ENEMY_NAME[getRandomNumber(0, FIRST_ENEMY_NAME.length)] + ' ';
    name += THIRD_ENEMY_NAME[getRandomNumber(0, FIRST_ENEMY_NAME.length)];
    return name;
};

const sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

const checkForEquality = (correctResult, currentResult, getResult) => {
    if (correctResult === currentResult) {
        getResult(true);
    } else {
        getResult(false);
    }
};

const checkForConsistency = (correctResult, currentResult, getResult) => {
    if (correctResult.indexOf(currentResult) >= 0) {
        getResult(true);
    } else {
        getResult(false);
    }
};

export {
    getRandomNumber,
    isNameCorrect,
    chooseFitingBackground,
    gemerateRandomName,
    sleep,
    checkForEquality,
    checkForConsistency
};
