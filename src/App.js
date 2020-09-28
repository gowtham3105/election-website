import React, { Component } from "react";
import ReactPlayer from "react-player/lazy";
import logo from "./Components/Homedetails/logog.png"; // with import
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import CardList from "./Components/Cardlist/CardList";
import Teampage from "./Components/Teampage/Teampage";
import Electioncard from "./Components/Electioncard/Electioncard";
import Countdown from "react-countdown";
import Nav from "react-bootstrap/Nav";
import Swal from "sweetalert2";
import "./App.css";
import Positions from "./Components/Positions/Positions";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import * as firebase from "firebase/app";
import Flip from "./Flip";
import Tick from "@pqina/flip";
import Homedetails from "./Components/Homedetails/Homedetails";
import Footer from "./Components/Footer/Footer";
import Renderer from "./Components/Renderer";
import Important from "./Components/ImpDates/Important";
import "firebase/analytics";
import "firebase/auth";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import TimeLine1 from "./Components/TimeLine-Past Positions/TimeLine";
import OnImagesLoaded from "react-on-images-loaded";
import Results from "./Components/Results/Results";


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

    //var show = false;
    this.state = {
      expanded: false,
      value: "Sign In",
      show: false,
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
        console.log(user.email);
        if (user.email.slice(-12) === "@iitdh.ac.in") {
          setLoginState(true, user.email);
        } else {
          Swal.fire({
            icon: "error",
            title:
              '<div style="color:crimson";>Oops.. Unauthorised user.</div>',
            text: "Please login with IIT Dh email address",
          });
          // setError('Unauthorised User\nPlease Login with valid email id', true)
        }
        console.log(user.email.slice(-12));
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;

        // ...
      });
  };

  logout = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        console.log("Signed Out");
        setLoginState(false, "");
      })
      .catch(function (error) {});
  };

  render() {
    let styles = {
      zIndex: 100,
    };
    return (
      <div style={this.props.style}>
        <Navbar expanded={this.state.expanded} collapseOnSelect expand="lg" variant="light" className="NavBar" id="navmob"> 
          <Navbar.Brand href="/" style={styles}>
            <img src={logo} className="logonav" alt="IIT Dh Elections" />
          </Navbar.Brand>
          <Navbar.Toggle onClick={() =>
               {
                if(this.state.expanded==="expanded")
                this.setState({expanded:false})
                else
                this.setState({expanded:"expanded"})
            }}

                 aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav" className="NavBar">
            <Nav className="collapse navbar-collapse justify-content-end">
              <NavLink
                to="/positions"
                className="NavLink nav-link"
                style={styles}
                activeClassName="selected"
                onClick={() => this.setState({expanded:false})}
              >
                <div className="secondary_Text">Positions</div>
              </NavLink>
              <NavLink
                to="/voting"
                className="NavLink nav-link"
                style={styles}
                activeClassName="selected"
                onClick={() => this.setState({expanded:false})}
              >
                <div className="secondary_Text">Voting</div>
              </NavLink>
              <NavLink
                to="/timeline"
                className="NavLink nav-link"
                style={styles}
                activeClassName="selected"
                onClick={() => this.setState({expanded:false})}
              >
                <div className="secondary_Text">TimeLine</div>
              </NavLink>
              <NavLink
                to="/important dates"
                className="NavLink nav-link"
                style={styles}
                activeClassName="selected"
                onClick={() => this.setState({expanded:false})}
              >
                <div className="secondary_Text">Important Dates</div>
              </NavLink>
              <NavLink
                to="/team"
                className="NavLink nav-link"
                style={styles}
                activeClassName="selected"
                onClick={() => this.setState({expanded:false})}
              >
                <div className="secondary_Text">Team</div>
              </NavLink>
            </Nav>

            <Nav fill>
              <Nav.Link>
                <Button
                  onClick={() => {
                    console.log(this.props.loginState);
                    if (!this.props.loginState) {
                      this.login();
                    } else {
                      this.logout();
                    }
                  }}
                  className="Button"
                >
                  {this.props.loginState ? "Sign Out" : "SIGN IN"}
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
    this.state = {};
  }

  render() {
    return <h1>Contact Page</h1>;
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
        <Homedetails hideLoader={this.props.hideLoader}
                  showLoader={this.props.showLoader} />
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
      showImages: false,
      currenttab: "/",
      loginState: false,
      email: "",
      error: "",
      showError: false,
    };
    setLoginState = setLoginState.bind(this);
    setError = setError.bind(this);
  }

  componentDidMount() {
    //this.props.hideLoader();
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
          <NavBar
            style={{ opacity: this.state.showImages ? 1 : 0 }}
            loginState={this.state.loginState}
          />
          <Switch>
            <Route path="/" exact render={(props) => <Home {...props} hideLoader={this.props.hideLoader}
                  showLoader={this.props.showLoader}/>} />
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
              path="/contact"
              render={(props) => (
                <Contact
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
          <Footer style={{ opacity: this.state.showImages ? 1 : 0 }} />
        </Router>
      </OnImagesLoaded>
    );
  }
}

function setLoginState(val, email) {
  this.setState({ loginState: val });
  var user = firebase.auth().currentUser;
  if (val) {
    if (user.email.slice(-12) === "@iitdh.ac.in") {
      this.setState({ email: user.email });
    } else {
      return 0;
    }
  } else {
    this.setState({ email: "" });
  }
}
function setError(val, state) {
  console.log("error");
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
