import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import  Home  from './home';
import  Music  from './music';
import  SevenDay  from './sevenDay';
import  Events  from './events';
import  About  from './about';
import  Contact  from './contact';
import Photos from './photos';

import NavigationBar from './components/navbar';


import './App.css';

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
        <Router>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/music' component={Music} />
            <Route path='/sevenDay' component={SevenDay} />
            <Route path='/events' component={Events} />
            <Route path='/photos' component={Photos} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </Router>
    </React.Fragment>
  );
}

export default App;
