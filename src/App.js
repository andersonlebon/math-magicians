import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/home';
import Navbar from './components/navbar';
import Quote from './components/quotes';

import './Sass/app.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main className="font">
        <Route path="/" component={Navbar} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/calculator" component={Calculator} />
          <Route path="/quotes" component={Quote} />
        </Switch>
      </main>
    );
  }
}

export default App;
