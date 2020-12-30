import React, { Component } from "react";
import "./Results.css";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import { onClickAccordion } from "./Results"

class ResultsAccordion extends Component {
    constructor(props) {
        super(props)
        console.log(this.props);
        this.state = {
            
        }
    }

    render() {
        return (
          <div>
            <Accordion.Toggle
              as={Button}
              variant="link"
              eventKey={this.props.eventKey}
              className="positionlistgroup"
            >
              {this.props.item.name}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={this.props.eventKey}>
              <div>
                {this.props.item.elections.length
                  ? this.props.item.elections.map((candi, i) => {
                      return (
                        <div
                          className="positionsItem"
                          onClick={() => {
                            onClickAccordion(
                              candi.elec_candidates,
                              candi.elec_name,
                              
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

export default ResultsAccordion;