import React from 'react';

// Component Imports
import Navbar from './UI/Navbar/Navbar'
import Dashboard from './Views/Dashboard/Dashboard'
import ProjectDetails from './Views/Project/ProjectDetails'
import SignIn from './Views/Authentication/SignIn'
import SignUp from './Views/Authentication/SignUp'
import CreateProject from './Views/Project/CreateProject'

// Routing Imports
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/project/:project_id' component={ProjectDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateProject} />

        </Switch>
      </div>  
    </BrowserRouter>
  );
}

export default App;

