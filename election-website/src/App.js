import React, { Component } from "react";
import ReactPlayer from "react-player/lazy";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Countdown from "react-countdown";
import Nav from "react-bootstrap/Nav";
import "./App.css";
import Positions from "./Components/Positons/Positions";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as firebase from "firebase/app";
import Homedetails from "./Components/Homedetails/Homedetails";
import Footer from "./Components/Footer/Footer";
import Renderer from "./Components/Renderer";
import "firebase/analytics";
import "firebase/auth";
import TimeLine1 from "./Components/TimeLine-Past Positions/TimeLine";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import Results from "./Components/Results/Results"
var robots_cand = [];

class Video extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Modal
          show={true}
          onHide={() => {
            showModel(false, "");
          }}
          size="lg"
          centered
        >
          <ReactPlayer
            url={this.props.videourl}
            controls
            playing
            width="100"
            height="420px"
          />
        </Modal>
      </div>
    );
  }
}

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      value: "Sign In",
    };
    const firebaseConfig = {
      apiKey: "AIzaSyDlX7lmjT-hyijYWx3nX1XoWWFrThy8f1U",
      authDomain: "election-website-950cb.firebaseapp.com",
      databaseURL: "https://election-website-950cb.firebaseio.com",
      projectId: "election-website-950cb",
      storageBucket: "election-website-950cb.appspot.com",
      messagingSenderId: "1013188453463",
      appId: "1:1013188453463:web:7051145144d8175a482f12",
      measurementId: "G-MDHD2F6PHR",
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ value: "Sign Out" });
      } else {
        this.setState({ value: "Sign In" });
      }
    });
  }

  login = () => {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        var token = result.credential.accessToken;
        var user = result.user;

        if (user.email.slice(-12) === "@iitdh.ac.in") {
          console.log("logged in");
        } else {
          this.logout();
          setError("Unauthorised User\nPlease Login with valid email id", true);
        }
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        setError("Error while Logging In Please Try Again", true);
        console.log(errorMessage);
      });
  };

  logout = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        console.log("Signed Out");
      })
      .catch(function (error) {
        setError("Unable to Sign Out Please Try Again", true);
      });
  };

  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" variant="light" className="NavBar">
          <Navbar.Brand href="/">
            <div className="primary_Text">IITDH Elections</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav" className="NavBar">
            <Nav className="mr-auto " fill>
              {firebase.auth().currentUser ? (
                <>
                  <Nav.Link
                    onClick={() => {
                      setShowAccount(true);
                    }}
                    className="NavLink"
                  >
                    Profile
                  </Nav.Link>
                </>
              ) : (
                ""
              )}
              <Nav.Link href="/positions" className="NavLink">
                <div className="secondary_Text">Positions</div>
              </Nav.Link>
              <Nav.Link href="/voting" className="NavLink">
                Voting
              </Nav.Link>
              <Nav.Link href="/timeline" className="NavLink">
                TimeLine
              </Nav.Link>
              <Nav.Link href="/important dates" className="NavLink">
                Important Dates
              </Nav.Link>
              <Nav.Link href="/contact" className="NavLink">
                Contact Us
              </Nav.Link>
            </Nav>

            <Nav fill>
              <Nav.Link>
                <Button
                  onClick={() => {
                    if (!firebase.auth().currentUser) {
                      this.login();
                    } else {
                      this.logout();
                    }
                  }}
                  className="Button"
                >
                  {this.state.value}
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        
        <Results />
      </div>
    );
  }
}

class ImportantDates extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <h1>Important Dates</h1>;
  }
}

class TimeLine extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <TimeLine1 />
      </div>
    );
  }
}

class Voting extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <h1>Voting Page</h1>;
  }
}

class Elections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      videourl: "https://www.youtube.com/watch?v=qmN1Gf8rRc8",
      robots: [],
      Positions_robots: [],
    };
    // eslint-disable-next-line no-func-assign
    showModel = showModel.bind(this);
  }
  getJson(link) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        robots_cand = JSON.parse(this.responseText);
        return JSON.parse(this.responseText);
      }
    };
    xhttp.open("GET", link, false);
    xhttp.send();
  }
  showPositions = (user, i) => {
    this.getJson(user.candidatesLink);
    return (
      <Positions
        robots={robots_cand}
        name={user.positionName}
        criteria={user.criteria}
        key={i}
      />
    );
  };
  componentDidMount() {
    fetch("http://127.0.0.1:5000/positions")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ Positions_robots: users });
      });
  }

  render() {
    return (
      <div>
        <div className="positionsimghead"></div>
        <img src="elections.jpg" alt="elections" className="positionsimghead" />
        <div className="positionshead">Candidates</div>
        {this.state.show ? <Video videourl={this.state.videourl} /> : " "}
        <br />
        {this.state.Positions_robots.map(this.showPositions)}
      </div>
    );
  }
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  //    <img src='back.jpeg' className="back" width='100%'/>

  render() {
    return (
      <div>
        <Homedetails />
        <Countdown date={Date.now() + 1000000} renderer={Renderer} />
        <Footer />
      </div>
    );
  }
}

class Error extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  Error = () => {
    const handleClose = () => setError("", false);

    return (
      <>
        <Modal show={this.props.showError} onHide={handleClose}>
          <Modal.Header className="errorheader">
            <i className="material-icons erroricon">error_outline</i>
          </Modal.Header>

          <Modal.Body>
            <div className="ooops">Ooops!</div>
            <h6 className="error">{this.props.msg}</h6>
          </Modal.Body>

          <Button
            variant="secondary"
            className="errorclose"
            onClick={handleClose}
          >
            Close
          </Button>
          <br />
        </Modal>
      </>
    );
  };
  render() {
    return <div>{this.Error()}</div>;
  }
}

class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: this.props.show,
      details: {
        Eligible_Positions: [],
      },
    };
  }
  showpos = () => {
    return (
      <ul>
        {this.state.details.Eligible_Positions.map((reptile, i) => (
          <li key={i}>{reptile}</li>
        ))}
      </ul>
    );
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        fetch(
          "http://127.0.0.1:5000/accountdetails?email=" +
            firebase.auth().currentUser.email
        )
          .then((response) => {
            return response.json();
          })
          .then((users) => {
            this.setState({ details: users[0] });
          });
      }
    });
  }

  render() {
    return (
      <div>
        {console.log(this.state.details.Eligible_Positions)}
        <Modal
          show={this.props.show && firebase.auth().currentUser.emailVerified}
          onHide={() => {
            setShowAccount(false);
          }}
          animation={true}
          size="lg"
        >
          <Modal.Header className="profileheadparent">
            <div className="profilehead">Profile</div>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row xs={1} md={2} lg={2}>
                <Col>
                  <div className="accountbasics">
                    <div className="accountheading">
                      Name
                      <br />
                    </div>
                    {this.state.details.name}
                    <br />
                    <div className="accountheading">
                      Branch
                      <br />
                    </div>
                    {this.state.details.branch}
                    <br />
                    <div className="accountheading">
                      Roll No
                      <br />
                    </div>
                    {this.state.details.rollno}
                    <br />
                  </div>
                  <br />
                </Col>
                <Col>
                  <div className="accountposElement">
                    <div className="accountheading">
                      Eligible Voting Positions
                      <br />
                    </div>
                    {this.showpos()}
                  </div>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          <div className="profileclosebtnparent">
            <Button
              variant="secondary"
              className="profileclosebtn"
              onClick={() => {
                setShowAccount(false);
              }}
            >
              Close
            </Button>
          </div>
        </Modal>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      showError: false,
      showAccount: false,
    };
    // eslint-disable-next-line no-func-assign
    setError = setError.bind(this);
    // eslint-disable-next-line no-func-assign
    setShowAccount = setShowAccount.bind(this);
  }

  render() {
    return (
      <Router>
        <NavBar loginState={this.state.loginState} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/positions" component={Elections} />
          <Route path="/voting" exact component={Voting} />
          <Route path="/timeline" component={TimeLine} />
          <Route path="/important dates" exact component={ImportantDates} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Error msg={this.state.error} showError={this.state.showError} />
        <Account show={this.state.showAccount} />
      </Router>
    );
  }
}

function setError(val, state) {
  this.setState({ showError: state });
  this.setState({ error: val });
}
function showModel(val, url) {
  this.setState({ show: val });
  this.setState({ videourl: url });
}
function setShowAccount(val) {
  this.setState({ showAccount: val });
}

export { App, Video, Elections, showModel };
