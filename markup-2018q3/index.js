let slider_elements = document.getElementsByClassName('slider');
let indicators = document.getElementsByClassName('slider_meny');
let elementsArray = slider_elements[0].children;
let indicatorsArray = indicators[0].children;

elementsArray[0].classList.toggle('show_inf');
indicatorsArray[0].classList.toggle('bg_ind');

let currentElem = 0;
let currentInd = 0;

indicatorsArray[0].addEventListener('click', function() {
  if (currentElem != 0) {
    elementsArray[0].classList.toggle('show_inf');
    indicatorsArray[0].classList.toggle('bg_ind');

    elementsArray[currentElem].classList.toggle('show_inf');
    indicatorsArray[currentInd].classList.toggle('bg_ind');
    currentElem = 0;
    currentInd = 0;
  }
});

indicatorsArray[1].addEventListener('click', function() {
  if (currentElem != 1) {
    elementsArray[1].classList.toggle('show_inf');
    indicatorsArray[1].classList.toggle('bg_ind');

    elementsArray[currentElem].classList.toggle('show_inf');
    indicatorsArray[currentInd].classList.toggle('bg_ind');
    currentElem = 1;
    currentInd = 1;
  }
});

indicatorsArray[2].addEventListener('click', function() {
  if (currentElem != 2) {
    elementsArray[2].classList.toggle('show_inf');
    indicatorsArray[2].classList.toggle('bg_ind');

    elementsArray[currentElem].classList.toggle('show_inf');
    indicatorsArray[currentInd].classList.toggle('bg_ind');
    currentElem = 2;
    currentInd = 2;
  }
});
