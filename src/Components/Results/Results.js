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
import ResultsAccordion from "./ResultsAccordion";
import { setopacity } from "./../../App";
import { api_endpoint } from "../../Global";
import disableScroll from "disable-scroll";
var mounted = true;
class Results extends Component {
  
  constructor(props) {
    
    super(props);
    window.scrollTo(0, 0);
    disableScroll.on();
    setopacity(0);
    this.props.showLoader();
    this.state = {
      Results: {},
      elecTurnout: 0.0,
      activeResults: [],
      showModal: false,
      positionName: "General Secretary Academic Affairs",
      showImages: false,
      loadContent: false,
      gotResponse: false,
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
        "#1c5c13",
        "#4d0e00",
      ],
    };
    this.remainingColors = this.state.barColors;
    this.props.showLoader();
    // eslint-disable-next-line no-func-assign
    //onClickAccordion = onClickAccordion.bind(this);
  }

  componentDidMount() {
    mounted = true;
    window.scrollTo(0, 0);
    fetch(api_endpoint + "/api/results?tokenId=" + this.props.tokenId)
      .then((response) => {
        // console.log(response);
        if (response.ok) {
          return response.json();
        } else {
          // eslint-disable-next-line no-throw-literal
          throw "error";
        }
      })
      .then((users) => {
        //  console.log(users);
        setopacity(1);
        if(mounted)
        this.setState({
          Results: users,
          activeResults: users[0].elections[0].elec_candidates,
          positionName: users[0].elections[0].elec_name,
          loadContent: true,
          gotResponse: true,
          elecTurnout: users[0].elections[0].elec_turnout,
        });
        //this.props.hideLoader();
      })
      .catch((error) => {
        //  console.log("no response");
        if (mounted)
          this.setState({
            loadContent: true,
            gotResponse: false,
          });
      });
  }

  componentDidUpdate() {
    if (this.state.loadContent === false && this.props.isResultsDay) {
      fetch(api_endpoint + "/api/results?tokenId=" + this.props.tokenId)
        .then((response) => {
          // console.log(response);
          if (response.ok) {
            return response.json();
          } else {
            // eslint-disable-next-line no-throw-literal
            throw "error";
          }
        })
        .then((users) => {
          //  console.log(users);
          setopacity(1);
          if (mounted)
            this.setState({
              Results: users,
              activeResults: users[0].elections[0].elec_candidates,
              positionName: users[0].elections[0].elec_name,
              elecTurnout: users[0].elections[0].elec_turnout,
              loadContent: true,
              gotResponse: true,
            });
          //this.props.hideLoader();
        })
        .catch((error) => {
          //  console.log("no response");
          if (mounted)
            this.setState({
              loadContent: true,
              gotResponse: false,
            });
        });
    }
  }
  
  componentWillUnmount() {
    mounted = false;
  }
  sortfun1 = (a, b) => {
    if (a["cand_id"] !== 0 && b["cand_id"] !== 0) {
      if (Number(a["cand_vote_num"]) > Number(b["cand_vote_num"])) return -1;
      else if (Number(a["cand_vote_num"]) === Number(b["cand_vote_num"])) {
        if (a["cand_name"] > b["cand_name"]) return 1;
        else return -1;
      } else return 1;
    } else if (a["cand_id"] === 0) {
      return 1;
    } else {
      return -1;
    }
  };

  sendCands = () => {
    var arr = this.state.activeResults.sort(this.sortfun1);
    return arr;
  };

  onClickAccordion = (results, positionName, elecTurn) => {
    if (mounted)
      this.setState({
        activeResults: results,
        positionName: positionName,
        elecTurnout: elecTurn,
        showModal: false,
      });
    return true;
  };
  render() {
    return (
      <div>
        {this.props.loadContent ? (
          this.props.isResultsDay ? (
            this.state.gotResponse ? (
              <div>
                <div style={{ opacity: this.state.loadContent }}>
                  <OnImagesLoaded
                    onLoaded={() => {
                      if (mounted) this.setState({ showImages: true });
                      this.props.hideLoader();
                      disableScroll.off();
                    }}
                    onTimeout={() => {
                      if (mounted) this.setState({ showImages: true });
                      this.props.hideLoader();
                      disableScroll.off();
                    }}
                    timeout={25000}
                  >
                    <div style={{ opacity: this.state.showImages ? 1 : 0 }}>
                      <div className="teamdesk">
                        <div className="topbannerteam">
                          <div className="titlebanteam">
                            {" "}
                            Results
                            <p>IIT Dharwad Elections 2021-22 Phase - II</p>
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
                              <br /> 2021-22 Phase - II
                            </p>
                          </div>
                        </div>
                      </div>

                      <br />
                      <Modal
                        show={this.state.showModal}
                        onHide={() => {
                          if (mounted) this.setState({ showModal: false });
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
                          <Accordion
                            defaultActiveKey="1"
                            className="positionslist"
                          >
                            {this.state.Results.length
                              ? this.state.Results.map((item, key) => {
                                  return (
                                    <ResultsAccordion
                                      key={key}
                                      eventKey={key + 1}
                                      item={item}
                                      onClickAccordion={this.onClickAccordion}
                                    />
                                  );
                                })
                              : ""}
                          </Accordion>
                        </Modal.Body>
                      </Modal>
                      <div>
                        <Button
                          className="positionslistbtn"
                          style={{ display: "none" }}
                          onClick={() => {
                            if (mounted) this.setState({ showModal: true });
                          }}
                        >
                          Select Position
                        </Button>
                      </div>
                      <div className="positionname">
                        <Fade spy={this.state.positionName}>
                          <div>
                            {this.state.positionName} - Turnout:{" "}
                            {this.state.elecTurnout} %
                          </div>
                        </Fade>
                      </div>
                      <div className="resultsinfo">
                        <Container fluid>
                          <Row>
                            <Col className="positionslistcol">
                              <Accordion
                                defaultActiveKey="1"
                                className="positionslist"
                              >
                                {this.state.Results.length
                                  ? this.state.Results.map((item, key) => {
                                      return (
                                        <ResultsAccordion
                                          key={key}
                                          eventKey={key + 1}
                                          item={item}
                                          onClickAccordion={
                                            this.onClickAccordion
                                          }
                                        />
                                      );
                                    })
                                  : ""}
                              </Accordion>
                            </Col>
                            <Col>
                              <div className="resultshead">
                                {this.sendCands().map((user, i) => {
                                  var cand_frontcolor = this.state.barColors[
                                    Math.floor(
                                      Math.random() *
                                        this.state.barColors.length
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
                                        {Math.trunc(user.cand_vote_percent)}% (
                                        {user.cand_vote_num})
                                      </span>
                                      <div
                                        className="candidate__bar"
                                        style={{
                                          background: cand_frontcolor,
                                          width: user.cand_result_width + "%",
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
                </div>
              </div>
            ) : (
              <div style={{minHeight:'110vh'}}></div>
            )
          ) : (
            <Redirect to="/" />
          )
        ) : (
          ""
        )}
      </div>
    );
  }
}

export { Results };
