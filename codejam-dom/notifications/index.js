const componentUI = document.querySelector('.ui-component');
const closeBtn = document.querySelector('.close-button');
const slider = document.querySelector('.slider');
const sliderIndicators = document.querySelector('.tip-indicators');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const disconnexion = document.querySelector('.disconnexion');

const ARR_USEFUL_INFORMATION = [
  'More then 60% of emails we send do not require a response. Use "No response needed" to make sure recipients know that a response is unnecessary.',
  'More then 60% of emails we send do not . Use "No response needed" to make sure recipients know that a response is unnecessary.',
  'More then 60% of emails equire a response. Use "No response needed" to make sure recipients know that a response is unnecessary.',
  'More then 60% of emails we send do not require a response. Use  sure recipients know that a response is unnecessary.',
  'More then 60% of emails we send do not require a response. Use "No response needed" sure recipients know that a response is unnecessary.',
];
const countElements =
  ARR_USEFUL_INFORMATION.length > 8 ? 8 : ARR_USEFUL_INFORMATION.length;
let current = 0;

/* Widget will be visible if the condition is true  */
if (!localStorage.getItem('invisibility')) {
  setTimeout(() => {
    componentUI.style.display = 'block';
  }, 5000);

  /* dynamic generation TIPS and indicators */
  (function IIFE(length, arr, tipsList, indicatorsList) {
    for (let i = 0; i < length; i += 1) {
      const elem = document.createElement('li');
      if (arr[i].length > 150) {
        elem.textContent = arr[i].slice(0, 150).concat('...');
      } else {
        elem.textContent = arr[i];
      }
      tipsList.appendChild(elem);
      const indicator = document.createElement('li');
      indicatorsList.appendChild(indicator);
    }
    const visableElem = tipsList.firstChild;
    const currentIndicator = indicatorsList.firstChild;
    visableElem.classList.add('show-inf-block');
    currentIndicator.classList.add('current-indicator');
  })(countElements, ARR_USEFUL_INFORMATION, slider, sliderIndicators);
}

/* function close the Widget and add a visibility value to localStorage */
function close() {
  componentUI.style.display = 'none';
  if (disconnexion.checked) {
    localStorage.setItem('invisibility', true);
  }
}

/* function to go to the previous TIP  */
function goToPrev() {
  slider.children[current].classList.toggle('show-inf-block');
  sliderIndicators.children[current].classList.toggle('current-indicator');
  current -= 1;
  if (current < 0) {
    current = countElements - 1;
  }
  slider.children[current].classList.toggle('show-inf-block');
  sliderIndicators.children[current].classList.toggle('current-indicator');
}

/* function to go to the next TIP  */
function goToNext() {
  slider.children[current].classList.toggle('show-inf-block');
  sliderIndicators.children[current].classList.toggle('current-indicator');
  current += 1;
  if (current >= countElements) {
    current = 0;
  }
  slider.children[current].classList.toggle('show-inf-block');
  sliderIndicators.children[current].classList.toggle('current-indicator');
}

/* event handlers  */
closeBtn.addEventListener('click', close);

nextBtn.addEventListener('click', goToNext);

prevBtn.addEventListener('click', goToPrev);

document.addEventListener('keydown', event => {
  switch (event.key) {
    case 'Escape': {
      close();
      break;
    }
    case 'ArrowRight': {
      goToNext();
      break;
    }
    case 'ArrowLeft': {
      goToPrev();
      break;
    }
    default: {
      break;
    }
  }
});
