import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import Weather from "./components/Weather";

import {
  BrowserRouter as Router,
  Switch, // Just Use Routes instead of ""
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App =()=>{
  const pageSize = 19;
  const [Progress, setProgress] = useState(0)
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

    return (
      <div>
        <Router>
          <NavBar mode={mode} toggleMode={toggleMode} />
          <LoadingBar
            color='#f11946'
            progress={Progress} />
          <Switch>
          <div className="App" id={mode} >
            <Route exact path="/">
              <News setProgress ={setProgress} key="general" pageSize={pageSize} country="in" category="general" mode={mode} />
            </Route>
            <Route exact path="/sports">
              <News setProgress ={setProgress} key="sports" pageSize={pageSize}  country="in" category="sports" />
            </Route>
            <Route exact path="/business">
              <News setProgress ={setProgress} key="business" pageSize={pageSize}  country="in" category="business" />
            </Route>
            <Route exact path="/health">
              <News setProgress ={setProgress} key="health" pageSize={pageSize}  country="in" category="health" />
            </Route>
            <Route exact path="/technology">
              <News setProgress ={setProgress} key="technology" pageSize={pageSize}  country="in" category="technology" />
            </Route>
            <Route exact path="/science">
              <News setProgress ={setProgress} key="science" pageSize={pageSize}  country="in" category="science" />
            </Route>
            <Route exact path="/entertainment">
              <News setProgress ={setProgress} key="entertainment" pageSize={pageSize}  country="in" category="entertainment" />
            </Route>
            <Route exact path="/GetWeather">
              <Weather/>
            </Route>
          </div>
          </Switch>
        </Router>
      </div>
    );
  }

export default App;
