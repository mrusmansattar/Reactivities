import { Link } from "react-router-dom";
import { Button, Icon, Item, Segment } from "semantic-ui-react";
import { Activity } from "../../../App/models/activity";

interface Props{
    activity:Activity
}
export default function ActivityListItem({activity}:Props)
{
    return(
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item.Image src='/asset/user.png' circular size='tiny'/> 
                    <Item.Content>
                        <Item.Header as ={Link} to={`/activities/${activity.id}`}>
                            {activity.title}
                        </Item.Header>
                        <Item.Description>Hosted By Usman</Item.Description>    
                    </Item.Content>    
                </Item.Group>  
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock'/> {activity.date}
                    <Icon name='marker'/> {activity.venue}
                </span>
            </Segment> 
            <Segment secondary>
                Attendees go here
            </Segment> 
            <Segment clearing>
                <span>{activity.description}</span>
                <Button 
                as ={Link}
                to={`/activities/${activity.id}`}
                color='teal'
                content='View'
                floated='right'
                />
            </Segment>
        </Segment.Group>
    )
}