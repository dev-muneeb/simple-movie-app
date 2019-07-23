// @flow
import * as React from 'react';
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardBody,
} from 'reactstrap';
import './MovieItem.scss';

type Props = {
    data: Array<Object>,
    getGenres: Function,
};

const MovieItem = (props: Props) => {
  const {
    original_title: title,
    overview: description,
    poster_path: image,
    vote_average: rating,
    genre_ids: genreIds,
  } = props.data;

  return (
    <Card className="movieItemCard">
      <CardImg bottom width="100%" src={`https://tmdb-image-viewer.herokuapp.com/image${image}`} alt={title} />
      <CardBody>
        <CardTitle><h3>{title}</h3></CardTitle>
        <CardText>
          <small className="text-muted">{props.getGenres(genreIds)}</small>
        </CardText>
        <CardText>{description}</CardText>
        <CardText>
          <small className="text-muted">Rating: {rating}</small>
        </CardText>
      </CardBody>
    </Card>

  );
};

export default MovieItem;
