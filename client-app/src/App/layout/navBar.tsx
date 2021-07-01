
import React from 'react';
import { NavLink } from 'react-router-dom';
import {Button, Container, Menu } from "semantic-ui-react";



export default function NavBar()
{
    return(
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header as={NavLink} to='/' exact  >
                    <img src="/asset/logo.png" alt="logo" style={{marginRight:10}}/>
                    Reactivities
                </Menu.Item>
                <Menu.Item as={NavLink} to='/activities' name='Activities' />
                <Menu.Item>
                    <Button as={NavLink} to='/createActivity'  positive  content='Create Activities'/>
                </Menu.Item>
            </Container>
        </Menu>
    )
}