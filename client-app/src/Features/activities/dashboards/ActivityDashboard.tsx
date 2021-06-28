
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Grid } from "semantic-ui-react";
import { useStore } from '../../../App/stores/store';
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";

// First Approach commented out
// export default function ActivityDashboard(props:Props)
// {
//     return(
//         <Grid>
//             <Grid.Column width='10'>
//             <List>
//                 {props.activities.map(activity =>(
//                 <List.Item key={activity.Id}>
//                 {activity.title}
//                 </List.Item>
//                 ))}
//         </List>
//             </Grid.Column>
//         </Grid>
//     )
// }



//Second Approch to achieve same thing
export default observer(function ActivityDashboard()
{
    const {activityStore}=useStore();
    const {selectedActivity, editMode}=activityStore;
    return(
        <Grid>
            <Grid.Column width='10'>
                <ActivityList/>
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity && !editMode &&
                    <ActivityDetails/>}
                {editMode &&
                <ActivityForm/>}
            </Grid.Column>
        </Grid>
    )
})