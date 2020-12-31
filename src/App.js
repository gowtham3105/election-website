import React, { Component } from "react";
import logo from "./Components/Homedetails/logog.png"; // with import
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Teampage from "./Components/Teampage/Teampage";
import Electioncard from "./Components/Electioncard/Electioncard";
import Nav from "react-bootstrap/Nav";
import "./App.css";
import Positions from "./Components/Positions/Positions";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import Homedetails from "./Components/Homedetails/Homedetails";
import Footer from "./Components/Footer/Footer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Important from "./Components/Important Dates/Important";
import OnImagesLoaded from "react-on-images-loaded";
import { Results } from "./Components/Results/Results";
import positionImg from "./position.png";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import Admin from "./Components/Admin/Admin";

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
          <iframe
            title="Video"
            width="100%"
            className="iframeVideo"
            height="420"
            src={this.props.videourl + "?autoplay=1"}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
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
      isSigned: false,
      isAdmin: false,
      isVoter: false,
      tokenId: "",
      authRes: "",
      expanded: false,
    };
    // eslint-disable-next-line no-func-assign
  }
  refreshToken = (oldres) => {
    oldres.reloadAuthResponse().then((res) => {
      this.setState({ tokenId: res.id_token });
    });
  };

  signInOnSuccess = (res) => {
    this.setState({
      isSigned: true,
      tokenId: res.tokenId,
      authRes: res,
    });

    var refresh = setInterval(
      this.refreshToken(res),
      Number(this.state.authRes.tokenObj.expires_in) * 60000
    );

    this.setState({ refresh: refresh });

    this.isAdmin();
  };
  signInOnError = (err) => {
    console.log(err);
    setError("Unable to Sign In Please Try Again", true);
  };

  signOutOnError = (err) => {
    console.log(err);
    setError("Unable to Sign Out Please Try Again", true);
  };

  signOutOnSuccess = () => {
    this.setState({
      isSigned: false,
      tokenId: "",
      authRes: "",
      isAdmin: false,
      isVoter: false,
    });
    clearInterval(this.state.refresh);

    setInfo({
      isAdmin: this.state.isAdmin,
      isVoter: this.state.isVoter,
      isSigned: this.state.isSigned,
      tokenId: this.state.tokenId,
    });
  };

  async isAdmin() {
    if (this.state.tokenId.length) {
      await fetch(
        "http://localhost:8000/api/userType?tokenId=" + this.state.tokenId
      )
        .then((response) => {
          return response.json();
        })
        .then((user) => {
          if (user.type === "adminANDvoter") {
            this.setState({ isAdmin: true, isVoter: true });
          } else if (user.type === "admin") {
            this.setState({ isAdmin: true, isVoter: false });
          } else if (user.type === "voter") {
            this.setState({ isAdmin: false, isVoter: true });
          } else {
            this.setState({ isAdmin: false, isVoter: false });
          }
        })
        .then(() => {
          setInfo({
            isAdmin: this.state.isAdmin,
            isVoter: this.state.isVoter,
            isSigned: this.state.isSigned,
            tokenId: this.state.tokenId,
          });
          
        });
    }
  }

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
            <Nav className="navbar-collapse justify-content-end">
              {this.state.isAdmin && this.state.isSigned ? (
                <NavLink
                  to="/admin"
                  className="NavLink nav-link"
                  style={styles}
                  activeClassName="selected"
                  onClick={() => this.setState({ expanded: false })}
                >
                  <div className="secondary_Text">Admin</div>
                </NavLink>
              ) : (
                ""
              )}

              {this.state.isSigned ? (
                <>
                  <Nav.Link
                    onClick={() => {
                      setShowAccount(true);
                    }}
                    className="NavLink nav-link"
                  >
                    <div className="secondary_Text">Profile</div>
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
                <div className="secondary_Text">Positions</div>
              </NavLink>
              {this.props.isElectionsDay ? (
                <NavLink
                  to="/voting"
                  className="NavLink nav-link"
                  style={styles}
                  activeClassName="selected"
                  onClick={() => this.setState({ expanded: false })}
                >
                  <div className="secondary_Text">Voting</div>
                </NavLink>
              ) : (
                ""
              )}

              <NavLink
                to="/important dates"
                className="NavLink nav-link"
                style={styles}
                activeClassName="selected"
                onClick={() => this.setState({ expanded: false })}
              >
                <div className="secondary_Text">Important Dates</div>
              </NavLink>
              {this.props.isResultsDay ? (
                <NavLink
                  to="/result"
                  className="NavLink nav-link"
                  style={styles}
                  activeClassName="selected"
                  onClick={() => this.setState({ expanded: false })}
                >
                  <div className="secondary_Text">Result</div>
                </NavLink>
              ) : (
                ""
              )}

              <NavLink
                to="/team"
                className="NavLink nav-link"
                style={styles}
                activeClassName="selected"
                onClick={() => this.setState({ expanded: false })}
              >
                <div className="secondary_Text">Team</div>
              </NavLink>
            </Nav>

            <Nav fill>
              <Nav.Link>
                {!this.state.isSigned ? (
                  <GoogleLogin
                    clientId="352037303035-ld3gu55gulckmeo1m573kt8qocth524o.apps.googleusercontent.com"
                    render={(renderProps) => (
                      <Button
                        className="Button"
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                      >
                        <div className="secondary_Text">SIGN IN</div>
                      </Button>
                    )}
                    buttonText={this.state.value}
                    onSuccess={this.signInOnSuccess}
                    onFailure={this.signInOnError}
                    cookiePolicy={"single_host_origin"}
                    hostedDomain="iitdh.ac.in"
                    isSignedIn={true}
                  />
                ) : (
                  <GoogleLogout
                    clientId="352037303035-ld3gu55gulckmeo1m573kt8qocth524o.apps.googleusercontent.com"
                    render={(renderProps) => (
                      <Button
                        className="Button"
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                      >
                        <div className="secondary_Text">SIGN OUT</div>
                      </Button>
                    )}
                    buttonText={this.state.value}
                    onLogoutSuccess={this.signOutOnSuccess}
                    onFailure={this.signOutOnError}
                    hostedDomain="iitdh.ac.in"
                    isSignedIn={true}
                  />
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

class Elections extends Component {
  constructor(props) {
    super(props);
    this.props.showLoader();
    this.state = {
      showVideo: false,
      showImages: false,
      loadContent: false,
      videourl: "https://www.youtube.com/watch?v=qmN1Gf8rRc8",
      robots: [],
      Positions_robots: this.props.Positions_robots,
      filter: [],
      filterbtnState: [],
      showMobFilter: false,
      interval: "",
    };
    // eslint-disable-next-line no-func-assign
    showModel = showModel.bind(this);
  }
  showPositions = (user, i) => {
    

    return this.state.filter.includes(user.elec_category) &&
      this.state.filterbtnState[
        this.state.filter.indexOf(user.elec_category)
      ] ? (
      <Positions
        robots={user.elec_candidates}
        name={user.elec_name}
        criteria={user.elec_vote_criteria}
        category={user.elec_category}
        key={i}
      />
    ) : (
      ""
    );
  };

  showFilterBtns = (category, i) => {
    return (
      <Button
        className={
          this.state.filterbtnState[i] ? "activefilterbtn" : "inactivefilterbtn"
        }
        onClick={() => {
          this.toogleFilterState(i);
        }}
        key={i}
      >
        {category}
      </Button>
    );
  };

  removeFilterArrElement = (filterarr, val) => {
    return filterarr.filter(function (ele) {
      return ele !== val;
    });
  };

  toogleFilterState = (val) => {
    var r = this.state.filterbtnState;
    r[val] = !r[val];
    this.setState({ filterbtnState: r });
  };

  fillFilter = () => {
    var i = 0;
    for (i = 0; i < this.props.Positions_robots.length; i++) {
      if (
        !this.state.filter.includes(
          this.props.Positions_robots[i].elec_category
        )
      ) {
        var fil = this.state.filter;
        fil.push(this.props.Positions_robots[i].elec_category);
        this.setState({ filter: fil });
      }
    }
    var lenFilter = this.state.filter.length;
    var filterbtnState = [];
    while (lenFilter--) filterbtnState.push(true);
    this.setState({ filterbtnState: filterbtnState });
    this.setState({ loadContent: true });
    if (this.state.showImages === true) this.props.hideLoader();
  };

  refresh = () => {
    if (this.props.Positions_robots.length) {
      this.fillFilter();
    } else {
      setTimeout(this.refresh, 2000);
    }
  };

  componentDidMount() {
    if (this.props.Positions_robots.length) {
      this.fillFilter();
    } else {
      setTimeout(this.refresh, 2000);
    }
  }

  render() {
    return (
      <OnImagesLoaded
        onLoaded={() => {
          this.setState({ showImages: true });
          if (this.state.loadContent === true) this.props.hideLoader();
        }}
        onTimeout={() => {
          this.setState({ showImages: true });
          if (this.state.loadContent === true) this.props.hideLoader();
        }}
        timeout={7000}
      >
        <div
          className="forpos"
          style={{
            opacity: this.state.showImages && this.state.loadContent ? 1 : 0,
          }}
        >
          <div className="teamdesk">
            <div className="topbannerteam">
              <div className="titlebanteam">
                {" "}
                Positions
                <p>IIT Dharwad Elections 2020-21</p>
              </div>
              <img
                src={positionImg}
                className="topbannerimgteam"
                alt="position img"
              />
            </div>
          </div>
          <div className="teammobile">
            <div className="topbannerteam">
              <img
                src={positionImg}
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
          {this.state.showVideo ? (
            <Video videourl={this.state.videourl} />
          ) : (
            " "
          )}
          <hr />
          <div className="mobfilterbtngrp">
            <Button
              className="filtermodalbtn-show"
              variant="primary"
              onClick={() => {
                this.setState({ showMobFilter: true });
              }}
            >
              Filter
            </Button>

            <Modal
              show={this.state.showMobFilter}
              onHide={() => {
                this.setState({ showMobFilter: false });
              }}
              backdrop="static"
              centered
            >
              <Modal.Header className="mobfilterbtngrp-head">
                <Modal.Title>Filter</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="mobfilterbtngrp-body">
                  {this.state.filter.length
                    ? this.state.filter.map(this.showFilterBtns)
                    : ""}
                </div>
              </Modal.Body>

              <Button
                className="filtermodalbtn-apply"
                onClick={() => {
                  this.setState({ showMobFilter: false });
                }}
              >
                Apply
              </Button>
            </Modal>
          </div>
          <div className="deskfilterbtngrp">
            <div className="positions-Filter-head">Filter</div>

            {this.state.filter.length
              ? this.state.filter.map(this.showFilterBtns)
              : ""}
          </div>
          <hr />
          {this.props.Positions_robots.map(this.showPositions)}
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
      tokenId: this.props.tokenId,
      isVoter: this.props.isVoter,
      show: this.props.show,
      details: {
        voter_rights: [],
      },
    };
    // eslint-disable-next-line no-func-assign
    fetchDetails = fetchDetails.bind(this);
  }
  showpos = () => {
    return (
      <ul>
        {this.state.details.voter_rights.map((pos, i) => (
          <li key={i}>{pos.elec_name}</li>
        ))}
      </ul>
    );
  };

  componentDidUpdate() {
    if (
      this.state.tokenId !== this.props.tokenId ||
      this.state.isVoter !== this.props.isVoter
    ) {
      this.getDetails();
    }
  }
  async getDetails() {
    if (this.props.tokenId.length) {
      await fetch(
        "http://localhost:8000/api/voter?tokenId=" + this.props.tokenId
      )
        .then((response) => {
          return response.json();
        })
        .then((users) => {
          
          this.setState({
            tokenId: this.props.tokenId,
            isVoter: this.props.isVoter,
            details: users,
          });
        });
    }
  }

  render() {
    return (
      <div>
        <Modal
          show={this.props.show}
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
                    {this.state.details.voter_name}
                    <br />
                    <div className="accountheading">
                      Branch
                      <br />
                    </div>
                    {this.state.details.voter_branch}
                    <br />
                    <div className="accountheading">
                      Roll No
                      <br />
                    </div>
                    {this.state.details.voter_id}
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
      isSigned: false,
      isAdmin: false,
      isVoter: false,
      tokenId: "",
      isElectionsDay: false,
      isResultsDay: false,
      Positions_robots: [],
    };
    // eslint-disable-next-line no-func-assign
    setInfo = setInfo.bind(this);
    // eslint-disable-next-line no-func-assign
    setError = setError.bind(this);
    // eslint-disable-next-line no-func-assign
    setShowAccount = setShowAccount.bind(this);
  }
  getDates = () => {
    fetch("http://localhost:8000/api/getImportantDates")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        var timeTillResults = new Date(data.resultsDate) - new Date(data.Now);
        var timeTillElections =
          new Date(data.electionsDate) - new Date(data.Now);
        if (timeTillResults >= 0 && timeTillElections >= 0) {
          if (
            this.state.isElectionsDay !== false ||
            this.state.isResultsDay !== false
          ) {
            this.setState({ isElectionsDay: false, isResultsDay: false });
          }
        } else if (timeTillResults >= 0 && timeTillElections < 0) {
          if (
            this.state.isElectionsDay !== true ||
            this.state.isResultsDay !== false
          ) {
            this.setState({ isElectionsDay: true, isResultsDay: false });
          }
        } else if (timeTillResults < 0 && timeTillElections < 0) {
          if (
            this.state.isElectionsDay !== true ||
            this.state.isResultsDay !== true
          ) {
            this.setState({ isElectionsDay: true, isResultsDay: true });
          }
        }
        

        if (timeTillResults > 0 && timeTillElections > 0) {
          if (timeTillElections < timeTillResults) {
            setTimeout(this.getDates, Number(timeTillElections));
          } else {
            setTimeout(this.getDates, Number(timeTillResults));
          }
        } else if (timeTillResults > 0 && timeTillElections < 0) {
          setTimeout(this.getDates, Number(timeTillResults));
        }
      });
  };

  componentDidMount() {
    this.getDates();
    fetch("http://localhost:8000/api/positions")
      .then((response) => {
        return response.json();
      })
      .then((positions) => {
        this.setState({ Positions_robots: positions });
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
        <Router>
          <NavBar
            isSigned={this.state.isSigned}
            isElectionsDay={this.state.isElectionsDay}
            isResultsDay={this.state.isResultsDay}
          />
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
              path="/admin"
              render={(props) => (
                <Admin
                  {...props}
                  hideLoader={this.props.hideLoader}
                  showLoader={this.props.showLoader}
                  isSigned={this.state.isSigned}
                  isAdmin={this.state.isAdmin}
                  tokenId={this.state.tokenId}
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
                  Positions_robots={this.state.Positions_robots}
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
            {/*
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
            */}
            <Route
              path="/important dates"
              exact
              render={(props) => (
                <Important
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
                  isResultsDay={this.state.isResultsDay}
                  tokenId={this.state.tokenId}
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
          <Account
            show={this.state.showAccount}
            tokenId={this.state.tokenId}
            isVoter={this.state.isVoter}
          />
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
  if (this.state.showVideo !== val) {
    this.setState({ showVideo: val, videourl: url });
  }
}
function setShowAccount(val) {
  this.setState({ showAccount: val });
}
function setInfo(val) {
  this.setState({
    tokenId: val.tokenId,
    isAdmin: val.isAdmin,
    isVoter: val.isVoter,
    isSigned: val.isSigned,
  });
}
function fetchDetails(refresh) {
  if (this.state.tokenId.length && this.state.details.voter_rights.length) {
    if (refresh === 1) {
      this.getDetails();
    }
    return this.state.details;
  } else {
    return false;
  }
}

export { App, showModel, fetchDetails };
