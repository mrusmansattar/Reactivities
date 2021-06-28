
import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent } from 'react';
import { useState } from 'react';
import { Button, Item, Label, Segment } from "semantic-ui-react";
import { useStore } from '../../../App/stores/store';


export default observer(function ActivityList()
{
    const {activityStore}=useStore();
    const {selectActivity, deleteActivity, activitiesByDate, loading}=activityStore;
    const [target, setTarget]=useState('');



    function handleActivityDelete(evnt:SyntheticEvent<HTMLButtonElement>, id:string){
        setTarget(evnt.currentTarget.name);
        deleteActivity(id);
    }

    return(
        <Segment>
            <Item.Group divided>
                {activitiesByDate.map(activity=> (
                    <Item key={activity.id}>
                        <Item.Content>
                            <Item.Header as='a'>{activity.title} </Item.Header>
                            <Item.Meta>{activity.date}</Item.Meta>
                            <Item.Description>
                                <div>{activity.description}</div>
                                <div>{activity.city}, {activity.venue}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={()=> selectActivity(activity.id)} floated='right' content='View' color='blue'/>
                                <Button 
                                name={activity.id}
                                loading={loading && target === activity.id} 
                                onClick={(evnt)=> handleActivityDelete(evnt,activity.id)} 
                                floated='right' 
                                content='Delete' 
                                color='red'/>
                                <Label basic content={activity.categopry}/>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                    ))}
            </Item.Group>
        </Segment>
    )
})