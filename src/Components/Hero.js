import React from 'react';

// IMPORT SEMANTIC UI
import { Container, Header, Button } from 'semantic-ui-react';

// IMPORT GLOBAL BUTTON CSS
import { btn, btnRed } from '../Components/ButtonStyles';

// ---- CSS STYLES
const heroImage = {
  backgroundImage: "url('https://placeimg.com/1920/525/people')",
  backgroundPosition: 'left',
  backgroundSize: 'cover',
  height: 525,
};

const heading1 = {
  color: 'RGB(16, 44, 111)',
  fontSize: 40,
  paddingTop: 120,
};

const heading1Span = {
  fontSize: 48,
  fontWeight: 700,
};

const heading2 = {
  color: '#5C6062',
  fontSize: 32,
  fontWeight: 300,
  width: 564,
};

const heading2Span = {
  fonstSize: 36,
  fontWeight: 800,
};

const Hero = () => (
  <div style={heroImage}>
    <Container>
      <Header style={heading1}>
        <span style={heading1Span}>Maybe</span> you can try
      </Header>
      <Header style={heading2}>
        It’s <span style={heading2Span}>quick and stress-free</span> to switch
        your current account to us with the
        <span style={heading2Span}> Current Account Switch Service.</span>
      </Header>
      <Button color="red" text="white" style={(btn, btnRed)}>
        Learn More
      </Button>
    </Container>
  </div>
);

export default Hero;
