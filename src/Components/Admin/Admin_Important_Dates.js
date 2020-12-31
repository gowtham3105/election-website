import React, { Component } from "react";
import "./Admin.css";
import DateTimePicker from "react-datetime-picker";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Redirect } from "react-router-dom";

class AdminImportantDates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      electionsDate: "",
      resultsDate: "",
      responseMessage: "",
      errormsg: "",
      show: "false",
      changeBtn: "Change Dates",
      changeBtnStatus: true,
    };
  }
  removeMessage = () => {
    this.setState({ responseMessage: "" });
  };
  sendDates = () => {
    if (this.state.electionsDate && this.state.resultsDate) {
      fetch("http://localhost:8000/api/changeImportantDates/", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tokenId: this.props.tokenId.toString(),
          electionsDate: this.state.electionsDate.toString(),
          resultsDate: this.state.resultsDate.toString(),
        }),
      })
        .then((response) => response.json())
        .then((json) => {
          this.setState({ responseMessage: json.Message });
          setTimeout(this.removeMessage, 7000);
          this.setState({ changeBtn: "Change Dates", changeBtnStatus: true });
        });
      this.setState({ changeBtn: "Changing...", changeBtnStatus: false });
    } else {
      this.setState({ errormsg: "Fill all the fields" });
    }
    //http://localhost:8000/api/changeImpDates
  };

  componentDidMount() {
    fetch(
      "http://localhost:8000/api/getImportantDates?tokenId=" +
        this.props.tokenId
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          resultsDate: new Date(data.resultsDate),
          electionsDate: new Date(data.electionsDate),
          show: true,
        });
      });
  }
  render() {
    return (
      <div>
        {this.props.isSigned && this.props.isAdmin ? (
          <div>
            <h1 className="admin-imp-h1" style={{ textAlign: "center" }}>
              Edit Important-Dates
            </h1>
            <hr />
            {this.state.show ? (
              <Container>
                <Row xs={1} md={2}>
                  <Col className="admin-impdates-col">
                    <div className="admin-impdates-label">Election Date</div>
                  </Col>
                  <Col className="admin-impdates-col">
                    <DateTimePicker
                      onChange={(val) => {
                        this.setState({ electionsDate: val });
                      }}
                      value={this.state.electionsDate}
                      className="admin-datetimepicker"
                      format="dd-MM-y h:mm a"
                      clearIcon={null}
                      minDate={new Date()}
                    />
                  </Col>
                </Row>
                <Row xs={1} md={2}>
                  <Col className="admin-impdates-col">
                    <div className="admin-impdates-label">Results Date</div>
                  </Col>
                  <Col className="admin-impdates-col">
                    <DateTimePicker
                      onChange={(val) => {
                        this.setState({ resultsDate: val });
                      }}
                      value={this.state.resultsDate}
                      className="admin-datetimepicker"
                      format="dd-MM-y h:mm a"
                      clearIcon={null}
                      minDate={new Date()}
                    />
                  </Col>
                </Row>

                <Row>
                  <Button
                    className="admin-impdates-btn"
                    onClick={this.sendDates}
                    disabled={!this.state.changeBtnStatus}
                  >
                    {this.state.changeBtn}
                  </Button>
                </Row>
                <Row>
                  <div className="admin-impdates-msg-success">
                    {this.state.responseMessage}
                  </div>
                </Row>
                <Row>
                  <div className="admin-impdates-msg-error">
                    {this.state.errormsg}
                  </div>
                </Row>
              </Container>
            ) : (
              ""
            )}

            <br />
          </div>
        ) : (
          <Redirect to="/" />
        )}
      </div>
    );
  }
}

export default AdminImportantDates;
