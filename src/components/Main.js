import React, { Component } from 'react';
import { Link } from 'react-router';
import { Header, Container } from 'semantic-ui-react';
import Home from './Home';

export default class Main extends Component {
  render() {
    return (
      <Container text>
        <Header as="h1" textAlign="center">
          <Link to="/">Title</Link>
          <Home />
        </Header>
      </Container>
    );
  }
}
