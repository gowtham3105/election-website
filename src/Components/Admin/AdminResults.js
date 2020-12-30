import React, { Component } from "react";
import "./Admin.css";
import "./AdminResults.css";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Fade from "react-reveal/Fade";

import AdminResultsAccordion from "./AdminResultsAccordion";

class AdminResults extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Results: {},
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
    // eslint-disable-next-line no-func-assign
    onClickAccordion = onClickAccordion.bind(this);
  }

  componentDidMount() {
    fetch(
      "http://localhost:8000/api/admin/results?tokenId=" + this.props.tokenId
    )
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ Results: users });
        this.setState({
          activeResults: users[0].elections[0].elec_candidates,
          positionName: users[0].elections[0].elec_name,
        });
      });
  }

  render() {
    return (
      <div>
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
            <Accordion defaultActiveKey="1" className="positionslist">
              {this.state.Results.length
                ? this.state.Results.map((item, key) => {
                    return (
                      <AdminResultsAccordion
                        key={key}
                        eventKey={key + 1}
                        item={item}
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
              this.setState({ showModal: true });
            }}
          >
            Select Position
          </Button>
        </div>
        <div className="positionname">
          <Fade spy={this.state.positionName}>{this.state.positionName}</Fade>
        </div>
        <div className="resultsinfo">
          <Container fluid>
            <Row>
              <Col className="positionslistcol">
                <Accordion defaultActiveKey="1" className="positionslist">
                  {this.state.Results.length
                    ? this.state.Results.map((item, key) => {
                        return (
                          <AdminResultsAccordion
                            key={key}
                            eventKey={key + 1}
                            item={item}
                          />
                        );
                      })
                    : ""}
                </Accordion>
              </Col>
              <Col>
                <div className="resultshead">
                  {this.state.activeResults.map((user, i) => {
                    var cand_frontcolor = this.state.barColors[
                      Math.floor(Math.random() * this.state.barColors.length)
                    ];
                    var cand_backcolor = cand_frontcolor + "80";
                    return (
                      <div
                        className="candidate-result"
                        style={{ background: cand_backcolor }}
                        key={i}
                      >
                        <h2 className="candidate__name">{user.cand_name}</h2>
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
    );
  }
}

function onClickAccordion(results, positionName) {
  this.setState({
    activeResults: results,
    positionName: positionName,
    showModal: false,
  });
  return true;
}

export { AdminResults, onClickAccordion };
