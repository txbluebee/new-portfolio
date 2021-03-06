// import seattleImg from '../img/cleanseattle.png';
// import studyImg from '../img/studybuddy.png';
// import questionImg from '../img/question.png';
// import foodplanner from '../img/foodplanner.png';
// import bmiImg from '../img/bmi.png';
// import cameoImg from '../img/cameo.png';
// import travelImg from '../img/taiwantravel.png';
// import reactImg from '../img/reactproject.png';
// import smileImg from '../img/smiles.jpg';
// import blstoreImg from '../img/blstore.png';

const projects = [
  {
    id: 1,
    title: "B&L Burger",
    category: "All, JavaScript",
    imgUrl: './resources/img/blburger.png',
    link: 'https://blburger.herokuapp.com/',
    content: "Express JS, firebase"
  },
  {
    id: 2,
    title: "Clean up Seattle",
    category: "All, Angular",
    imgUrl: './resources/img/cleanseattle.png',
    link: 'https://clean-up-seattle.firebaseapp.com/',
    content: " Angular Js, Google Map api"
  },
  {
    id: 3,
    title: "Study Buddy",
    category: 'All, Ruby',
    imgUrl: './resources/img/studybuddy.png',
    link: 'https://study-budddy.herokuapp.com/',
    content: "Ruby, Postgres SQL"
  },
  {
    id: 4,
    title: "Miles of Smile",
    category: 'All, Ruby',
    imgUrl: './resources/img/smiles.jpg',
    link: 'https://miles-of-smiles.herokuapp.com/',
    content: "Ruby on Rails, Restful API, SQL"
  },
  {
    id: 5,
    title: "B & L Clothing Store",
    category: 'All, Ruby',
    imgUrl: './resources/img/blstore.png',
    link: 'https://blshop.herokuapp.com/',
    content: "Ruby on Rails"
  },
  {
    id: 6,
    title: "3 in 1 React Project",
    category: 'All, React',
    imgUrl: './resources/img/reactproject.png',
    link: 'http://react-projects.surge.sh/',
    content: "React, Redux, Restful API, Ajax"
  },
  {
    id: 7,
    title: "Taiwan Travel Site",
    category: 'All, JavaScript',
    imgUrl: './resources/img/taiwantravel.png',
    link: 'https://txbluebee.github.io/kaohsiung_taiwan_travel/',
    content: "Vanilla JavaScript"
  },
  {
    id: 8,
    title: "BMI Calculator",
    category: 'All, JavaScript',
    imgUrl: './resources/img/bmi.png',
    link: 'https://txbluebee.github.io/bmi-calculator-firebase/',
    content: "JavaScript, Firebase"
  },
  {
    id: 9,
    title: "Landing Page",
    category: 'All, JavaScript',
    imgUrl: './resources/img/cameo.png',
    link: 'https://txbluebee.github.io/bootstrap4-landing-page/',
    content: "HTML, CSS, Bootstrap"
  },
  {
    id: 10,
    title: "Question Channel",
    category: 'All, JavaScript',
    imgUrl: './resources/img/question.png',
    link: 'https://question-channel.firebaseapp.com/',
    content: "Ember JS, Bootstrap 4, Firebase"
  },
  {
    id: 11,
    title: "Food Planner",
    category: 'All, JavaScript',
    imgUrl: './resources/img/foodplanner.png',
    link: 'https://benjpac.github.io/food_planner/',
    content: "JavaScript, HTML, CSS"
  }
];




const projectAll = document.querySelector('.projects');


function displayProject(project) {
  return `
    <div class="col-12 col-sm-6 col-lg-3">
      <a href=${project.link} class="card-link" target="_blank">
        <div class="card">
          <img class="card-img-top" src=${project.imgUrl} alt="Card image cap">
          <div class="card-body">
            <div class="h6">${project.title}</div>
            <span class="text-truncate">${project.content}</span>
          </div>
        </div>
      </a>
    </div>
    `
}

function displayProjects(projects) {
  let defaultProjects = "";
  projects.forEach(project => {
    defaultProjects += displayProject(project);
  })
  projectAll.innerHTML = defaultProjects;
}

displayProjects(projects);

const portfolioBtn = document.querySelector('.portfolio-btn');
const portfolioMenu = document.querySelector('.custom-select');

portfolioBtn.addEventListener('click', displayClickProject);
portfolioMenu.addEventListener('change', displaySelectProject);

function displayClickProject(e) {
  e.preventDefault();
  if (e.target.nodeName !== "A") { return };
  const clickValue = e.target.innerText;
  let projectString = "";
  projects.forEach(project => {
    if (project.category.includes(clickValue)) {
      projectString += displayProject(project);
    }
  })
  projectAll.innerHTML = projectString;
}

function displaySelectProject() {
  let projectString = "";
  projects.forEach(project => {
    if (project.category.includes(this.value)) {
      projectString += displayProject(project);
    }
  })
  projectAll.innerHTML = projectString;
}

