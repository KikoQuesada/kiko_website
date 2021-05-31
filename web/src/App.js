import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import AboutMe from './components/about-me/AboutMe';
import WorkExperience from './components/work-experience/WorkExperience';
import ProjectsList from './components/projects-list/ProjectsList';
import StudiesList from './components/studies-list/StudiesList';
import './App.scss';
import { useState, useEffect } from 'react';
import Loading from './components/commons/loading/Loading';
import Footer from './components/footer/Footer';




function App() {

  const [ loading, setLoading ] = useState({
    loading: true,
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading({
          loading: false, 
      })
  }, 2000)
  })

  if (loading.loading) {
    return <section className="loading-container-main"><Loading /></section>
  }


  return (
    <Router>
      <Navbar />
        <div className="pt-5">
          <Switch>
            <Route exact path="/" component={AboutMe} />
            <Route exact path="/workexperience" component={WorkExperience} />
            <Route exact path="/projects" component={ProjectsList} />
            <Route exact path="/studies" component={StudiesList} />
          </Switch>
          
        </div>
      
      <Footer />
    </Router>
  );
}

export default App;
