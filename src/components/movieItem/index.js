// @flow
import * as React from 'react';
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardBody,
  Button,
} from 'reactstrap';
import './MovieItem.scss';

type Props = {
    data: Array<Object>,
    getGenres: Function,
    addInterested: Function,
    removeInterested: Function,
    isInterested: Boolean,
};

const MovieItem = (props: Props) => {
  const {
    data,
    getGenres,
    addInterested,
    removeInterested,
    isInterested,
  } = props;

  const {
    id,
    original_title: title,
    overview: description,
    poster_path: image,
    vote_average: rating,
    genre_ids: genreIds,
  } = data;

  console.log(id);

  const toggleInterested = () => {
    if (isInterested) {
      removeInterested(id);
    } else {
      addInterested(id);
    }
  };

  return (
    <Card className={`movieItemCard ${isInterested ? 'movieItemInterested' : ''}`}>
      <CardImg bottom width="100%" src={`https://tmdb-image-viewer.herokuapp.com/image${image}`} alt={title} />
      <CardBody>
        <CardTitle><h3>{title}</h3></CardTitle>
        <CardText>
          <small className="text-muted">{getGenres(genreIds)}</small>
        </CardText>
        <CardText>{description}</CardText>
        <CardText>
          <small className="text-muted">Rating: {rating}</small>
        </CardText>
        <Button onClick={toggleInterested}>{isInterested ? 'Not Interested' : 'Interested'}</Button>
      </CardBody>
    </Card>

  );
};

export default React.memo(MovieItem);
