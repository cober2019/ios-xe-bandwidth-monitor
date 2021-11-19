import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

export const PageLoader = (ip, serial, model, uptime, software) => {

    const html = <Container fluid="xl">
                <Row>
                        <Col xl={2}/>
                        <Col xl={8}>
                            <h3 className="blinking-loader" style={{marginTop: "100px"}}>Collecting Data From {ip}</h3>
                        </Col>
                        <Col xl={2}/>
                    </Row>
                     </Container>
        
    return html
}


