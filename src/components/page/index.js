// @flow
import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'reactstrap';

type Props = {
    title: String,
    children: Object,
};
const Page = (props: Props) => (
  <Container>
    <Helmet>
      <title>{props.title}</title>
    </Helmet>
    {props.children}
  </Container>
);

export default Page;
