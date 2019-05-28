// @flow
import * as React from 'react';
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardBody,
} from 'reactstrap';

type Props = {
    data: Object,
};

const MovieItem = (props: Props) => {
  const {
    original_title: title,
    overview: description,
    poster_path: image,
    vote_average: rating,
  } = props.data;
  return (
    <Card>
      <CardImg bottom width="100%" src={`https://tmdb-image-viewer.herokuapp.com/image${image}`} alt={title} />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardText>{description}</CardText>
        <CardText>
          <small className="text-muted">Rating: {rating}</small>
        </CardText>
      </CardBody>
    </Card>

  );
};

export default MovieItem;
