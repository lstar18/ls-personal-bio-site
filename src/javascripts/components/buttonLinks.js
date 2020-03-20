import 'bootstrap';
import utils from '../helper/utils/utils';

const buttonBuilder = () => {
  let domString = '';
  domString += '<button type="button" class="btn btn-outline-dark" id="navToBio"> Bio </button>';
  domString += '<button type="button" class="btn btn-outline-dark" id="navToTechnologies"> Technologies </button>';
  domString += '<button type="button" class="btn btn-outline-dark" id="navToProjects"> Projects </button>';
  utils.printToDom('navLinks', domString);
};


export default { buttonBuilder };
