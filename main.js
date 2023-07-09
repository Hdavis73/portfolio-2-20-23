const tabsContainer = document.querySelector('.about-tabs');
let aboutSection = document.querySelector('.about-section');

tabsContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('tab-item') && !e.target.classList.contains('active')) {
    tabsContainer.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');

    const target = e.target.getAttribute('data-target');

    aboutSection.querySelector('.tab-content.active').classList.remove('active');
    aboutSection.querySelector(target).classList.add('active');
  }
});

// ======================== project popup =========

const projectBoxes = Array.from(document.querySelectorAll('.project'));
const closeBtns = Array.from(document.querySelectorAll('.x'));

projectBoxes.forEach((projectBox) => {
  projectBox.addEventListener('click', () => {
    togglePopup(projectBox);
  });
});

closeBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    closePopup(btn);
  });
});

function togglePopup(projectBox) {
  let projectPopup = projectBox.parentNode.querySelector('.project-popup-wrap');

  projectPopup.classList.add('active');
  document.querySelector('body').classList.add('no-scroll');
}

function closePopup(btn) {
  const projectPopup = btn.parentNode.parentNode;

  projectPopup.classList.remove('active');
  document.querySelector('body').classList.remove('no-scroll');
}

// =================== project description ==============

projectBoxes.forEach((project) => {
  createShortDescription(project);
});

function createShortDescription(project) {
  const shortProjectDesciption = project.querySelector('div').querySelector('p');
  const fullProjectDescription = project.nextElementSibling.firstElementChild.querySelector('p');
  const textArray = fullProjectDescription.innerText.split(' ').slice(0, 38);

  shortProjectDesciption.innerText = textArray.join(' ');
}
