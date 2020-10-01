import React, { Component } from "react";
import CardList from "./../Cardlist/CardList";
import "./Positions.css";
import Button from "react-bootstrap/Button";
class Positions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      show: false,
    };
  }

  handleCLick = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    return (
      <div>
        
        <Button onClick={this.handleCLick} className="Positions">
          <div className="positionsname">{this.state.name}</div>
          <div className="eligibile">
            Eligibility Criteria to Vote:
            {this.props.criteria}
            <br />
            For More, Check Your Profile.
          </div>
        </Button>

        <br />

        {this.state.show ? <CardList robots={this.props.robots} /> : ""}
      </div>
    );
  }
}

export default Positions;
