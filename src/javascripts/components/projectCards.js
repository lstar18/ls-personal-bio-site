import utils from '../helper/utils/utils';
import projects from '../helper/data/projectData';

const createProjectCards = () => {
  const printCards = projects.getProjects();
  let domString = '';
  printCards.forEach((project) => {
    if (projects.available !== false) {
      domString += '<div class="cards">';
      domString += `<h2 class="title"> ${project.title}</h2>`;
      domString += `<img src="${project.screenshot}" alt="A screenshot of a ${project.title}" class="center">`;
      domString += `<p class="description"> ${project.description}</p>`;
      domString += `<p class="technologies"> ${project.technologiesUsed}</p>`;
      domString += `<p class="url"> ${project.url}</p>`;
      domString += `<p class="giturl"> ${project.githubUrl}</p>`;
      domString += '</div>';
    }
  });
  utils.printToDom('projectsPage', domString);
};

export default { createProjectCards };
