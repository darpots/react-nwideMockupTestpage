import React from 'react';
import { Link } from 'react-router-dom';

// SEMANTIC UI IMPORTS
import { Button } from 'semantic-ui-react';

// IMPORT GLOBAL BUTTON CSS
import { btn, btnRed } from '../Components/ButtonStyles';

const bg = {
  background: "url('https://placeimg.com/1920/1200/people/grayscale')",
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const Welcome = () => (
  <div style={bg}>
    <Link to="/support">
      <Button color="red" size="huge" style={(btn, btnRed)}>
        Click Here To Enter
      </Button>
    </Link>
  </div>
);

export default Welcome;
