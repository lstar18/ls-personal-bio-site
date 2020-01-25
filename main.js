const project = [
{   title: "Cool Project", 
    screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: false,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
  },

{ title: "Cool Project", 
  screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
  description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
  technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
  available: true,
  url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
  githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
},

  { title: "Cool Project", 
    screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
  },

  { title: "Cool Project", 
    screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: false,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
  },

  { title: "Cool Project", 
    screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
  }
]
  const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
    };
    
    const createProjectCards = () => {
        let domString = '';
        for(let i= 0; i <project.length; i++) {
          if (project[i].available != false) {
            domString += `<div class="cards">`;
            domString += `<h2 class="title"> ${project[i].title}</h2>`;
            domString += `<img src="${project[i].screenshot}" alt="A screenshot of a ${project[i].title}" class="center">`;
            domString += `<p class="description"> ${project[i].description}</p>`;
            domString += `<p class="technologies"> ${project[i].technologiesUsed}</p>`;
            domString += `<p class="url"> ${project[i].url}</p>`;
            domString += `<p class="giturl"> ${project[i].githubUrl}</p>`;
            domString += `</div>`;
        }
      }
    printToDom('projectsPage', domString);
    };
    
    createProjectCards();