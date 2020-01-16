# Kodflix

## Task
To develop a movie browsing web application using <b>HTML5</b>, <b>CSS3</b>,  <b>JavaScript</b>, <b>ReactJS</b>, <b>Node.js</b>  and <b>Express.js</b>. Also including additional dependencies via <b>NPM</b> such as nodemon, react-router and run-all. Use a <b>GitHub’s</b> version control to commit changes and deploy application to <b>Heroku</b>.  And edit code using <b>Visual Studio Code’s</b> The Integrated Development Environment.

## Summary
This application was developed using the latest and greatest technology,  utilising <b>React.JS</b> to take advantage of its helpful library of development tools and easy to maintain code with it’s flexible modular structure.  Also building individual parts of the application on both client-side and server-side improves development process.  <b>Node.JS</b> was used with the <b>Express.JS</b> framework, which allowed for the integration of frontend and backend servers to be merged and finally pushed to <b>Heroku</b>.

## Functionality

### FrontEnd:
<ul>
    <li>Animated title overlays for each movie cover.</li>
    <li>A dynamic application being mobile friendly and able to be viewed on much larger screens such as UHD, and 4K.</li>
    <li>Routing for navigation allows the user to access other content on the site.</li>
</ul>

### BackEnd:
<ul>
  <li>Node.Js is used with the Express.JS framework.</li>
  <li>The list of shows are returned from the backend using the common.js  export/require pattern, this enables better security as data       running in the browser is not really safe.</li>
  <li>The backend server allows integration with third party components like saving the list of shows in a database.</li>
  <li>Included hot reloading with nodemon for the backend server to automatically refresh, when introducing changes within the code</li>
  <li>Front and backend server are able to be executed with a single NPM command by adding run-all to the package.json dependencies, so       they run parallel with each other.</li>

Integrated front and back end data by enabling a proxy using the fetch api, to call data from the frontend.  Then Merged backend and frontend servers on a single port to push to <b>Heroku</b>.
</ul>

## Design
The application is a dynamic mobile friendly website, the first thing the user see's is the image's of the movie's, having a choice to select an image to view information about the film. Their are animated  pop up overlays used to indicate to the user they are currently hovering over the image before selecting.

## TechStack
<ul>
  <li>Html5</li>
  <li>Css3</li>
  <li>Javascript</li>
  <li>React.js</li>
  <li>Node.JS</li>
  <li>Express.JS</li>
  <li>NPM</li>
  <li>Heroku</li>
  <li>Git</li>
</ul>






