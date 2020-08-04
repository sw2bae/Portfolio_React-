import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
        <Route path={process.env.PUBLIC_URL + '/about'} component={About} />
        <Route exact path={process.env.PUBLIC_URL + '/projects'} component={Projects} />
        <Route exact path={process.env.PUBLIC_URL + '/contact'} component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
