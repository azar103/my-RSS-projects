import {
    MathTask,
    CompareTask,
    EngTranslatioTask,
    ComposeWordTask,
    AntonymsTask,
    RusTranslatioTask,
    SortingTask,
    SynonymsTask,
    ComposePhraseTask,
    ColorTask
} from '../components/Tasks';

const ALL_TASKS = [
    MathTask,
    CompareTask,
    EngTranslatioTask,
    ComposeWordTask,
    AntonymsTask,
    RusTranslatioTask,
    SortingTask,
    SynonymsTask,
    ComposePhraseTask,
    ColorTask
];

const ANTONYMS = [
    ['active', 'passive'],
    ['small', 'big'],
    ['busy', 'free'],
    ['clean', 'dirty'],
    ['hot', 'cold'],
    ['dry', 'wet'],
    ['future', 'past'],
    ['evil', 'good'],
    ['top', 'bottom'],
    ['light', 'darkness'],
    ['lie', 'truth'],
    ['friend', 'enemy'],
    ['peace', 'war'],
    ['hell', 'paradise'],
    ['fast', 'slow'],
    ['right', 'left'],
    ['true', 'false']
];

const SYNONYMS = [
    ['amazing', 'incredible'],
    ['answer', 'response'],
    ['strong', 'powerful'],
    ['easy', 'simple'],
    ['boring', 'dull'],
    ['awful', 'horrible'],
    ['smart', 'wise'],
    ['beautiful', 'pretty'],
    ['brave', 'courageous'],
    ['begin', 'start'],
    ['shining', 'brilliant'],
    ['cry', 'shout'],
    ['famous', 'celebrated'],
    ['fast', 'speedy'],
    ['important', 'necessary'],
    ['right', 'correct']
];

const ENGLISH_DICTIONARY = [
    'plane',
    'Bird',
    'Book',
    'Car',
    'Dog',
    'Cat',
    'Fish',
    'Horse',
    'Money',
    'Pen',
    'Tree',
    'Sun',
    'Mountain',
    'Watch',
    'Fox',
    'Monkey',
    'Elephant',
    'Flower',
    'Chair',
    'Apple'
];

const RUSSIAN_DICTIONARY = [
    ['самолет', 'самолетик'],
    ['птица', 'птичка'],
    ['книга', 'книжка', 'книжечка'],
    ['машина', 'машинка'],
    ['собака', 'собачка', 'щенок'],
    ['кот', 'котик', 'котенок', 'кошка'],
    ['рыба', 'рыбка'],
    ['лошадь', 'лошадка'],
    ['деньги', 'денежки'],
    ['ручка'],
    ['дерево', 'деревце'],
    ['солнце', 'солнышко'],
    ['гора'],
    ['часы', 'часики'],
    ['лиса', 'лисичка'],
    ['обезьяна', 'обезьянка'],
    ['слон', 'слоник'],
    ['цветок', 'цветочек'],
    ['стул', 'стулик'],
    ['яблоко', 'яблочко']
];

const COLORS = [
    ['#ff0000', 'red'],
    ['#000000', 'black'],
    ['#ffffff', 'white'],
    ['#ee82ee', 'violet'],
    ['#008000', 'green'],
    ['#ffff00', 'yellow'],
    ['#0000ff', 'blue'],
    ['#ffc0cb', 'pink'],
    ['#808080', 'gray'],
    ['#633a0b', 'brown']
];

const BACKGROUND_CLASS = [
    'fighting-page first-background',
    'fighting-page second-background',
    'fighting-page third-background',
    'fighting-page fourth-background',
    'fighting-page fifth-background'
];

const FIRST_ENEMY_NAME = [
    'Страшный',
    'Злобный',
    'Ужасный',
    'Тощий',
    'Глупый',
    'Дерзкий',
    'Свирепый'
];

const SECOND_ENEMY_NAME = [
    'Огр',
    'Гном',
    'Орк',
    'Гоблин',
    'Демон',
    'Голем',
    'Эльф'
];

const THIRD_ENEMY_NAME = [
    'Саня',
    'Димон',
    'Колян',
    'Серега',
    'Макс',
    'Михаил',
    'Жека'
];

const ENGLISH_PHRASES = [
    'Kate likes dogs',
    'There is my house',
    'My name is Paul',
    'I don’t like honey',
    'I like this book.',
    'My sister is sleeping',
    'We live in the city centre',
    'She likes playing chess',
    'My father is a doctor',
    'The weather is perfect',
    'You have come very fast',
    'There is a book on the table',
    'The sun rises in the east',
    'Alice is my friend',
    'I am not ready yet',
    'The sun was rising in the sky'
];

const HEALTH = {
    zero: 0,
    initial: 100,
    piece: 20
};

const OPTIONS = {
    initialLevel: 0,
    countEnemyPart: 3,
    maxNameLength: 15
};

const TIME_DELAY = {
    changeEnemy: 2500,
    enemyWins: [2100, 2700],
    heroWins: [1100, 2400, 200],
    closeMistakeAlert: 2000,
    beforeAttack: 1000,
    enemyAttack: [1000, 300, 100, 200, 1800],
    throwHeroAttack: [1000, 450, 950, 100, 500],
    swordHeroAttack: [1000, 1100, 800, 200, 400]
};

const URLS = {
    enemyWins: './audio/enemyWins.mp3',
    heroWins: './audio/heroWins.mp3',
    heroAttack: './audio/heroAttack.mp3',
    enemyAttack: './audio/enemyAttack.mp3'
};

const ENEMY_PARTS_NAME = [
    'head',
    'body',
    'handLeft',
    'handRight',
    'legLeft',
    'legRight'
];

export {
    ENGLISH_DICTIONARY,
    RUSSIAN_DICTIONARY,
    BACKGROUND_CLASS,
    THIRD_ENEMY_NAME,
    SECOND_ENEMY_NAME,
    FIRST_ENEMY_NAME,
    ANTONYMS,
    SYNONYMS,
    ENGLISH_PHRASES,
    HEALTH,
    TIME_DELAY,
    URLS,
    OPTIONS,
    ENEMY_PARTS_NAME,
    ALL_TASKS,
    COLORS
};
