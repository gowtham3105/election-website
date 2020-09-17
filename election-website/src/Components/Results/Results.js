import React, { Component } from "react";
import "./Results.css";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      activeResults: [],
      showModal:false,
      positionName:"General Seceratory Elections"
    };
  }

  fun = (x, end) => {
    var nx = (x * 100) / end;
    var r = -1 * nx * nx + 20 * nx + 25;
    return (r * end) / 100;
  };
  componentDidMount() {
    fetch("http://127.0.0.1:5000/results")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        console.log(users);
        this.setState({ results: users });
        this.setState({ activeResults: users.GenSec });
      });
  }

  render() {
    return (
      <div>
        <img src="elections.jpg" />
        <br />

        <Modal
          show={this.state.showModal}
          onHide={() => {
            this.setState({ showModal: false });
          }}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header
            className="modalhead"
            closeButton
            style={{ color: "white" }}
          >
            <Modal.Title>Positions</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modalbody">
            <Accordion defaultActiveKey="0" className="positionslist">
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey="0"
                className="positionlistgroup"
              >
                General Elections
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <div>
                  <div
                    className="positionsItem"
                    onClick={() => {
                      this.setState({
                        activeResults: this.state.results.GenSec,
                        showModal: false,
                      });
                    }}
                  >
                    General Seceratory Elections
                  </div>
                  <br />
                  <div
                    className="positionsItem"
                    onClick={() => {
                      this.setState({
                        activeResults: this.state.results.GenSecTech,
                        showModal: false,
                      });
                    }}
                  >
                    General Seceratory Techinal Affairs Elections
                  </div>
                  <br />
                  <div
                    className="positionsItem"
                    onClick={() => {
                      this.setState({
                        activeResults: this.state.results.GenSecCultural,
                        showModal: false,
                      });
                    }}
                  >
                    General Seceratory Cultural Affairs Elections
                  </div>
                  <br />
                  <div className="positionsItem">
                    General Seceratory Sports Elections
                  </div>
                  <br />
                  <div className="positionsItem">
                    General Seceratory Hostel Elections
                  </div>
                </div>
              </Accordion.Collapse>

              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey="1"
                className="positionlistgroup"
              >
                General Elections
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <div>
                  <div className="positionsItem">
                    General Seceratory Elections
                  </div>
                  <br />
                  <div className="positionsItem">
                    General Seceratory Elections
                  </div>
                  <br />
                  <div className="positionsItem">
                    General Seceratory Elections
                  </div>
                  <br />
                  <div className="positionsItem">
                    General Seceratory Elections
                  </div>
                  <br />
                  <div className="positionsItem">
                    General Seceratory Elections
                  </div>
                  <br />
                  <div className="positionsItem">
                    General Seceratory Elections
                  </div>
                  <br />
                  <div className="positionsItem">
                    General Seceratory Elections
                  </div>
                </div>
              </Accordion.Collapse>
            </Accordion>
          </Modal.Body>
        </Modal>

        <div>
          <Button
            className="positionslistbtn"
            style={{ display: "none" }}
            onClick={() => {
              this.setState({ showModal: true });
            }}
          >
            Select Position
          </Button>
        </div>
       
        <div className="positionname">{this.state.positionName}</div>
  
        <Container fluid>
          <Row>
            <Col className="positionslistcol">
              <Accordion defaultActiveKey="0" className="positionslist">
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey="0"
                  className="positionlistgroup"
                >
                  General Elections
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <div>
                    <div
                      className="positionsItem"
                      onClick={() => {
                        this.setState({
                          activeResults: this.state.results.GenSec,
                        });
                      }}
                    >
                      General Seceratory Elections
                    </div>
                    <br />
                    <div
                      className="positionsItem"
                      onClick={() => {
                        this.setState({
                          activeResults: this.state.results.GenSecTech,
                        });
                      }}
                    >
                      General Seceratory Techinal Affairs Elections
                    </div>
                    <br />
                    <div
                      className="positionsItem"
                      onClick={() => {
                        this.setState({
                          activeResults: this.state.results.GenSecCultural,
                        });
                      }}
                    >
                      General Seceratory Cultural Affairs Elections
                    </div>
                    <br />
                    <div className="positionsItem">
                      General Seceratory Sports Elections
                    </div>
                    <br />
                    <div className="positionsItem">
                      General Seceratory Hostel Elections
                    </div>
                  </div>
                </Accordion.Collapse>

                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey="1"
                  className="positionlistgroup"
                >
                  General Elections
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <div>
                    <div className="positionsItem">
                      General Seceratory Elections
                    </div>
                    <br />
                    <div className="positionsItem">
                      General Seceratory Elections
                    </div>
                    <br />
                    <div className="positionsItem">
                      General Seceratory Elections
                    </div>
                    <br />
                    <div className="positionsItem">
                      General Seceratory Elections
                    </div>
                    <br />
                    <div className="positionsItem">
                      General Seceratory Elections
                    </div>
                    <br />
                    <div className="positionsItem">
                      General Seceratory Elections
                    </div>
                    <br />
                    <div className="positionsItem">
                      General Seceratory Elections
                    </div>
                  </div>
                </Accordion.Collapse>
              </Accordion>
            </Col>
            <Col>
              <div className="resultshead">
                {this.state.activeResults.map((user, i) => {
                  return (
                    <div
                      className="candidate"
                      style={{ background: user.backcolor }}
                      key={i}
                    >
                      <h2 className="candidate__name">{user.Name}</h2>
                      <span className="candidate__description">
                        {user.branch}
                      </span>
                      <span className="candidate__percent">
                        {user.percentage}
                      </span>
                      <div
                        className="candidate__bar"
                        style={{
                          background: user.frontcolor,
                          width: user.width,
                        }}
                      ></div>
                    </div>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Results;
