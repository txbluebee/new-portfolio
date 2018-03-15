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
        title: "Clean up Seattle",
        category: "All, Angular",
        imgUrl: './resources/img/cleanseattle.png',
        link: 'https://clean-up-seattle.firebaseapp.com/', 
        content: " Angular Js, Google Map api"

    },
    {
        id: 2,
        title: "Study Buddy",
        category: 'All, Ruby',
        imgUrl: './resources/img/studybuddy.png',
        link: 'https://study-budddy.herokuapp.com/', 
        content: "Ruby, Postgres SQL"
    },
    {
        id: 3,
        title: "Miles of Smile",
        category: 'All, Ruby',
        imgUrl: './resources/img/smiles.jpg',
        link: 'https://miles-of-smiles.herokuapp.com/', 
        content: "Ruby on Rails, Restful API, SQL"
    },
    {
        id: 4,
        title: "B & L Clothing Store",
        category: 'All, Ruby',
        imgUrl: './resources/img/blstore.png',
        link: 'https://blshop.herokuapp.com/', 
        content: "Ruby on Rails"
    },
    {
        id: 5,
        title: "3 in 1 React Project",
        category: 'All, React',
        imgUrl: './resources/img/reactproject.png',
        link: 'http://react-projects.surge.sh/', 
        content: "React, Redux, Restful API, Ajax"
    },
    {
        id: 6,
        title: "Taiwan Travel Site",
        category: 'All, JavaScript',
        imgUrl: './resources/img/taiwantravel.png',
        link: 'https://txbluebee.github.io/kaohsiung_taiwan_travel/', 
        content: "Vanilla JavaScript"
    },
    {
        id: 7,
        title: "BMI Calculator",
        category: 'All, JavaScript',
        imgUrl: './resources/img/bmi.png',
        link: 'https://txbluebee.github.io/bmi-calculator/', 
        content: "Vanilla JavaScript"
    },
    {
        id: 8,
        title: "Landing Page",
        category: 'All, JavaScript',
        imgUrl: './resources/img/cameo.png',
        link: 'https://txbluebee.github.io/bootstrap4-landing-page/', 
        content: "HTML, CSS, Bootstrap"
    },
    {
        id: 9,
        title: "Question Channel",
        category: 'All, JavaScript',
        imgUrl: './resources/img/question.png',
        link: 'https://question-channel.firebaseapp.com/', 
        content: "Ember JS, Bootstrap 4, Firebase"
    },
    {
        id: 10,
        title: "Food Planner",
        category: 'All, JavaScript',
        imgUrl: './resources/img/foodplanner.png',
        link: 'https://benjpac.github.io/food_planner/', 
        content: "JavaScript, HTML, CSS"
    }
];




const projectAll = document.querySelector('.projects');


function displayProject(project){
    return `
    <div class="col-12 col-sm-6 col-lg-3">
      <a href=${project.link} class="card-link" target="_blank">
        <div class="card">
          <img class="card-img-top" src=${project.imgUrl} alt="Card image cap">
          <div class="card-body">
            <div class="h6">${project.title}</div>
            <span>${project.content}</span>
          </div>
        </div>
      </a>
    </div>
    `
}

function defaultProjects(){
    let defaultProjects = "";
    projects.forEach(project =>{
        // if (parseInt(project.id)<5){
            defaultProjects += displayProject(project);
    
        
    })
    projectAll.innerHTML = defaultProjects;
}

defaultProjects();

const defaultLink = document.querySelector('.card-link');

defaultLink.addEventListener('click', showDefaultProjects);

function showDefaultProjects(e){
    e.preventDefault();
    let defaultProjects = "";
    projects.forEach(project =>{
        if (parseInt(project.id)<5){
            defaultProjects += displayProject(project);
    
        } 
    })
    projectAll.innerHTML = defaultProjects;
}

// show projects by clicked link

const portfolioBtn = document.querySelector('.portfolio-btn');

portfolioBtn.addEventListener('click', displayClickProject);

function displayClickProject(e){
    e.preventDefault();
    if (e.target.nodeName !== "A"){return};
    const clickValue = e.target.innerText;
    console.log(clickValue);
    let projectString = "";
    projects.forEach(project =>{
        if (project.category.includes(clickValue)){
            projectString += displayProject(project);
        } 
    })
    projectAll.innerHTML = projectString;
}


