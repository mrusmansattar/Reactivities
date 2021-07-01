
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Grid } from "semantic-ui-react";
import LoadingComponent from '../../../App/layout/loadingComponent';
import { useStore } from '../../../App/stores/store';
import ActivityList from "./ActivityList";

export default observer(function ActivityDashboard()
{
    const {activityStore}=useStore();
    const {loadingActivities, activityRegistry}=activityStore;

    useEffect(()=>{
      if(activityRegistry.size<=1) loadingActivities();
    },[activityRegistry.size, loadingActivities])
    
    
    
    if(activityStore.loadingInitial) return <LoadingComponent content='Loading app'/>


    return(
        <Grid>
            <Grid.Column width='10'>
                <ActivityList/>
            </Grid.Column>
            <Grid.Column width='6'>
               <h3>Activity Filter</h3>
            </Grid.Column>
        </Grid>
    )
})