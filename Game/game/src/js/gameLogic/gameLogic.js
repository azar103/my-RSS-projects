import { HomePage, EndPage, FightingPage } from '../pages';
import {
    getRandomNumber,
    sleep,
    TIME_DELAY,
    OPTIONS,
    ENEMY_PARTS_NAME,
    ALL_TASKS
} from '../utils';

const getTaskComponent = () => ALL_TASKS[getRandomNumber(0, ALL_TASKS.length)];

const routGamePage = namePage => {
    switch (namePage) {
        case 'homePage':
            return HomePage;
        case 'fightingPage':
            return FightingPage;
        case 'scorePage':
            return EndPage;
        default:
            return null;
    }
};

const getUserInfo = score => {
    const user = score[score.length - 1];
    return user;
};

const getEnemyParts = async () => {
    const loadImage = async (name, number) => {
        return await import(`../../images/enemy/${name}/${name}_${number}.svg`);
    };

    const loadImagesGroup = async (name, count) => {
        let group = [];
        for (let i = 1; i <= count; i++) {
            group.push(await loadImage(name, i));
        }
        return group;
    };

    const enemy = {};
    for (let i = 0; i < ENEMY_PARTS_NAME.length; i++) {
        const part = await loadImagesGroup(
            ENEMY_PARTS_NAME[i],
            OPTIONS.countEnemyPart
        );
        enemy[ENEMY_PARTS_NAME[i]] = part;
    }

    return enemy;
};

const getEnemy = parts => {
    const enemy = {};
    for (let key in parts) {
        const part = parts[key];
        enemy[key] = part[getRandomNumber(0, part.length)];
    }
    return enemy;
};

const makeEnemy = async (enemy, createEnemy) => {
    const currentEnemy = getEnemy(enemy.parts);
    const enemyParts = { ...enemy, ...currentEnemy };
    await sleep(TIME_DELAY.changeEnemy);
    createEnemy(enemyParts);
};

export {
    routGamePage,
    getUserInfo,
    getEnemyParts,
    getEnemy,
    makeEnemy,
    getTaskComponent
};
