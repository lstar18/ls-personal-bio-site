import utils from '../../helper/utils/utils';
import projectData from '../../helper/data/projectData';
import './projectCards.scss';


const createProjectCards = () => {
  projectData.getProjects().then((projects) => {
    console.error('projects', projects);
    let domString = '';
    domString += '<div class="project-title col-12 text-center">';
    domString += '<h1> PROJECTS </h1>';
    domString += '</div>';
    projects.forEach((project) => {
      if (project.available !== false) {
        domString += '<div class="card col-4 offset-2 m-5">';
        domString += `<h2 class="card-title text-center">${project.title}</h2>`;
        domString += `<img class="card-img-top" src="${project.screenshot}" alt="Card image cap">`;
        domString += '<div class="card-body">';
        domString += '<div class="overlay">';
        domString += '<div class="text">';
        domString += `<p class="card-desprection">Description: ${project.description}</p>`;
        domString += `<p class="technologies"> Tech Used: ${project.technologiesUsed}</p>`;
        domString += `<a href="${project.url}" class="btn btn-outline-secondary col-6 offset-3 mb-2"><i class="fas fa-globe"></i></i></a>`;
        domString += `<a href="${project.githubUrl}" class="btn btn-outline-secondary col-6 offset-3"><i class="fab fa-github-square"></i></a>`;
        domString += '</div>';
        domString += '</div>';
        domString += '</div>';
        domString += '</div>';
      }
      utils.printToDom('projectsPage', domString);
    });
  }).catch((err) => console.error('broken projects', err));
};

export default { createProjectCards };
