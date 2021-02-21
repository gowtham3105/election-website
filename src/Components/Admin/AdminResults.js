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
import { api_endpoint } from "../../Global";

class AdminResults extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Results: {},
      elecTurnout: 0.0,
      activeResults: [],
      showModal: false,
      positionName: "General Secretary Academic Affairs",
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
    fetch(api_endpoint + "/api/admin/results?tokenId=" + this.props.tokenId)
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ Results: users });
        this.setState({
          activeResults: users[0].elections[0].elec_candidates,
          positionName: users[0].elections[0].elec_name,
          elecTurnout: users[0].elections[0].elec_turnout,
        });
      });
  }
  sortfun1 = (a, b) => {
    if (a["cand_id"] !== 0 && b["cand_id"] !== 0) {
      if (Number(a["cand_vote_num"]) > Number(b["cand_vote_num"])) return -1;
      else if (Number(a["cand_vote_num"]) === Number(b["cand_vote_num"])) {
        if(a['cand_name'] > b['cand_name']) return 1
        else return -1
      }
      else return 1;
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
    this.setState({
      activeResults: results,
      positionName: positionName,
      showModal: false,
      elecTurnout: elecTurn,
    });
    return true;
  };
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
              this.setState({ showModal: true });
            }}
          >
            Select Position
          </Button>
        </div>
        <div className="positionname">
          <Fade spy={this.state.positionName}>
            <div>
              {this.state.positionName} - Turnout: {this.state.elecTurnout} %
            </div>
          </Fade>
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
                            onClickAccordion={this.onClickAccordion}
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
                          {Math.trunc(user.cand_vote_percent)} % (
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
    );
  }
}

export { AdminResults };
