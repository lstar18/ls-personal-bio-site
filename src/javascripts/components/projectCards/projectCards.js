import utils from '../../helper/utils/utils';
import projects from '../../helper/data/projectData';
import './projectCards.scss';

const createProjectCards = () => {
  const printCards = projects.getProjects();
  let domString = '';
  printCards.forEach((project) => {
    if (projects.available !== false) {
      domString += '<div class="box">';
      domString += '<div class="card">';
      domString += '<div class="imgBx">';
      domString += `<img src="${project.screenshot}" alt="A screenshot of a ${project.title}" class="center">`;
      domString += '</div>';
      domString += '<div class="details">';
      domString += `<h2>${project.title}</h2>`;
      domString += `<p class="description"> ${project.description}</p>`;
      domString += `<p class="technologies"> ${project.technologiesUsed}</p>`;
      domString += `<p class="url"> ${project.url} </p>`;
      domString += `<p class="giturl"> ${project.githubUrl} </p>`;
      domString += '</div>';
      domString += '</div>';
    }
    utils.printToDom('projectsPage', domString);
  });
};

export default { createProjectCards };
