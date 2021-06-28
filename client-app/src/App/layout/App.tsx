

import { useEffect, Fragment } from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './navBar';
import ActivityDashboard from '../../Features/activities/dashboards/ActivityDashboard';
import LoadingComponent from './loadingComponent';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';


function App() {

  const {activityStore}=useStore();


useEffect(()=>{
  activityStore.loadingActivities();
},[activityStore])



if(activityStore.loadingInitial) return <LoadingComponent content='Loading app'/>
// Fragment element or Div used when we returning more than one object like Navbar or Container, if we have single object, we can use that object directly without placing in div or Fragment
  return (
     <Fragment>  
        <NavBar />
        <Container style={{marginTop:'7em'}}>
          <ActivityDashboard />
        </Container>
    </Fragment>
  );
}

export default observer(App);
