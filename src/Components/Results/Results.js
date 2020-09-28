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
          <div className="teamdesk">
            <div className="topbannerteam">
              <div className="titlebanteam">
                {" "}
                Results
                <p>IIT Dharwad Elections 2020-21</p>
              </div>
              <img
                src="result.jpeg"
                className="topbannerimgteam"
                alt="result.jpeg"
              />
            </div>
          </div>

          <div className="teammobile">
            <div className="topbannerteam">
              <img
                src="result.jpeg"
                className="topbannerimgteam"
                alt="result.jpeg"
              />

              <div className="titlebanteam">
                {" "}
                Results
                <p>
                  IIT Dharwad Elections
                  <br /> 2020-21
                </p>
              </div>
            </div>
          </div>

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
                  Techinical Club Seceratory Elections
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <div>
                    <div
                      className="positionsItem"
                      onClick={() => {
                        this.setState({
                          activeResults: this.state.results.CodeClubSec,
                          positionName: "Coding Club Seceratory Elections",
                        });
                      }}
                    >
                      Coding Club Seceratory Elections
                    </div>
                    <br />
                    <div
                      className="positionsItem"
                      onClick={() => {
                        this.setState({
                          activeResults: this.state.results.DataScienceClubSec,
                          positionName:
                            "Data Science Club Seceratory Elections",
                        });
                      }}
                    >
                      Data Science Club Seceratory Elections
                    </div>
                    <br />
                    <div
                      className="positionsItem"
                      onClick={() => {
                        this.setState({
                          activeResults: this.state.results.RoboticsClubSec,
                          positionName: "Robotics Club Seceratory Elections",
                        });
                      }}
                    >
                      Robotics Club Seceratory Elections
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
          <div className="resultsinfo">
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
                      Techinical Club Seceratory Elections
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <div>
                        <div
                          className="positionsItem"
                          onClick={() => {
                            this.setState({
                              activeResults: this.state.results.CodeClubSec,
                              positionName: "Coding Club Seceratory Elections",
                            });
                          }}
                        >
                          Coding Club Seceratory Elections
                        </div>
                        <br />
                        <div
                          className="positionsItem"
                          onClick={() => {
                            this.setState({
                              activeResults: this.state.results
                                .DataScienceClubSec,
                              positionName:
                                "Data Science Club Seceratory Elections",
                            });
                          }}
                        >
                          Data Science Club Seceratory Elections
                        </div>
                        <br />
                        <div
                          className="positionsItem"
                          onClick={() => {
                            this.setState({
                              activeResults: this.state.results.RoboticsClubSec,
                              positionName:
                                "Robotics Club Seceratory Elections",
                            });
                          }}
                        >
                          Robotics Club Seceratory Elections
                        </div>
                      </div>
                    </Accordion.Collapse>
                    <Accordion.Toggle
                      as={Button}
                      variant="link"
                      eventKey="2"
                      className="positionlistgroup"
                    >
                      Hostel Seceratory Elections
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                      <div>
                        <div
                          className="positionsItem"
                          onClick={() => {
                            this.setState({
                              activeResults: this.state.results.CodeClubSec,
                              positionName: "Coding Club Seceratory Elections",
                            });
                          }}
                        >
                          Hostel 1 Seceratory Elections
                        </div>
                        <br />
                        <div
                          className="positionsItem"
                          onClick={() => {
                            this.setState({
                              activeResults: this.state.results
                                .DataScienceClubSec,
                              positionName:
                                "Data Science Club Seceratory Elections",
                            });
                          }}
                        >
                          Hostel 2 Seceratory Elections
                        </div>
                        <br />
                        <div
                          className="positionsItem"
                          onClick={() => {
                            this.setState({
                              activeResults: this.state.results.RoboticsClubSec,
                              positionName:
                                "Robotics Club Seceratory Elections",
                            });
                          }}
                        >
                          Hostel 3 Seceratory Elections
                        </div>
                      </div>
                    </Accordion.Collapse>
                    <Accordion.Toggle
                      as={Button}
                      variant="link"
                      eventKey="3"
                      className="positionlistgroup"
                    >
                      Cultural Clubs Seceratory Elections
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                      <div>
                        <div
                          className="positionsItem"
                          onClick={() => {
                            this.setState({
                              activeResults: this.state.results.DanceClubSec,
                              positionName: "Dance Club Seceratory Elections",
                            });
                          }}
                        >
                          Dance Club Seceratory Elections
                        </div>
                        <br />
                        <div
                          className="positionsItem"
                          onClick={() => {
                            this.setState({
                              activeResults: this.state.results.FandMClubSec,
                              positionName:
                                "Film and Media Club Seceratory Elections",
                            });
                          }}
                        >
                          Film and Media Club Seceratory Elections
                        </div>
                        <br />
                        <div
                          className="positionsItem"
                          onClick={() => {
                            this.setState({
                              activeResults: this.state.results.MusicClubSec,
                              positionName: "Music Club Seceratory Elections",
                            });
                          }}
                        >
                          Music Club Seceratory Elections
                        </div>
                        <br />
                        <div
                          className="positionsItem"
                          onClick={() => {
                            this.setState({
                              activeResults: this.state.results.FineArtsClubSec,
                              positionName:
                                "Fine Arts Club Seceratory Elections",
                            });
                          }}
                        >
                          Fine Arts Club Seceratory Elections
                        </div>
                        <br />
                        <div
                          className="positionsItem"
                          onClick={() => {
                            this.setState({
                              activeResults: this.state.results
                                .DramaticsClubSec,
                              positionName:
                                "Dramatics Club Seceratory Elections",
                            });
                          }}
                        >
                          Dramatics Club Seceratory Elections
                        </div>
                        <br />
                        <div
                          className="positionsItem"
                          onClick={() => {
                            this.setState({
                              activeResults: this.state.results
                                .ForeignLangClubSec,
                              positionName:
                                "Foreign Language  Club Seceratory Elections",
                            });
                          }}
                        >
                          Foreign Language Club Seceratory Elections
                        </div>
                        <br />
                        <div
                          className="positionsItem"
                          onClick={() => {
                            this.setState({
                              activeResults: this.state.results.LiteraryClubSec,
                              positionName:
                                "Literary Club Seceratory Elections",
                            });
                          }}
                        >
                          Literary Club Seceratory Elections
                        </div>
                        <br />
                        <div
                          className="positionsItem"
                          onClick={() => {
                            this.setState({
                              activeResults: this.state.results.QuizClubSec,
                              positionName: "Quiz Club Seceratory Elections",
                            });
                          }}
                        >
                          Quiz Club Seceratory Elections
                        </div>
                      </div>
                    </Accordion.Collapse>
                    <Accordion.Toggle
                      as={Button}
                      variant="link"
                      eventKey="4"
                      className="positionlistgroup"
                    >
                      Sports Clubs Seceratory Elections
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                      <div>
                        <div
                          className="positionsItem"
                          onClick={() => {
                            this.setState({
                              activeResults: this.state.results
                                .AthlitiesClubSec,
                              positionName:
                                "Athlitiese Club Seceratory Elections",
                            });
                          }}
                        >
                          Athlities Club Seceratory Elections
                        </div>
                        <br />
                        <div
                          className="positionsItem"
                          onClick={() => {
                            this.setState({
                              activeResults: this.state.results
                                .BadmintonClubSec,
                              positionName:
                                "Badminton Club Seceratory Elections",
                            });
                          }}
                        >
                          Badminton Club Seceratory Elections
                        </div>
                        <br />
                        <div
                          className="positionsItem"
                          onClick={() => {
                            this.setState({
                              activeResults: this.state.results
                                .BasketballClubSec,
                              positionName:
                                "Basketball Club Seceratory Elections",
                            });
                          }}
                        >
                          Basketball Club Seceratory Elections
                        </div>
                        <br />
                        <div
                          className="positionsItem"
                          onClick={() => {
                            this.setState({
                              activeResults: this.state.results.CricketClubSec,
                              positionName: "Cricket Club Seceratory Elections",
                            });
                          }}
                        >
                          Cricket Club Seceratory Elections
                        </div>
                        <br />
                        <div
                          className="positionsItem"
                          onClick={() => {
                            this.setState({
                              activeResults: this.state.results.ChessClubSec,
                              positionName: "Chess Club Seceratory Elections",
                            });
                          }}
                        >
                          Chess Club Seceratory Elections
                        </div>
                        <br />
                        <div
                          className="positionsItem"
                          onClick={() => {
                            this.setState({
                              activeResults: this.state.results.FootballClubSec,
                              positionName:
                                "Football  Club Seceratory Elections",
                            });
                          }}
                        >
                          Football Club Seceratory Elections
                        </div>
                        <br />
                        <div
                          className="positionsItem"
                          onClick={() => {
                            this.setState({
                              activeResults: this.state.results.HockeyClubSec,
                              positionName: "Hockey Club Seceratory Elections",
                            });
                          }}
                        >
                          Hockey Club Seceratory Elections
                        </div>
                        <br />
                        <div
                          className="positionsItem"
                          onClick={() => {
                            this.setState({
                              activeResults: this.state.results.SwimmingClubSec,
                              positionName:
                                "Swimming Club Seceratory Elections",
                            });
                          }}
                        >
                          Swimming Club Seceratory Elections
                        </div>
                        <br />
                        <div
                          className="positionsItem"
                          onClick={() => {
                            this.setState({
                              activeResults: this.state.results.TennisClubSec,
                              positionName: "Tennis Club Seceratory Elections",
                            });
                          }}
                        >
                          Tennis Club Seceratory Elections
                        </div>
                        <br />
                        <div
                          className="positionsItem"
                          onClick={() => {
                            this.setState({
                              activeResults: this.state.results
                                .TableTennisClubSec,
                              positionName:
                                "Table Tennis Club Seceratory Elections",
                            });
                          }}
                        >
                          Table Tennis Club Seceratory Elections
                        </div>
                        <br />
                        <div
                          className="positionsItem"
                          onClick={() => {
                            this.setState({
                              activeResults: this.state.results
                                .VolleyballClubSec,
                              positionName:
                                "Volleyball Club Seceratory Elections",
                            });
                          }}
                        >
                          Volleyball Club Seceratory Elections
                        </div>
                        <br />
                        <div
                          className="positionsItem"
                          onClick={() => {
                            this.setState({
                              activeResults: this.state.results
                                .WeightLiftingClubSec,
                              positionName:
                                "Weight lifting Club Seceratory Elections",
                            });
                          }}
                        >
                          Weight lifting Club Seceratory Elections
                        </div>
                        <br />
                        <div
                          className="positionsItem"
                          onClick={() => {
                            this.setState({
                              activeResults: this.state.results
                                .TaekwondoClubSec,
                              positionName:
                                "Taekwondo Club Seceratory Elections",
                            });
                          }}
                        >
                          Taekwondo Club Seceratory Elections
                        </div>
                        <br />
                        <div
                          className="positionsItem"
                          onClick={() => {
                            this.setState({
                              activeResults: this.state.results.YogaClubSec,
                              positionName: "Yoga Club Seceratory Elections",
                            });
                          }}
                        >
                          Yoga Club Seceratory Elections
                        </div>
                        <br />
                        <div
                          className="positionsItem"
                          onClick={() => {
                            this.setState({
                              activeResults: this.state.results
                                .GirlsSportsNominee,
                              positionName:
                                "Girls Nominee for Sports Elections",
                            });
                          }}
                        >
                          Girls Nominee for Sports Elections
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
        </div>
      </OnImagesLoaded>
    );
  }
}
export default Results;
