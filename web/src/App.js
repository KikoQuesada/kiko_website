import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import AboutMe from './components/about-me/AboutMe';
import WorkExperience from './components/work-experience/WorkExperience';
import ProjectsList from './components/projects-list/ProjectsList';
import './App.scss';
import { Link } from 'react-router-dom';




function App() {
  return (
    <Router>
      <div className="d-flex flex-row align-items-center">
        <Link to="/"><img
          className="img-container"
          src="https://res.cloudinary.com/getapet/image/upload/v1621243390/Kiko%20Website/Logo_KQ_white_l2pjrf.png"
          alt="KQ"
        /></Link>
        <a target="blank" href="https://github.com/KikoQuesada"><img className="social-icon" src="https://res.cloudinary.com/getapet/image/upload/v1621244337/Kiko%20Website/kisspng-github-pages-logo-repository-fork-github-logo-1-magentys-5b69de71b51265.8586076615336648817417_fywpru.png" alt="github"></img></a>
        <a target="blank" href="https://www.linkedin.com/in/franciscoquesadacabello/"><img className="social-icon" src="https://res.cloudinary.com/getapet/image/upload/v1621245114/Kiko%20Website/kisspng-line-angle-font-5b5921b96be2c6.6155346715325679934419_en3mow.png" alt="linkedin"></img></a>
        <a target="blank" href="https://twitter.com/_Kiko_7"><img className="social-icon" src="https://res.cloudinary.com/getapet/image/upload/v1621245016/Kiko%20Website/kisspng-precision-trenching-inc-service-business-project-twitter-logo-white-5b517cce842bf6.4311764715320670225414_ecne8z.png" alt="twitter"></img></a>
      </div>
      <div className="container">
        <div className="pt-5 row">
          <Switch>
            <Route exact path="/" component={AboutMe} />
            <Route exact path="/workexperience" component={WorkExperience} />
            <Route exact path="/projects" component={ProjectsList} />
          </Switch>
          <Navbar />
        </div>
      </div>
    </Router>
  );
}

export default App;
