import React from 'react';

// UI Components
import { Container, Card, Image, Button } from 'semantic-ui-react';

// IMPORT GLOBAL BUTTON CSS
import { btn } from '../Components/ButtonStyles';

// CSS STYLES
const flexWrapper = {
  display: 'flex',
  justifyContent: 'space-evenly',
  flexWrap: 'wrap',
  transform: 'translateY(-80px)',
};

const CardSingle = (props) => {
  const cards = [];
  for (let i = 0; i < props.cards; i++) {
    cards.push(
      <Card
        key={i}
        id={`card-${i}`}
        raised
        style={{
          margin: 10,
        }}
      >
        <Card.Content>
          <Card.Header style={{ color: 'RGB(16,44,111)', textAlign: 'center' }}>
            John Smith
          </Card.Header>

          <Card.Description textAlign="center">
            We’ll alert you if we change your interest rate, launch new savings
            accounts or make positive changes to existing products.
          </Card.Description>
        </Card.Content>
        <Image src="https://placeimg.com/290/125/tech" />
        <Card.Content>
          <Button style={btn} color="red" text="white">
            Learn More
          </Button>

          <Card.Description textAlign="center" style={{ fontSize: 12 }}>
            You need to be aged 16 or over and hold a savings account with us to
            sign up to SavingsWatch.
          </Card.Description>
        </Card.Content>
      </Card>,
    );
  }
  return <Container style={flexWrapper}>{cards}</Container>;
};

export default CardSingle;
