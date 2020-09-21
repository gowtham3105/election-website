import React, { Component } from "react";
import "./Results.css";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import OnImagesLoaded from "react-on-images-loaded";

class Results extends Component {
  constructor(props) {
    super(props);
    this.props.showLoader();
    this.state = {
      results: [],
      activeResults: [],
      showModal: false,
      positionName: "General Seceratory Elections",
      showImages: false,
    };
  }

  componentDidMount() {
    fetch("http://192.168.29.199:5000/results")
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
      <OnImagesLoaded
        onLoaded={() => {
          this.setState({ showImages: true });
          this.props.hideLoader();
        }}
        onTimeout={() => {
          this.setState({ showImages: true });
          this.props.hideLoader();
        }}
        timeout={7000}
      >
        <div style={{ opacity: this.state.showImages ? 1 : 0 }}>
          <img src="elections.jpg" width="50%" style={{ marginLeft: "25%" }} alt="results"/>
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
                          positionName: "General Seceratory Elections",
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
                          positionName:
                            "General Seceratory Technical Affairs Elections",
                        });
                      }}
                    >
                      General Seceratory Technical Affairs Elections
                    </div>
                    <br />
                    <div
                      className="positionsItem"
                      onClick={() => {
                        this.setState({
                          activeResults: this.state.results.GenSecCultural,
                          showModal: false,
                          positionName:
                            "General Seceratory Cultural Affairs Elections",
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
                            positionName: "General Seceratory Elections",
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
                            positionName:
                              "General Seceratory Technical Affairs Elections",
                          });
                        }}
                      >
                        General Seceratory Technical Affairs Elections
                      </div>
                      <br />
                      <div
                        className="positionsItem"
                        onClick={() => {
                          this.setState({
                            activeResults: this.state.results.GenSecCultural,
                            positionName:
                              "General Seceratory Cultural Affairs Elections",
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
                        className="candidate-result"
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
      </OnImagesLoaded>
    );
  }
}
export default Results;
