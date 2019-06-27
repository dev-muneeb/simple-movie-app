// @flow
import * as React from 'react';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import movies from 'data/movies';
import genres from 'data/genres';
import { MovieItem, Header } from 'components';

const Main = () => {
  const getGenres = (ids: Array) => {
    const filterGenres = genres.filter(genre => ids.includes(genre.id));
    return filterGenres.map(item => `${item.name} `);
  };
  return (
    <React.Fragment>
      <Header />
      <Container>
        <Row>
          {movies.map(item => <Col xs="12" sm="4" key={item.id}><MovieItem data={item} getGenres={getGenres} /></Col>)}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Main;
