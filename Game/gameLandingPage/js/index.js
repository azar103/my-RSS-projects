const screenshots = document.querySelectorAll("figure");
const indicators = document.querySelectorAll(".indicators i");
const screenshotsContainer = document.querySelector(".screenshots");

const BUTTONS_CLASSES = {
    prevBut: "previous switch-button",
    nextBut: "next switch-button"
};

const toNextElem = (elem, indicator) => {
    let nextElement = elem.nextElementSibling;
    let nextIndicator = indicator.nextElementSibling;
    if (!nextElement) {
        [nextElement] = screenshots;
        [nextIndicator] = indicators;
    }
    elem.classList.toggle("visible");
    indicator.classList.toggle("combustion");
    nextElement.classList.toggle("visible");
    nextIndicator.classList.toggle("combustion");
};

const toPreviousElem = (elem, indicator) => {
    let prevElement = elem.previousElementSibling;
    let prevIndicator = indicator.previousElementSibling;
    if (!prevElement) {
        prevElement = screenshots[screenshots.length - 1];
        prevIndicator = indicators[indicators.length - 1];
    }
    elem.classList.toggle("visible");
    indicator.classList.toggle("combustion");
    prevElement.classList.toggle("visible");
    prevIndicator.classList.toggle("combustion");
};

screenshotsContainer.addEventListener("click", e => {
    const { className } = e.target;
    const currentVisibleElem = document.querySelector(".visible");
    const currentVisibleIndicator = document.querySelector(".combustion");
    if (className === BUTTONS_CLASSES.nextBut) {
        toNextElem(currentVisibleElem, currentVisibleIndicator);
    } else if (className === BUTTONS_CLASSES.prevBut) {
        toPreviousElem(currentVisibleElem, currentVisibleIndicator);
    }
});
