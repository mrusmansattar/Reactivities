

import { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import { Activity } from '../models/activity';
import NavBar from './navBar';
import ActivityDashboard from '../../Features/activities/dashboards/ActivityDashboard';
import {v4 as uuid} from 'uuid';

function App() {

const [activities,setActivities]= useState<Activity[]>([]);
const [selectedActivity, setSelectedActivity]=useState<Activity| undefined>(undefined);
const [editMode, setEditMode]= useState(false);

useEffect(()=>{
  axios.get<Activity[]>('http://localhost:5000/ReactivitiesAPI/activities').then(response=>{
    setActivities(response.data);
  }) 
},[])

function handleSelectActivity(id:string){
  setSelectedActivity(activities.find(x=>x.id===id));
}
function handleCancelSelectActivity()
{
  setSelectedActivity(undefined);
}

function handleFormOpen(id? : string){
  id? handleSelectActivity(id) : handleCancelSelectActivity();
  setEditMode(true);
}

function handleFormClose(){
  setEditMode(false);
}

function handleCreateOrEditActivity(activity:Activity){
  activity.id 
  ? setActivities([...activities.filter(x=>x.id !== activity.id),activity])
  : setActivities([...activities, {...activity, id:uuid() }]);
  setEditMode(false);
  setSelectedActivity(activity);

}

function handleDeleteActivity(id:string){
  setActivities([...activities.filter(x=>x.id!==id)]);
}

// Fragment element or Div used when we returning more than one object like Navbar or Container, if we have single object, we can use that object directly without placing in div or Fragment
  return (
     <Fragment>  
        <NavBar openForm={handleFormOpen} />
        <Container style={{marginTop:'7em'}}>
          <ActivityDashboard 
          activities={activities}
          selectedActivity={selectedActivity}
          selectActivity={handleSelectActivity}
          cancelSelectActivity={handleCancelSelectActivity}
          editMode={editMode}
          openForm={handleFormOpen}
          closeForm={handleFormClose}
          createOrEdit={handleCreateOrEditActivity}
          deleteActivity={handleDeleteActivity}
          />

        </Container>
    </Fragment>
  );
}

export default App;
