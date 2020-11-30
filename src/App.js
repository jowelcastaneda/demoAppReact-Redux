import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import ImageDetails from './components/projects/ImageDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'
import EditPage from './components/projects/EditPage'
import ImageRender from './components/projects/ImageRender'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/restaurant/:name/:id' component={ProjectDetails} />
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/create' component={CreateProject} />
            <Route exact path='/plan/edit/:id' component={EditPage} />
            <Route exact path='/:id' component={ImageRender} />
          </Switch>
        </div>
      </BrowserRouter>    
    );
  }
}
// const mapStateToProps = (state) => {
//   return {
//    id: state.project.projects.id
//   }
// }
export default withRouter(connect(null)(App));
