
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListPage from './components/ListPage/ListPage';
import DetailPage from './components/DetailPage/DetailPage';


import Navbar from './components/ListPage/navbar';

const App = () => {
  return (
    <Router>
      <div>
      <Navbar/>
      
        <Switch>
          <Route path="/" exact component={ListPage} />
          <Route path="/product/:id" component={DetailPage} />
          
        </Switch>
        
      </div>
    </Router>
  );
};

export default App;
