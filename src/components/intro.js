import { Col, Container, Row, Button} from 'react-bootstrap';

const Intro = () => {
    return (
        <div className="intro">
          <Container className="text-white d-flex justify-content-center align-items-center">
            <Row>
              <Col>
                <div className="text-intro">MAU NONTON ASIK?</div>
                <div className="text-intro">LANGSUNG AJA KLIK!</div>
                <div className="button-intro mt-2">
                    <Button variant="outline-light" href="#trendingsection">KLIK DISINI</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    )
}

export default Intro;