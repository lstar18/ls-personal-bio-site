import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

/* eslint-disable max-len */
// const projects = [
//   {
//     title: 'Chatty Messaging App',
//     screenshot: 'https://i.imgur.com/ETNGSJ0.png',
//     description: 'This group project allows users to post a message to message app called "Chatty".  The user can select his or her name and then type a message into an input box.  When the message appears in the chat, the users name appears with a specific color, the timestamp, and a like and dislike button.  The user also has the option to include certain emojis in his or her message.  There is an option to delete each message as well as clear the page.  There is a maximum of 20 messages that can appear on the screen', // A good project description includes 'the what', 'the why', and 'the how'.
//     technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
//     available: true,
//     url: 'https://github.com/lstar18/chatty-venus-fly-traps', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
//     githubUrl: 'https://github.com/lstar18/chatty-venus-fly-traps',
//   },

//   {
//     title: 'Pinterest',
//     screenshot: 'https://i.imgur.com/IDErsTo.png',
//     description: 'This project allows the users to see boards they have created with pins attached to each board.  A user can see all of their boards or view single board.  They can also delete their boards or delete a single pin off of a board.', // A good project description includes 'the what', 'the why', and 'the how'.
//     technologiesUsed: 'HTML, SCSS, Vanilla JavaScript, Version Control with Github, Firebase',
//     available: true,
//     url: 'https://github.com/lstar18/pinterest', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
//     githubUrl: 'https://github.com/lstar18/pinterest',
//   },
//   {
//     title: 'Cool Project',
//     screenshot: 'http://gotoflashgames.com/files/file/033.jpg',
//     description: 'This is the best project', // A good project description includes 'the what', 'the why', and 'the how'.
//     technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
//     available: true,
//     url: 'https://github.com/nss-evening-cohort-8/js-part-deux', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
//     githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux',
//   },
//   {
//     title: 'Cool Project',
//     screenshot: 'http://gotoflashgames.com/files/file/033.jpg',
//     description: 'This is the best project', // A good project description includes 'the what', 'the why', and 'the how'.
//     technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
//     available: false,
//     url: 'https://github.com/nss-evening-cohort-8/js-part-deux', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
//     githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux',
//   },
//   {
//     title: 'Cool Project',
//     screenshot: 'http://gotoflashgames.com/files/file/033.jpg',
//     description: 'This is the best project', // A good project description includes 'the what', 'the why', and 'the how'.
//     technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
//     available: true,
//     // eslint-disable-next-line max-len
//     url: 'https://github.com/nss-evening-cohort-8/js-part-deux', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
//     githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux',
//   },
// ];

const getProjects = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/projects.json`)
    .then((response) => {
      const allProjects = response.data;
      const projects = [];
      Object.keys(allProjects).forEach((projectId) => {
        allProjects[projectId].id = projectId;
        projects.push(allProjects[projectId]);
      });
      resolve(projects);
    })
    .catch((err) => reject(err));
});


export default { getProjects };
