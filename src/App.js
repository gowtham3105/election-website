import React, { Component } from "react";
import ReactPlayer from "react-player/lazy";
import logo from "./Components/Homedetails/logog.png"; // with import
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Teampage from "./Components/Teampage/Teampage";
import Electioncard from "./Components/Electioncard/Electioncard";
import Countdown from "react-countdown";
import Nav from "react-bootstrap/Nav";
import "./App.css";
import Positions from "./Components/Positions/Positions";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
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
import Important from "./Components/Important Dates/Important";
import OnImagesLoaded from "react-on-images-loaded";
import Results from "./Components/Results/Results";

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
      value: "SIGN IN",
      expanded: false,
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
        this.setState({ value: "SIGN OUT" });
      } else {
        this.setState({ value: "SIGN IN" });
      }
    });
  }

  login = () => {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        var user = result.user;
        if (user.email.slice(-12) === "@iitdh.ac.in") {
          console.log("logged in");
        } else {
          firebase
            .auth()
            .signOut()
            .then(function () {
              console.log("Signed Out");
            })
            .catch(function (error) {
              setError("Unable to Sign Out Please Try Again", true);
            });
          setError(
            "Oops.. Unauthorised user.\nPlease login with IIT Dh email address",
            true
          );
        }
      })
      .catch(function (error) {
        var errorMessage = error.message;
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
    let styles = {
      zIndex: 10,
    };
    return (
      <div>
        <Navbar
          expanded={this.state.expanded}
          collapseOnSelect
          expand="lg"
          variant="light"
          className="NavBar"
        >
          <NavLink to="" style={styles}>
            <img src={logo} className="logonav" alt="IIT Dh Elections" />
          </NavLink>

          <Navbar.Toggle
            onClick={() => {
              if (this.state.expanded === "expanded")
                this.setState({ expanded: false });
              else this.setState({ expanded: "expanded" });
            }}
            aria-controls="responsive-navbar-nav"
          />

          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="NavBar navbar-toggle"
          >
            <Nav className="mr-auto " fill>
              <NavLink
                exact
                to="/"
                className="NavLink nav-link"
                style={styles}
                activeClassName="selected"
                onClick={() => this.setState({ expanded: false })}
              >
                <div>Home</div>
              </NavLink>
              {firebase.auth().currentUser ? (
                <>
                  <Nav.Link
                    onClick={() => {
                      setShowAccount(true);
                    }}
                    className="NavLink nav-link"
                  >
                    Profile
                  </Nav.Link>
                </>
              ) : (
                ""
              )}
              <NavLink
                to="/positions"
                className="NavLink nav-link"
                style={styles}
                activeClassName="selected"
                onClick={() => this.setState({ expanded: false })}
              >
                <div>Positions</div>
              </NavLink>
              <NavLink
                to="/voting"
                className="NavLink nav-link"
                style={styles}
                activeClassName="selected"
                onClick={() => this.setState({ expanded: false })}
              >
                Voting
              </NavLink>
              {
                // <NavLink
                // to="/timeline"
                //  className="NavLink nav-link"
                //</Nav> style={styles}
                //  activeClassName="selected"
                //  onClick={() => this.setState({ expanded: false })}
                // >
                //  TimeLine
                // </NavLink>
              }
              <NavLink
                to="/important dates"
                className="NavLink nav-link"
                style={styles}
                activeClassName="selected"
                onClick={() => this.setState({ expanded: false })}
              >
                Important Dates
              </NavLink>
              <NavLink
                to="/result"
                className="NavLink nav-link"
                style={styles}
                activeClassName="selected"
                onClick={() => this.setState({ expanded: false })}
              >
                Result
              </NavLink>
              <NavLink
                to="/team"
                className="NavLink nav-link"
                style={styles}
                activeClassName="selected"
                onClick={() => this.setState({ expanded: false })}
              >
                Team
              </NavLink>
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

class ImportantDates extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Important />;
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
        //  robots_cand = JSON.parse(this.responseText);
        return JSON.parse(this.responseText);
      }
    };
    xhttp.open("GET", link, false);
    xhttp.send();
  }
  showPositions = (user, i) => {
    return (
      <Positions
        robots={user.candidates}
        name={user.positionName}
        criteria={user.criteria}
        key={i}
      />
    );
  };
  componentDidMount() {
    fetch("http://192.168.29.199:5000/positions")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ Positions_robots: users });
      });
  }

  render() {
    return (
      <OnImagesLoaded
        onLoaded={() => {
          this.setState({ showImages: true });
          this.props.hideLoader();
        }}
        onTimeout={() => {
          this.setState({ showImages: true });
          this.props.hideLoader();
        }}
        timeout={7000}
      >
        <div style={{ opacity: this.state.showImages ? 1 : 0 }}>
          <div className="teamdesk">
            <div className="topbannerteam">
              <div className="titlebanteam">
                {" "}
                Positions
                <p>IIT Dharwad Elections 2020-21</p>
              </div>
              <img
                src="position.png"
                className="topbannerimgteam"
                alt="position img"
              />
            </div>
          </div>

          <div className="teammobile">
            <div className="topbannerteam">
              <img
                src="position.png"
                className="topbannerimgteam"
                alt="position img"
              />

              <div className="titlebanteam">
                {" "}
                Positions
                <p>IIT Dharwad Elections 2020-21</p>
              </div>
            </div>
          </div>

          {this.state.show ? <Video videourl={this.state.videourl} /> : " "}
          <br />
          {this.state.Positions_robots.map(this.showPositions)}
        </div>
      </OnImagesLoaded>
    );
  }
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Homedetails
          hideLoader={this.props.hideLoader}
          showLoader={this.props.showLoader}
        />
        <Countdown date={Date.now() + 1000000} renderer={Renderer} />
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
          "http://192.168.29.199:5000/accountdetails?email=" +
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
          centered
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
      showImages: false,
      currenttab: "/",
    };
    // eslint-disable-next-line no-func-assign
    setError = setError.bind(this);
    // eslint-disable-next-line no-func-assign
    setShowAccount = setShowAccount.bind(this);
  }

  render() {
    return (
      <OnImagesLoaded
        onLoaded={() => {
          this.setState({ showImages: true });
          this.props.hideLoader();
        }}
        onTimeout={() => {
          this.setState({ showImages: true });
          this.props.hideLoader();
        }}
        timeout={7000}
      >
        <Router>
          <NavBar loginState={this.state.loginState} />
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <Home
                  {...props}
                  hideLoader={this.props.hideLoader}
                  showLoader={this.props.showLoader}
                />
              )}
            />
            <Route
              path="/positions"
              render={(props) => (
                <Elections
                  {...props}
                  hideLoader={this.props.hideLoader}
                  showLoader={this.props.showLoader}
                />
              )}
            />
            <Route
              path="/voting"
              exact
              render={(props) => (
                <Electioncard
                  {...props}
                  hideLoader={this.props.hideLoader}
                  showLoader={this.props.showLoader}
                />
              )}
            />
            <Route
              path="/timeline"
              render={(props) => (
                <TimeLine
                  {...props}
                  hideLoader={this.props.hideLoader}
                  showLoader={this.props.showLoader}
                />
              )}
            />
            <Route
              path="/important dates"
              exact
              render={(props) => (
                <ImportantDates
                  {...props}
                  hideLoader={this.props.hideLoader}
                  showLoader={this.props.showLoader}
                />
              )}
            />
            <Route
              path="/result"
              render={(props) => (
                <Results
                  {...props}
                  hideLoader={this.props.hideLoader}
                  showLoader={this.props.showLoader}
                />
              )}
            />
            <Route
              path="/team"
              render={(props) => (
                <Teampage
                  {...props}
                  hideLoader={this.props.hideLoader}
                  showLoader={this.props.showLoader}
                />
              )}
            />
          </Switch>
          <Error msg={this.state.error} showError={this.state.showError} />
          <Account show={this.state.showAccount} />
          <Footer style={{ opacity: this.state.showImages ? 1 : 0 }} />
        </Router>
      </OnImagesLoaded>
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

export { App, showModel };
