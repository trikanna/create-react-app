import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #f2f2f2;
  text-align: center;
  padding: 0 15px;

  &:after {
    content: "";
    display: table;
    clear: both;
  }
`;

const Header = styled.header`
  border-bottom: 1px solid #fefefe;
  padding-bottom: 10px;
  margin-bottom: 14px;

  .logo {
    height: 150px;
    margin: 0 auto;
  }
`;

const Intro = styled.p`
  max-width: 600px;
  margin: 0 auto 13pt;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header>
          <img src={logo} className="logo" alt="logo" />
          <h1>Welcome to React</h1>
          <h2>Welcome to React</h2>
          <h3>Welcome to React</h3>
          <h4>Welcome to React</h4>
          <h5>Welcome to React</h5>
          <h6>Welcome to React</h6>
        </Header>
        <Intro>To get started, edit <code>src/App.js</code> and save to reload. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt accusamus laudantium rerum, repudiandae, qui velit nulla consectetur, doloremque, perferendis inventore cupiditate! Ex iusto optio, praesentium consequatur laboriosam odio atque itaque.</Intro>
      </Wrapper>
    );
  }
}

export default App;
