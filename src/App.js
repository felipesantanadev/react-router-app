import React from 'react';
import logo from './logo.svg';
import Navbar from './components/navbar';
import Home from './components/home';
import Items from './components/items';
import ItemDetail from './components/item-detail';
import About from './components/about'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <main className="app-content">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/items" exact component={Items} />
          <Route path="/items/:id" component={ItemDetail} />
          <Route path="/about" exact component={About} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
