

import { Fragment } from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './navBar';
import ActivityDashboard from '../../Features/activities/dashboards/ActivityDashboard';
import { observer } from 'mobx-react-lite';
import { Route, useLocation } from 'react-router-dom';
import HomePage from '../../Features/Home/HomePage';
import ActivityForm from '../../Features/activities/form/ActivityForm';
import ActivityDetails from '../../Features/activities/details/ActivityDetails';


function App() {

  const location=useLocation();

// Fragment element or Div used when we returning more than one object like Navbar or Container,
// We can place <> which also means div or segment
// if we have single object, we can use that object directly without placing in div or Fragment
  return (
     <Fragment> 
       <Route exact path='/' component={HomePage} />
       <Route path={'/(.+)'}
        render={()=>(
          <>
            <NavBar />
            <Container style={{marginTop:'7em'}}>
              <Route path='/activities' component={ActivityDashboard} exact />
              <Route path='/activities/:id' component={ActivityDetails} />
              <Route key={location.key} path={['/CreateActivity', '/manage/:id']} component={ActivityForm} />
            </Container>
          </> 
        )}
       />
    </Fragment>
  );
}

export default observer(App);
