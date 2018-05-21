import React, { Component } from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
// import logo from './logo.svg';
import './App.css';

import Home from './containers/Home';
import Main from './containers/Main';

class App extends Component {

  render() {

    let fulluri = window.location.href;
    let origin = window.location.origin;
    let uri = "";
    let view = {};
    let home = true

    if (fulluri.length === origin.length+1 && fulluri[fulluri.length-1] === "/") {
      uri = origin;
    }
    else {
      uri = fulluri.substring(origin.length+1);
      home = false;
    }

    if (home) 
      view = <Home></Home>;
    else 
      view = <Main uri={uri}></Main>;

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div>
          <AppBar 
            id="app-appBar" 
            title="MyApp" 
            style={{position: "fixed", top: "0"}}
            showMenuIconButton={false}
          />
          <div style={{height: 64}}></div>

          <div className="appBody">
            {view}
            <div className="footer"></div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
