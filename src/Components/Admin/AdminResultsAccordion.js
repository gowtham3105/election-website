import React, { Component } from "react";
import "./AdminResults.css";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";

class AdminResultsAccordion extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // render() {
  //   return (
  //     <div>
  //       S
  //     </div>
  //   )

  // }

  render() {
    return (
      <div>
        <Accordion.Toggle
          as={Button}
          variant="link"
          eventKey={this.props.eventKey.toString()}
          className="positionlistgroup"
        >
          {this.props.item.name}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={this.props.eventKey.toString()}>
          <div>
            {this.props.item.elections.length
              ? this.props.item.elections.map((candi, i) => {
                return (
                  <div
                    className="positionsItem"
                    onClick={() => {
                      this.props.onClickAccordion(
                        candi.elec_candidates,
                        candi.elec_name,
                        candi.elec_turnout
                      );
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
      </div>
    );
  }
}

export default AdminResultsAccordion;