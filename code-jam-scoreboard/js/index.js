const form = document.querySelector('form');
const demoRadioButton = document.querySelector('.demo');
const rssRadioButton = document.querySelector('.rss');
const table = document.querySelector('table');
const ctx = document.querySelector('.chart').getContext('2d');
const config = {
    type: 'line',
    data: {
        labels: puzzles,
        datasets: []
    },
    options: {
        title: {
            display: true,
            text: 'Diagram'
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true
                    }
                }
            ]
        }
    }
};
const myChart = new Chart(ctx, config);

form.addEventListener('click', switchSession);
table.addEventListener('click', chooseUsers);

//функция для переключения между сессиями
function switchSession(event) {
    const elementClass = event.target.classList[0];

    if (elementClass === 'demo') {
        rssRadioButton.checked = false;
        render(1);

        addElementsToConfig({});
    } else if (elementClass === 'rss') {
        demoRadioButton.checked = false;
        render(0);

        addElementsToConfig({});
    }
}

//функция отображения таблицы с данными
function render(session) {
    let template = `<tr>
        <th>Comparison</th>
        <th class="name">GitHub</th>
        <th>${puzzles[0]}</th>
        <th>${puzzles[1]}</th>
        <th>${puzzles[2]}</th>
        <th>${puzzles[3]}</th>
        <th>${puzzles[4]}</th>
        <th>${puzzles[5]}</th>
        <th>${puzzles[6]}</th>
        <th>${puzzles[7]}</th>
        <th>${puzzles[8]}</th>
        <th>${puzzles[9]}</th>
        <th>Total time</th>
    </tr>`;
    sessionsInfo[session].forEach(element => {
        template += generateRow(element);
        element.totalTime = 0;
    });

    table.innerHTML = template;
}

//функция генерации каждой строки таблицы с данными
function generateRow(info) {
    let row = `<tr><td><input type="checkbox"></td>
    <td class="name">${info.name}</td>`;

    const addTime = time => {
        info.totalTime += +time;
    };

    info.solutions.forEach(solution => {
        if (solution) {
            row += isCorrect(solution, addTime);
        } else {
            addTime(150);
            row += `<td>${150}</td>`;
        }
    });

    return row + `<td>${info.totalTime}</td></tr>`;
}

//функция проверки на коректность решения
function isCorrect(taskSolution, add) {
    if (taskSolution.correct === 'Correct') {
        add(taskSolution.time);
        return `<td>${taskSolution.time}<span>${taskSolution.code}</span></td>`;
    }
    add(150);
    return `<td>150<span>Incorrect</span></td>`;
}

//выбрать юзеров для отображения на графике
function chooseUsers(event) {
    const element = event.target;

    if (element.nodeName === 'INPUT') {
        if (document.querySelectorAll('.checked').length < 10) {
            element.classList.toggle('checked');
            prepareChartData(document.querySelectorAll('.checked'));
        } else {
            element.checked = false;
            element.classList.remove('checked');
            prepareChartData(document.querySelectorAll('.checked'));
        }
    }
}

//подготовка данных для графика
function prepareChartData(arr) {
    const result = {};

    arr.forEach(elem => {
        const arrCells = elem.parentNode.parentNode.children;

        result[arrCells[1].textContent] = [];
        for (let i = 2; i < 12; i++) {
            result[arrCells[1].textContent].push(
                parseInt(arrCells[i].textContent)
            );
        }
    });
    addElementsToConfig(result);
}

// добавляем данные в config и обнавляем графики
function addElementsToConfig(obj) {
    config.data.datasets.length = 0;

    if (Object.keys(obj).length) {
        for (let key in obj) {
            const color = generateColor();
            const data = {
                label: key,
                data: obj[key],
                backgroundColor: color,
                borderColor: color,
                borderWidth: 2,
                fill: false
            };
            config.data.datasets.push(data);
            myChart.update();
        }
    }
    myChart.update();
}

//генерация рандомного цвета
function generateColor() {
    let color = '#';

    for (let i = 0; i < 3; i++) {
        color += Math.floor(Math.random() * 255).toString(16);
    }

    return color;
}
