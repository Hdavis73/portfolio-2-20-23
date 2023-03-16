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


projectBoxes.forEach((projectBox) => {
  projectBox.addEventListener('click', () => {
    togglePopup(projectBox)
  })
    // let projectPopup = projectBox.querySelector('.project-popup-wrap');

    // projectPopup.classList.add('active');
    // document.querySelector('body').classList.add('no-scroll');
    
    // projectPopup.querySelector('button').addEventListener('click', () => {
    // projectPopup.classList.remove('active');
    // document.querySelector('body').classList.remove('no-scroll');

    // })
    
//   });
});

function togglePopup(projectBox){
    let projectPopup = projectBox.querySelector('.project-popup-wrap');


    projectPopup.classList.toggle('active');
    document.querySelector('body').classList.toggle('no-scroll');
}