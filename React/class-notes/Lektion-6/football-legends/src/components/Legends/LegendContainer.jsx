import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { data } from "../../helper/data";
import { Container, Row, Col } from "react-bootstrap";
import { useState, Fragment } from "react";

const LegendContainer = () => {
  const [show, setShow] = useState(false);
  console.log(data);
  return (
    <div>
      <Form.Control type="search" placeholder="Search" />
      <Container>
        <Row xs={1} md={2} lg={3}>
          {data.map((legend) => (
            //{/* <Col xs={10} sm={8} md={6} lg={4} xl={3}> */}
            <Col onClick={() => setShow(!show)}>
              <Card>
                {!show ? (
                  <Card.Img variant="top" src={legend.img} />
                ) : (
                  <>
                    {" "}
                    <Card.Header>
                      <Card.Title>Card Title</Card.Title>
                    </Card.Header>
                    <ul className="m-auto">
                      {legend.statistics.map((item) => (
                        <li className="list-unstyled h5 text-start">
                          {" "}
                          ⚽ {item}
                        </li>
                      ))}
                    </ul>
                    <span>{legend.official_career}</span>
                  </>
                )}
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default LegendContainer;
