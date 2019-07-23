// @flow
import * as React from 'react';
import { Row, Col } from 'reactstrap';
import { Header, Page } from 'components';
import './Contact.scss';

const Contact = () => (
  <React.Fragment>
    <Header />
    <Page title="Contact">
      <Row className="row-content">
        <Col xs="12">
          <h3 className="contactHeading">Contact Information</h3>
        </Col>
        <Col className="contactDetail">
          <Row>
            <Col xs="12" sm="6">
              <h5>Our Address</h5>
              <address>
                  4th Floor, Prestige Trader Center
                  SNCC 1/1-A Block-3 K.C.H.S Union,
                  Main Shaheed-e-Millat Road,
                  Karachi 74200, Sindh<br />
                  (021) 34306280<br />
                <a href="mailto:support@findmymovies.com">support@findmymovies.com</a>
              </address>
              <div className="btn-group" role="group">
                <a role="button" className="btn btn-primary" href="tel:(021) 34306280"><i className="fa fa-phone" /> Call</a>
                <a role="button" className="btn btn-info" href="skype:findmymovies"><i className="fa fa-skype" /> Skype</a>
                <a role="button" className="btn btn-success" href="mailto:support@findmymovies.com"><i className="fa fa-envelope-o" /> Email</a>
              </div>
            </Col>
            <Col xs="12" sm="6">
              <h5>Map of our location</h5>
              <iframe
                title="MAP"
                width="320"
                height="450"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJP34qp-w-sz4R_owwlESbAII&key=AIzaSyCbl9ovGBlah8FuvU1H7v3Doe4M0PfuGyI"
                allowFullScreen
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Page>
  </React.Fragment>
);

export default Contact;
