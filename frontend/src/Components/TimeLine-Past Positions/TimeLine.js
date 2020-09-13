import React, { Component } from "react";
import "./TimeLine.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
class TimeLine1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showOptions: false,
            position: "Gen_Sec",
        };
        this.onChangeValue = this.onChangeValue.bind(this);
    }
    handleShow = () => {
        this.setState({ showOptions: true });
        //this.setState({ selected_postion: "" })
    };
    handleClose = () => {
        this.setState({ showOptions: false });
        this.setState({ postion: "Gen_Sec" });
    };
    handleClose_only = () => {
        this.setState({ showOptions: false });
    };
    onChangeValue(event) {
        this.setState({ postion: event.target.value });
    }

    render() {
        return (
            <div>
                <>
                    <div className="ButtonDiv">
                        <Button
                            className="showpositionButton"
                            onClick={this.handleShow}
                        >
                            Select Position
                        </Button>
                    </div>

                    <Modal
                        show={this.state.showOptions}
                        onHide={this.handleClose}
                        centered
                        size="lg"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Positions</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Container className="modal_body">
                                <Row xs={1} md={2} lg={2}>
                                    <Col className="group">
                                        <div onChange={this.onChangeValue}>
                                            <input
                                                type="radio"
                                                value="Gen_Sec"
                                                name="position"
                                            />{" "}
                                            General Seceratory
                                            <br />
                                            <input
                                                type="radio"
                                                value="Gen_Sec_Tech"
                                                name="position"
                                            />{" "}
                                            General Seceratory Tech
                                            <br />
                                            <input
                                                type="radio"
                                                value="Gen_Sec_Cult"
                                                name="position"
                                            />{" "}
                                            General Seceratory Cultural
                                            <br />
                                            <input
                                                type="radio"
                                                value="Gen_Sec_Hostel"
                                                name="position"
                                            />{" "}
                                            General Seceratory Hostel
                                            <br />
                                            <input
                                                type="radio"
                                                value="Gen_Sec_Sports"
                                                name="position"
                                            />{" "}
                                            General Seceratory Sports
                                            <br />
                                        </div>
                                    </Col>
                                    <Col className="group">
                                        <div onChange={this.onChangeValue}>
                                            <input
                                                type="radio"
                                                value="Gen_Sec"
                                                name="position"
                                            />{" "}
                                            General Seceratory
                                            <br />
                                            <input
                                                type="radio"
                                                value="Gen_Sec_Tech"
                                                name="position"
                                            />{" "}
                                            General Seceratory Tech
                                            <br />
                                            <input
                                                type="radio"
                                                value="Gen_Sec_Cult"
                                                name="position"
                                            />{" "}
                                            General Seceratory Cultural
                                            <br />
                                        </div>
                                    </Col>
                                    <Col className="group">
                                        <div onChange={this.onChangeValue}>
                                            <input
                                                type="radio"
                                                value="Gen_Sec"
                                                name="position"
                                            />{" "}
                                            General Seceratory
                                            <br />
                                            <input
                                                type="radio"
                                                value="Gen_Sec_Tech"
                                                name="position"
                                            />{" "}
                                            General Seceratory Tech
                                            <br />
                                            <input
                                                type="radio"
                                                value="Gen_Sec_Cult"
                                                name="position"
                                            />{" "}
                                            General Seceratory Cultural
                                            <br />
                                        </div>
                                    </Col>
                                    <Col className="group">
                                        <div onChange={this.onChangeValue}>
                                            <input
                                                type="radio"
                                                value="Gen_Sec"
                                                name="position"
                                            />{" "}
                                            General Seceratory
                                            <br />
                                            <input
                                                type="radio"
                                                value="Gen_Sec_Tech"
                                                name="position"
                                            />{" "}
                                            General Seceratory Tech
                                            <br />
                                            <input
                                                type="radio"
                                                value="Gen_Sec_Cult"
                                                name="position"
                                            />{" "}
                                            General Seceratory Cultural
                                            <br />
                                        </div>
                                    </Col>
                                    <Col className="group">
                                        <div onChange={this.onChangeValue}>
                                            <input
                                                type="radio"
                                                value="Gen_Sec"
                                                name="position"
                                            />{" "}
                                            General Seceratory
                                            <br />
                                            <input
                                                type="radio"
                                                value="Gen_Sec_Tech"
                                                name="position"
                                            />{" "}
                                            General Seceratory Tech
                                            <br />
                                            <input
                                                type="radio"
                                                value="Gen_Sec_Cult"
                                                name="position"
                                            />{" "}
                                            General Seceratory Cultural
                                            <br />
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                variant="secondary"
                                onClick={this.handleClose}
                            >
                                Close
                            </Button>
                            <Button
                                variant="primary"
                                onClick={this.handleClose_only}
                            >
                                Show
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>

                <ul id="timeline">
                    <li className="entry">
                        <input
                            className="radio"
                            id="trigger5"
                            name="trigger"
                            type="radio"
                        />
                        <label htmlFor="trigger5">
                            <span>2016</span>
                        </label>
                        <span className="date">2016</span>
                        <span className="circle"></span>
                        <div className="content">
                            <div className="timeline_card">
                                <Container>
                                    <Row sm={1} md={2}>
                                        <Col>
                                            <Image
                                                className="timeline_img"
                                                src="https://res-1.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco/v1487985168/ytuofcigxo6oaznmlpwn.png"
                                                roundedCircle
                                            />
                                        </Col>
                                        <Col>
                                            <h3>Omkar</h3>
                                            <p>
                                                2019 Batch
                                                <br />
                                                Computer Science
                                            </p>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                    </li>
                    <li className="entry">
                        <input
                            className="radio"
                            id="trigger4"
                            name="trigger"
                            type="radio"
                        />
                        <label htmlFor="trigger4">
                            <span>2017</span>
                        </label>
                        <span className="date">2017</span>
                        <span className="circle"></span>
                        <div className="content">
                            <div className="timeline_card">
                                <Container>
                                    <Row sm={1} md={2}>
                                        <Col>
                                            <Image
                                                className="timeline_img"
                                                src="https://res-1.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco/v1487985168/ytuofcigxo6oaznmlpwn.png"
                                                roundedCircle
                                            />
                                        </Col>
                                        <Col>
                                            <h3>Abhishek</h3>
                                            <p>
                                                2019 Batch
                                                <br />
                                                Computer Science
                                            </p>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                    </li>
                    <li className="entry">
                        <input
                            className="radio"
                            id="trigger3"
                            name="trigger"
                            type="radio"
                        />
                        <label htmlFor="trigger3">
                            <span>2018</span>
                        </label>
                        <span className="date">2018</span>
                        <span className="circle"></span>
                        <div className="content">
                            <div className="timeline_card">
                                <Container>
                                    <Row sm={1} md={2}>
                                        <Col>
                                            <Image
                                                className="timeline_img"
                                                src="https://res-1.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco/v1487985168/ytuofcigxo6oaznmlpwn.png"
                                                roundedCircle
                                            />
                                        </Col>
                                        <Col>
                                            <h3>Ramoji</h3>
                                            <p>
                                                2019 Batch
                                                <br />
                                                Computer Science
                                            </p>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                    </li>
                    <li className="entry">
                        <input
                            className="radio"
                            id="trigger2"
                            name="trigger"
                            type="radio"
                        />
                        <label htmlFor="trigger2">
                            <span>2019</span>
                        </label>
                        <span className="date">2019</span>
                        <span className="circle"></span>
                        <div className="content">
                            <div className="timeline_card">
                                <Container>
                                    <Row sm={1} md={2}>
                                        <Col>
                                            <Image
                                                className="timeline_img"
                                                src="https://res-1.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco/v1487985168/ytuofcigxo6oaznmlpwn.png"
                                                roundedCircle
                                            />
                                        </Col>
                                        <Col>
                                            <h3>Sattwik Mishra</h3>
                                            <p>
                                                2019 Batch
                                                <br />
                                                Computer Science
                                            </p>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                    </li>
                    <li className="entry">
                        <input
                            className="radio"
                            id="trigger1"
                            name="trigger"
                            type="radio"
                            defaultChecked
                        />
                        <label htmlFor="trigger1">
                            <span>2020 </span>
                        </label>
                        <span className="date">2020</span>
                        <span className="circle"></span>
                        <div className="content">
                            <div className="timeline_card">
                                <Container>
                                    <Row sm={1} md={2}>
                                        <Col>
                                            <Image
                                                className="timeline_img"
                                                src="https://res-1.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco/v1487985168/ytuofcigxo6oaznmlpwn.png"
                                                roundedCircle
                                            />
                                        </Col>
                                        <Col>
                                            <h3>Gowtham Sai</h3>
                                            <p>
                                                2019 Batch
                                                <br />
                                                Computer Science
                                            </p>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}
export default TimeLine1;
