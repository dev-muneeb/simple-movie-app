// @flow
import React, {
  useContext,
  useReducer,
  useEffect,
  useRef,
  useCallback,
} from 'react';
import {
  Row,
  Col,
} from 'reactstrap';
import movies from 'data/movies';
import genres from 'data/genres';
import { MovieItem, Header, Page } from 'components';

const appReducer = (state, action) => {
  switch (action.type) {
    case 'addInterested': {
      return {
        ...state,
        interested: [
          ...state.interested,
          action.payload,
        ],
      };
    }
    case 'removeInterested': {
      return {
        ...state,
        interested: state.interested.filter(item => item !== action.payload),
      };
    }
    case 'resetInterested': {
      return {
        ...state,
        interested: action.payload,
      };
    }
    default:
      return state;
  }
};

const Context = React.createContext();
const useEffectOnce = (cb) => {
  const didRun = useRef(false);
  if (!didRun.current) {
    cb();
    didRun.current = true;
  }
};

const Main = () => {
  const [state, dispatch] = useReducer(appReducer, { interested: [] });
  const getGenres = useCallback((ids: Array) => {
    const filterGenres = genres.filter(genre => ids.includes(genre.id));
    return filterGenres.map(item => `${item.name} `);
  }, []);

  useEffectOnce(() => {
    const rawData = localStorage.getItem('interestedData');
    dispatch({ type: 'resetInterested', payload: JSON.parse(rawData) });
  });
  useEffect(() => {
    localStorage.setItem('interestedData', JSON.stringify(state.interested));
  }, [state.interested]);
  const addInterested = useCallback(id => dispatch({ type: 'addInterested', payload: id }), []);
  const removeInterested = useCallback(id => dispatch({ type: 'removeInterested', payload: id }), []);
  return (
    <React.Fragment>
      <Header />
      <Context.Provider
        value={{
          getGenres,
          addInterested,
          removeInterested,
          interestedIds: state.interested,
        }}
      >
        <MoviePage />
      </Context.Provider>
    </React.Fragment>
  );
};

const MoviePage = () => (
  <Page title="Home"><MovieList /></Page>
);

const MovieList = () => {
  const {
    getGenres,
    addInterested,
    removeInterested,
    interestedIds,
  } = useContext(Context);
  return (
    <Row>
      {movies.map(item => (
        <Col xs="12" sm="4" key={item.id}>
          <MovieItem
            data={item}
            getGenres={getGenres}
            addInterested={addInterested}
            removeInterested={removeInterested}
            isInterested={interestedIds.includes(item.id)}
          />
        </Col>
      ))}
    </Row>
  );
};


export default Main;
