import React from 'react';

// SEMANTIC UI IMPORTS
import { Container, Icon, Button } from 'semantic-ui-react';

// IMPORT GLOBAL BUTTON CSS
import { btn, btnBlue, btnPurple } from '../Components/ButtonStyles';

// CSS STYLES
const navHeader = {
  display: 'flex',
  justifyContent: 'space-between',
};

const logo = {
  width: 130,
  height: 52,
  marginTop: 30,
};

const navBar = {
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'flex-end',
  color: 'RGB(16, 44, 111)',
  fontSize: '14px',
  fontWeight: 600,
  height: '55px',
  marginBottom: '20px',
};

// RENDER
const Nav = props => (
  <div>
    <Container>
      <div style={navHeader}>
        <img
          style={logo}
          src="https://www.nationwide.co.uk/-/media/System/logo2xtrans.png?h=112&w=280"
          alt=""
        />
        <div style={{ paddingTop: 40 }}>
          <Button style={(btn, btnBlue)} color="blue" onClick={props.addCard}>
            <Icon name="question" />
            Help & support
          </Button>
          <Button
            style={(btn, btnPurple)}
            color="purple"
            onClick={props.removeCard}
          >
            <Icon color="white" name="lock" />
            Login&nbsp;&nbsp;
            <Icon name="chevron down" color="white" />
          </Button>
        </div>
      </div>
      {/* ---- NAVBAR ---- */}
      <div style={navBar}>
        <span>
          Current accounts &nbsp;&nbsp;<Icon name="chevron down" color="red" />
        </span>
        <span>
          Savings &nbsp;&nbsp;<Icon name="chevron down" color="red" />
        </span>
        <span>
          Mortgages &nbsp;&nbsp;<Icon name="chevron down" color="red" />
        </span>
        <span>
          Loans &nbsp;&nbsp;<Icon name="chevron down" color="red" />
        </span>
        <span>
          Credit cards&nbsp;&nbsp; <Icon name="chevron down" color="red" />
        </span>
        <span>
          Insurance &nbsp;&nbsp;<Icon name="chevron down" color="red" />
        </span>
        <span>
          Investments &nbsp;&nbsp;<Icon name="chevron down" color="red" />
        </span>
      </div>
    </Container>
  </div>
);

export default Nav;
