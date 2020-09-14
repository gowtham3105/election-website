import React, { Component } from "react";
import ReactPlayer from "react-player/lazy";
import logo from "./Components/Homedetails/logog.png"; // with import
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import CardList from "./Components/Cardlist/CardList";
import Electioncard from "./Components/Electioncard/Electioncard";
import Countdown from "react-countdown";
import Nav from "react-bootstrap/Nav";
import Swal from "sweetalert2";
import "./App.css";
import Positions from "./Components/Positons/Positions";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as firebase from "firebase/app";
import Flip from "./Flip";
import Tick from "@pqina/flip";
import Homedetails from "./Components/Homedetails/Homedetails";
import Footer from "./Components/Footer/Footer";
import Renderer from "./Components/Renderer";
import "firebase/analytics";
import "firebase/auth";
import TimeLine1 from "./Components/TimeLine-Past Positions/TimeLine";

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
      <div>
        <Navbar collapseOnSelect expand="lg" variant="light" className="NavBar">
          <Navbar.Brand href="/" style={styles}>
            <div className="primary_Text headernav">IIT Dh Elections</div>
            <img
              src={logo}
              className="logonav"
              alt="IIT Dh Elections"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav" className="NavBar">
            <Nav className="mr-auto" fill>
              <Nav.Link href="/positions" className="NavLink" style={styles}>
                <div className="secondary_Text">Positions</div>
              </Nav.Link>
              <Nav.Link href="/voting" className="NavLink" style={styles}>
                <div className="secondary_Text">Voting</div>
              </Nav.Link>
              <Nav.Link href="/timeline" className="NavLink" style={styles}>
                <div className="secondary_Text">TimeLine</div>
              </Nav.Link>
              <Nav.Link
                href="/important dates"
                className="NavLink"
                style={styles}
              >
                <div className="secondary_Text">Important Dates</div>
              </Nav.Link>
              <Nav.Link href="/contact" className="NavLink" style={styles}>
                <div className="secondary_Text">Contact Us</div>
              </Nav.Link>
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
                  {this.props.loginState ? "Sign Out" : "Sign In"}
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
    return <Electioncard />;
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
      <div>
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

  render() {
    return (
      <div>
        <Homedetails />
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

    return <div></div>;
  };
  render() {
    return <div>{this.Error()}</div>;
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginState: false,
      email: "",
      error: "",
      showError: false,
    };
    setLoginState = setLoginState.bind(this);
    setError = setError.bind(this);
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
        <Footer />
      </Router>
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

export { App, Video, Elections, showModel };
