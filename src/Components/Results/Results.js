import React, { Component } from "react";
import "./Results.css";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import OnImagesLoaded from "react-on-images-loaded";
import resultsImg from "./result.jpeg";
import Fade from "react-reveal/Fade";
import { Redirect } from "react-router-dom";

class Results extends Component {
  constructor(props) {
    super(props);

    this.props.showLoader();
    this.state = {
      results: {
        GenELections: [],
        TechClubElections: [],
        CulturalClubElections: [],
        SportsClubElections: [],
        MessSecretaryElections: [],
        HostelSecretaryElections: [],
        AcademicCRElections: [],
      },
      activeResults: [],
      showModal: false,
      positionName: "General Seceratory Elections",
      showImages: false,
      barColors: [
        "#6f2891",
        "#e6a100",
        "#e62300",
        "#04de1e",
        "#d904b5",
        "#8bd904",
        "#0066ff",
        "#ff0055",
        "#ff8800",
        "#00d9ff",
        "#1c5c13",
        "#4d0e00",
      ],
    };
    this.remainingColors = this.state.barColors;
  }

  componentDidMount() {
    if (this.props.isResultsDay) {
      fetch("https://election-website-test.herokuapp.com/results")
        .then((response) => {
          return response.json();
        })
        .then((users) => {
          this.setState({ results: users });
          this.setState({
            activeResults: users.GenELections[0].elec_result_cand,
          });
        });
    }
  }

  render() {
    return (
      <div>
        {this.props.isResultsDay ? (
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
                    src={resultsImg}
                    className="topbannerimgteam"
                    alt="result.jpeg"
                  />
                </div>
              </div>

              <div className="teammobile">
                <div className="topbannerteam">
                  <img
                    src={resultsImg}
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
                        {this.state.results.GenELections.length
                          ? this.state.results.GenELections.map((candi, i) => {
                              return (
                                <div
                                  className="positionsItem"
                                  onClick={() => {
                                    this.setState({
                                      activeResults: candi.elec_result_cand,
                                      positionName: candi.elec_name,
                                      showModal: false,
                                    });
                                  }}
                                  key={i}
                                >
                                  {candi.elec_name}
                                </div>
                              );
                            })
                          : ""}
                      </div>
                    </Accordion.Collapse>
                    <Accordion.Toggle
                      as={Button}
                      variant="link"
                      eventKey="1"
                      className="positionlistgroup"
                    >
                      Techinical Club Elections
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <div>
                        {this.state.results.TechClubElections.length
                          ? this.state.results.TechClubElections.map(
                              (candi, i) => {
                                return (
                                  <div
                                    className="positionsItem"
                                    onClick={() => {
                                      this.setState({
                                        activeResults: candi.elec_result_cand,
                                        positionName: candi.elec_name,
                                        showModal: false,
                                      });
                                    }}
                                    key={i}
                                  >
                                    {candi.elec_name}
                                  </div>
                                );
                              }
                            )
                          : ""}
                      </div>
                    </Accordion.Collapse>
                    <Accordion.Toggle
                      as={Button}
                      variant="link"
                      eventKey="2"
                      className="positionlistgroup"
                    >
                      Cultural Club Elections
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                      <div>
                        {this.state.results.CulturalClubElections.length
                          ? this.state.results.CulturalClubElections.map(
                              (candi, i) => {
                                return (
                                  <div
                                    className="positionsItem"
                                    onClick={() => {
                                      this.setState({
                                        activeResults: candi.elec_result_cand,
                                        positionName: candi.elec_name,
                                        showModal: false,
                                      });
                                    }}
                                    key={i}
                                  >
                                    {candi.elec_name}
                                  </div>
                                );
                              }
                            )
                          : ""}
                      </div>
                    </Accordion.Collapse>
                    <Accordion.Toggle
                      as={Button}
                      variant="link"
                      eventKey="3"
                      className="positionlistgroup"
                    >
                      Sports Club Elections
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                      <div>
                        {this.state.results.SportsClubElections.length
                          ? this.state.results.SportsClubElections.map(
                              (candi, i) => {
                                return (
                                  <div
                                    className="positionsItem"
                                    onClick={() => {
                                      this.setState({
                                        activeResults: candi.elec_result_cand,
                                        positionName: candi.elec_name,
                                        showModal: false,
                                      });
                                    }}
                                    key={i}
                                  >
                                    {candi.elec_name}
                                  </div>
                                );
                              }
                            )
                          : ""}
                      </div>
                    </Accordion.Collapse>
                    <Accordion.Toggle
                      as={Button}
                      variant="link"
                      eventKey="4"
                      className="positionlistgroup"
                    >
                      Mess Secretary Elections
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                      <div>
                        {this.state.results.MessSecretaryElections.length
                          ? this.state.results.MessSecretaryElections.map(
                              (candi, i) => {
                                return (
                                  <div
                                    className="positionsItem"
                                    onClick={() => {
                                      this.setState({
                                        activeResults: candi.elec_result_cand,
                                        positionName: candi.elec_name,
                                        showModal: false,
                                      });
                                    }}
                                    key={i}
                                  >
                                    {candi.elec_name}
                                  </div>
                                );
                              }
                            )
                          : ""}
                      </div>
                    </Accordion.Collapse>
                    <Accordion.Toggle
                      as={Button}
                      variant="link"
                      eventKey="5"
                      className="positionlistgroup"
                    >
                      Hostel Secretary Elections
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="5">
                      <div>
                        {this.state.results.HostelSecretaryElections.length
                          ? this.state.results.HostelSecretaryElections.map(
                              (candi, i) => {
                                return (
                                  <div
                                    className="positionsItem"
                                    onClick={() => {
                                      this.setState({
                                        activeResults: candi.elec_result_cand,
                                        positionName: candi.elec_name,
                                        showModal: false,
                                      });
                                    }}
                                    key={i}
                                  >
                                    {candi.elec_name}
                                  </div>
                                );
                              }
                            )
                          : ""}
                      </div>
                    </Accordion.Collapse>
                    <Accordion.Toggle
                      as={Button}
                      variant="link"
                      eventKey="6"
                      className="positionlistgroup"
                    >
                      Academic CR Elections
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="6">
                      <div>
                        {this.state.results.AcademicCRElections.length
                          ? this.state.results.AcademicCRElections.map(
                              (candi, i) => {
                                return (
                                  <div
                                    className="positionsItem"
                                    onClick={() => {
                                      this.setState({
                                        activeResults: candi.elec_result_cand,
                                        positionName: candi.elec_name,
                                        showModal: false,
                                      });
                                    }}
                                    key={i}
                                  >
                                    {candi.elec_name}
                                  </div>
                                );
                              }
                            )
                          : ""}
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
              <div className="positionname">
                <Fade spy={this.state.positionName}>
                  {this.state.positionName}
                </Fade>
              </div>
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
                            {this.state.results.GenELections.length
                              ? this.state.results.GenELections.map(
                                  (candi, i) => {
                                    return (
                                      <div
                                        className="positionsItem"
                                        onClick={() => {
                                          this.setState({
                                            activeResults:
                                              candi.elec_result_cand,
                                            positionName: candi.elec_name,
                                          });
                                        }}
                                        key={i}
                                      >
                                        {candi.elec_name}
                                      </div>
                                    );
                                  }
                                )
                              : ""}
                          </div>
                        </Accordion.Collapse>
                        <Accordion.Toggle
                          as={Button}
                          variant="link"
                          eventKey="1"
                          className="positionlistgroup"
                        >
                          Techinical Club Elections
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                          <div>
                            {this.state.results.TechClubElections.length
                              ? this.state.results.TechClubElections.map(
                                  (candi, i) => {
                                    return (
                                      <div
                                        className="positionsItem"
                                        onClick={() => {
                                          this.setState({
                                            activeResults:
                                              candi.elec_result_cand,
                                            positionName: candi.elec_name,
                                          });
                                        }}
                                        key={i}
                                      >
                                        {candi.elec_name}
                                      </div>
                                    );
                                  }
                                )
                              : ""}
                          </div>
                        </Accordion.Collapse>
                        <Accordion.Toggle
                          as={Button}
                          variant="link"
                          eventKey="2"
                          className="positionlistgroup"
                        >
                          Cultural Club Elections
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                          <div>
                            {this.state.results.CulturalClubElections.length
                              ? this.state.results.CulturalClubElections.map(
                                  (candi, i) => {
                                    return (
                                      <div
                                        className="positionsItem"
                                        onClick={() => {
                                          this.setState({
                                            activeResults:
                                              candi.elec_result_cand,
                                            positionName: candi.elec_name,
                                          });
                                        }}
                                        key={i}
                                      >
                                        {candi.elec_name}
                                      </div>
                                    );
                                  }
                                )
                              : ""}
                          </div>
                        </Accordion.Collapse>
                        <Accordion.Toggle
                          as={Button}
                          variant="link"
                          eventKey="3"
                          className="positionlistgroup"
                        >
                          Sports Club Elections
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                          <div>
                            {this.state.results.SportsClubElections.length
                              ? this.state.results.SportsClubElections.map(
                                  (candi, i) => {
                                    return (
                                      <div
                                        className="positionsItem"
                                        onClick={() => {
                                          this.setState({
                                            activeResults:
                                              candi.elec_result_cand,
                                            positionName: candi.elec_name,
                                          });
                                        }}
                                        key={i}
                                      >
                                        {candi.elec_name}
                                      </div>
                                    );
                                  }
                                )
                              : ""}
                          </div>
                        </Accordion.Collapse>
                        <Accordion.Toggle
                          as={Button}
                          variant="link"
                          eventKey="4"
                          className="positionlistgroup"
                        >
                          Mess Secretary Elections
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="4">
                          <div>
                            {this.state.results.MessSecretaryElections.length
                              ? this.state.results.MessSecretaryElections.map(
                                  (candi, i) => {
                                    return (
                                      <div
                                        className="positionsItem"
                                        onClick={() => {
                                          this.setState({
                                            activeResults:
                                              candi.elec_result_cand,
                                            positionName: candi.elec_name,
                                          });
                                        }}
                                        key={i}
                                      >
                                        {candi.elec_name}
                                      </div>
                                    );
                                  }
                                )
                              : ""}
                          </div>
                        </Accordion.Collapse>
                        <Accordion.Toggle
                          as={Button}
                          variant="link"
                          eventKey="5"
                          className="positionlistgroup"
                        >
                          Hostel Secretary Elections
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="5">
                          <div>
                            {this.state.results.HostelSecretaryElections.length
                              ? this.state.results.HostelSecretaryElections.map(
                                  (candi, i) => {
                                    return (
                                      <div
                                        className="positionsItem"
                                        onClick={() => {
                                          this.setState({
                                            activeResults:
                                              candi.elec_result_cand,
                                            positionName: candi.elec_name,
                                          });
                                        }}
                                        key={i}
                                      >
                                        {candi.elec_name}
                                      </div>
                                    );
                                  }
                                )
                              : ""}
                          </div>
                        </Accordion.Collapse>
                        <Accordion.Toggle
                          as={Button}
                          variant="link"
                          eventKey="6"
                          className="positionlistgroup"
                        >
                          Academic CR Elections
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="6">
                          <div>
                            {this.state.results.AcademicCRElections.length
                              ? this.state.results.AcademicCRElections.map(
                                  (candi, i) => {
                                    return (
                                      <div
                                        className="positionsItem"
                                        onClick={() => {
                                          this.setState({
                                            activeResults:
                                              candi.elec_result_cand,
                                            positionName: candi.elec_name,
                                          });
                                        }}
                                        key={i}
                                      >
                                        {candi.elec_name}
                                      </div>
                                    );
                                  }
                                )
                              : ""}
                          </div>
                        </Accordion.Collapse>
                      </Accordion>
                    </Col>
                    <Col>
                      <div className="resultshead">
                        {this.state.activeResults.map((user, i) => {
                          var cand_frontcolor = this.state.barColors[
                            Math.floor(
                              Math.random() * this.state.barColors.length
                            )
                          ];
                          var cand_backcolor = cand_frontcolor + "80";
                          return (
                            <div
                              className="candidate-result"
                              style={{ background: cand_backcolor }}
                              key={i}
                            >
                              <h2 className="candidate__name">
                                {user.cand_name}
                              </h2>
                              <span className="candidate__description">
                                {user.cand_branch}
                              </span>
                              <span className="candidate__percent">
                                {user.cand_vote_percent} ({user.cand_vote_num})
                              </span>
                              <div
                                className="candidate__bar"
                                style={{
                                  background: cand_frontcolor,
                                  width: user.cand_result_width,
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
        ) : (
           <Redirect to="/" />
        )}
      </div>
    );
  }
}
export default Results;
