import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Page from "./Page";
import Navbar from "./Navbar";
import Footer from "./Footer";
import config from "./config";
import { isPage } from "./types";

function App() {
  return (
      <Router>
          <div className="nav">
            <Navbar/>
          </div>
          <div className="main">
            <Switch>
                {config.sections.map(section => {
                  if (isPage(section)) {
                    return <Route exact path={section.path} key={section.name}>
                        <Page {...section} />
                    </Route>
                  } else {
                    return section.pages.map(page => {
                      return <Route exact path={page.path} key={page.name}>
                          <Page {...page}/>
                      </Route>
                    })
                  }
                })}
            </Switch>
          </div>
          <div className="footer">
            <Footer/>
          </div>
      </Router>
  );
}

export default App;
