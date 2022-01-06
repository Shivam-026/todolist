import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from "./components/pages/List";
import Error from "./components/pages/Error"
import Update from "./components/users/Update";
import View from "./components/users/View";
import AddList from "./components/users/AddList";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/users/add" component={AddList}/>
        <Route exact path="/users/edit/:id" component={Update}/>
        <Route exact path="/users/:id" component={View}/>
        <Route component={Error}/>
        
      </Switch>
    </div>
  );
}

export default App;
 