'use strict';

var gitlab = require('node-gitlab');

var client = gitlab.create({
  api: 'https://gitlab.com/api/v4',
  privateToken: 'K1Hdz5g9SqwuW7btpkzh'
});
client.projects({ id: 7642571 }, function (err, milestones) {
  console.log(err, milestones);
});
// import Gitlab from 'gitlab';

// const api = new Gitlab({
//   url:   'http://gitlab.com', // Defaults to http://gitlab.com
//   token: 'K1Hdz5g9SqwuW7btpkzh' // Can be created in your profile.
// });

// // Listing users
// // let users = api.Users.all();

// // Or using Promise-Then notation
// api.Projects.all()
// .then((projects) => {
//     console.log(projects)