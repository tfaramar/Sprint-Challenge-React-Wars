import React from 'react';
import './StarWarsPeople.scss';
import { Card } from 'semantic-ui-react';

function StarWarsPeople(props) {
    console.log(props);
    return (
        <Card className='person-card'>
            <Card.Content>
                <Card.Header className='name'>Name: {props.name}</Card.Header>
                <Card.Meta>Birthyear: {props.birthyear}</Card.Meta>
                <Card.Description className='stats'> Mass: {props.mass} kg <br /> Height: {props.height} cm </Card.Description>
            </Card.Content>
        </Card>
        
    );
}

export default StarWarsPeople;