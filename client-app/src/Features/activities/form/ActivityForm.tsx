
import { observer } from 'mobx-react-lite';
import React, { ChangeEvent } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Button, Form, Segment } from "semantic-ui-react";
import LoadingComponent from '../../../App/layout/loadingComponent';
import { useStore } from '../../../App/stores/store';
import { v4 as uuid } from "uuid";


export default observer(function ActivityForm(){

    const history= useHistory();
    const {activityStore}=useStore();
    const { createActivity, updateActivity, loading, loadActivity, loadingInitial}=activityStore;
    const {id}=useParams<{id:string}>();

    // instead of setting selectedActivity initial state, we will set direct in useState() to initialise the form fields
    const [activity , setActivity]=useState({
        id:'',
        title:'',
        description:'',
        categopry:'',
        city:'',
        venue:'',
        date:''
    });

    useEffect(()=>{
        if(id) loadActivity(id).then(activity=>setActivity(activity!))
    }, [id, loadActivity])

//     const initialState=selectedActivity ?? {
//     id:'',
//     title:'',
//     description:'',
//     categopry:'',
//     city:'',
//     venue:'',
//     date:''
// }



function handleSubmit(){
    if(activity.id.length===0)
    {
        let newActivity={
            ...activity,
            id:uuid()
        };
        createActivity(newActivity).then(()=> history.push(`/activities/${newActivity.id}`))
    }
    else{
        updateActivity(activity).then(()=>history.push(`/activities/${activity.id}`))
    }
    activity.id? updateActivity(activity) : createActivity(activity);
}
function handleInputChange(event:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
    const{name, value}=event.target;
    setActivity({...activity,[name]:value});
}

if(loadingInitial) return <LoadingComponent content='Loading activity...'/>

    return(
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input placeholder='Title' value={activity.title} name='title' onChange={handleInputChange}/>
                <Form.TextArea placeholder='Description' value={activity.description} name='description' onChange={handleInputChange}/>
                <Form.Input placeholder='categopry' value={activity.categopry} name='categopry' onChange={handleInputChange}/>
                <Form.Input type='date' placeholder='Date' value={activity.date} name='date' onChange={handleInputChange}/>
                <Form.Input placeholder='City' value={activity.city} name='city' onChange={handleInputChange}/>
                <Form.Input placeholder='Venue' value={activity.venue} name='venue' onChange={handleInputChange}/>

                <Button loading={loading}  floated='right' type='submit' positive content='Submit' />
                <Button as={Link} to='/activities'  floated='right' type='button' content='Cancel' />
            </Form>
        </Segment>
    )
})