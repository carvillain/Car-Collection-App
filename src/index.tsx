import React from 'react';
import ReactDOM from 'react-dom';
import { Home, Garage, SignIn } from './components';
import './styles.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>

        <Route exact path='/'>
          <Home title={'Car Collection'}/>
        </Route>

        <Route path='/garage'>
          <Garage></Garage>
        </Route>

        <Route path='/signin'>
          <SignIn></SignIn>
        </Route>

      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
