import React, { Component } from "react";
import CardList from "./../Cardlist/CardList";
import "./Positions.css";
import Button from "react-bootstrap/Button";
class Positions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      show: true,
    };
  }

  handleCLick = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Button onClick={this.handleCLick} className="Positions">
          <div className="positionsname">{this.state.name}</div>
          <div className="eligibile">
            Eligibility Criteria to Vote: 
            {" "+this.props.criteria}
            <br />
            For More, Check Your Profile.
            <br />
          </div>
        </Button>

        <br />

        {this.state.show ? (
          <CardList
            increaseHeight={
              this.props.name === "General Secretary Cultural Affairs"
                ? true
                : false
            }
            updateLoadx={this.props.updateLoadx}
            robots={this.props.robots.sort(function (a, b) {
              if (a["cand_name"] >= b["cand_name"]) {
                return 1;
              } else if (a["cand_name"] < b["cand_name"]) {
                return -1;
              }
              return 0;
            })}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Positions;
