import { Container, Row, Col } from 'react-bootstrap';
import SocialLinks from './SocialLinks';
import CookieConsentBanner from './CookieConsentBanner';
import AdFooter from './AdFooter';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container>
        <AdFooter />
        <Row>
          <Col md={4}>
            <h5>YaluBikes</h5>
            <p>Your trusted bike rental in Anuradhapura</p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-white">About Us</a></li>
              <li><a href="/contact" className="text-white">Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <SocialLinks />
          </Col>
        </Row>
        <CookieConsentBanner />
      </Container>
    </footer>
  );
}