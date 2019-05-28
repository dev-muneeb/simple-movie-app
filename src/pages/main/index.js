// @flow
import * as React from 'react';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import movies from 'data/movies';
import { MovieItem } from 'components';

const Main = () => (
  <Container>
    <Row>
      {movies.map(item => <Col xs="12" sm="4" key={item.id}><MovieItem data={item} /></Col>)}
    </Row>
  </Container>
);

export default Main;
