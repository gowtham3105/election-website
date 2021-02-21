import React, { Component } from "react";
import logo from "./Components/Homedetails/logog.png"; // with import
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Teampage from "./Components/Teampage/Teampage";
import { Electioncard } from "./Components/Electioncard/Electioncard";
import Nav from "react-bootstrap/Nav";
import "./App.css";
import Positions from "./Components/Positions/Positions";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import disableScroll from 'disable-scroll';
import Homedetails from "./Components/Homedetails/Homedetails";
import { Footer } from "./Components/Footer/Footer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Important from "./Components/Important Dates/Important";
import OnImagesLoaded from "react-on-images-loaded";
import { Results } from "./Components/Results/Results";
import positionImg from "./position.png";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import Admin from "./Components/Admin/Admin";
import Swal from "sweetalert2";
import { api_endpoint } from "./Global";

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
      opac: 0,
    };
    // eslint-disable-next-line no-func-assign
    setopacity = setopacity.bind(this);
    // eslint-disable-next-line no-func-assign
    getopacity = getopacity.bind(this);
  }

  refreshToken = (oldres) => {
    oldres.reloadAuthResponse().then((res) => {
      this.setState({ tokenId: res.id_token });
    });
  };

  signInOnSuccess = (res) => {
    this.props.changeLoadContent(false);
    this.setState({
      isSigned: true,
      tokenId: res.tokenId,
      authRes: res,
    });
    setInfo({
      isAdmin: this.state.isAdmin,
      isVoter: this.state.isVoter,
      isSigned: this.state.isSigned,
      tokenId: this.state.tokenId,
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
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Unable to Sign In Please Try Again",
    });
  };

  signOutOnError = (err) => {
    console.log(err);
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Unable to Sign Out, Please Try Again",
    });
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
      setInfo({
        isAdmin: this.state.isAdmin,
        isVoter: this.state.isVoter,
        isSigned: this.state.isSigned,
        tokenId: this.state.tokenId,
      });
      await fetch(api_endpoint + "/api/userType?tokenId=" + this.state.tokenId)
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
          this.props.changeLoadContent(true);
        });
    } else {
      setInfo({
        isAdmin: this.state.isAdmin,
        isVoter: this.state.isVoter,
        isSigned: this.state.isSigned,
        tokenId: this.state.tokenId,
      });
    }
  }

  render() {
    let styles = {
      zIndex: 10,
    };
    return (
      <div style={{ opacity: this.state.opac }}>
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

              {this.state.isSigned && this.state.isVoter ? (
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
              <NavLink
                to="/voting"
                className="NavLink nav-link"
                style={styles}
                activeClassName="selected"
                onClick={() => this.setState({ expanded: false })}
              >
                <div className="secondary_Text">Voting</div>
              </NavLink>

              <NavLink
                to="/schedule"
                className="NavLink nav-link"
                style={styles}
                activeClassName="selected"
                onClick={() => this.setState({ expanded: false })}
              >
                <div className="secondary_Text">Schedule</div>
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
                    clientId="448752692165-il4tvq7c4j3lb4p58hlo78del1355cli.apps.googleusercontent.com"
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
                    onAutoLoadFinished={(gg) => {
                      //    console.log("auto load finished sign in");
                      //    console.log(gg);
                      if (!gg) this.props.changeLoadContent(true);
                    }}
                  />
                ) : (
                    <GoogleLogout
                      clientId="448752692165-il4tvq7c4j3lb4p58hlo78del1355cli.apps.googleusercontent.com"
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
                      onAutoLoadFinished={() => {
                        //  console.log("auto load finished sign in");
                        this.props.changeLoadContent(true);
                      }}
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
    setopacity(0);
    this.props.showLoader();
    disableScroll.on();
    window.scrollTo(0, 0);
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
      totload: 0,
      tothave: 1000,
      closeLoadx: 0,
    };
    // eslint-disable-next-line no-func-assign
    showModel = showModel.bind(this);
    // updateLoadx = this.updateLoadx.bind(this);
    // closeLoadx = this.closeLoadx.bind(this);
  }
  updateLoadx = () => {
    this.setState({ totload: this.state.totload + 1 });
  };
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
          updateLoadx={this.updateLoadx}
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
  };

  refresh = () => {
    if (this.props.Positions_robots.length) {
      this.fillFilter();
    } else {
      setTimeout(this.refresh, 2000);
    }
  };

  componentDidUpdate() {
    if (
      this.state.showImages &&
      this.state.loadContent &&
      this.props.loadContent
    ) {
      this.props.hideLoader();
      if (this.state.closeLoadx !== 1) {
        this.setState({ closeLoadx: 1 });
        disableScroll.off();
      }
      setopacity(1);
      return true;
    } else {
      this.props.showLoader();
      if (this.state.closeLoadx !== 0) {
        this.setState({ closeLoadx: 0 });
      }
      return false;
    }
  }

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
        }}
        onTimeout={() => {
          this.setState({ showImages: true });
        }}
        timeout={7000}
      >
        <div
          className="forpos"
          style={{
            opacity: this.state.closeLoadx ? 1 : 0,
          }}
        >
          <div className="teamdesk">
            <div className="topbannerteam">
              <div className="titlebanteam">
                {" "}
                Positions
                <p>IIT Dharwad Elections 2021-22 Phase - II</p>
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
                Positions
                <p>
                  IIT Dharwad Elections 2021-22 Phase - II
                </p>
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
          <div className="forthemex">
            {" "}
            {this.props.Positions_robots.map(this.showPositions)}
            <div className="bottombannerx"></div>
          </div>
        </div>
      </OnImagesLoaded>
    );
  }
}

class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tokenId: this.props.tokenId,
      isVoter: this.props.isVoter,
      show: this.props.show,
      loadcon: false,
      details: {
        voter_rights: [],
      },
    };
    // eslint-disable-next-line no-func-assign
    fetchDetails = fetchDetails.bind(this);
  }
  showpos = () => {
    if (this.state.details.voter_rights.length)
      return (
        <ul>
          {this.state.details.voter_rights.sort(function (a, b) {
            if (Number(a['elec_id']) > Number(b['elec_id'])) return 1;
            else return -1;
          }).map((pos, i) => (
            <li key={i}>{pos.elec_name}</li>
          ))}
        </ul>
      );
    else {
      return <div></div>;
    }
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
    if (this.props.tokenId.length && this.props.isVoter) {
      await fetch(api_endpoint + "/api/voter?tokenId=" + this.props.tokenId)
        .then((response) => {
          if (response.status === 401) {
            throw new Error("You have voted to this positon already.");
          }
          return response.json();
        })
        .then((users) => {
          this.setState({
            tokenId: this.props.tokenId,
            isVoter: this.props.isVoter,
            details: users,
            loadcon: true,
          });
        })
        .catch(() => {
          console.log("err 401");
        });
    }
  }

  render() {
    if (this.state.loadcon && this.props.isVoter)
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
    else {
      return <div></div>;
    }
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAccount: false,
      showImages: false,
      loadContent: [false, false, false],
      currenttab: "/",
      isSigned: false,
      isAdmin: false,
      isVoter: false,
      tokenId: "",
      isElectionsDay: false,
      isResultsDay: false,
      posapi: [],
      totcand: 1000,
      dateNow: "",
    };
    // eslint-disable-next-line no-func-assign
    setInfo = setInfo.bind(this);

    // eslint-disable-next-line no-func-assign
    setShowAccount = setShowAccount.bind(this);
  }
  reloadPage = () => {
    window.location.reload();
  };
  changeLoadContent = (stat) => {
    var load = this.state.loadContent;
    load[2] = stat;
    this.setState({ loadContent: load });
  };
  getDates = () => {
    fetch(api_endpoint + "/api/getImportantDates")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        var timeTillResults = new Date(data.resultsDate) - new Date(data.Now);
        var timeTillElections =
          new Date(data.electionsDate) - new Date(data.Now);
        //   console.log(timeTillResults);

        //  console.log(timeTillElections);
        //  console.log(timeTillElections + 57600000);
        this.setState({
          voteStartTime: timeTillElections,
          voteEndTime: timeTillElections + 57600000,
          resultTime: timeTillResults,
          dateNow: data.electionsDate,
        });
        if (timeTillResults >= 0) {
          this.setState({ isResultsDay: false });
        } else {
          this.setState({ isResultsDay: true });
        }

        if (timeTillElections > 0) {
          this.setState({ isElectionsDay: false });
        } else if (
          timeTillElections <= 0 &&
          timeTillElections + 57600000 >= 0
        ) {
          this.setState({ isElectionsDay: true });
        } else {
          this.setState({ isElectionsDay: false });
        }

        if (timeTillResults > 0 && timeTillElections > 0) {
          if (timeTillElections < timeTillResults) {
            setTimeout(this.reloadPage, Number(timeTillElections));
          } else {
            setTimeout(this.reloadPage, Number(timeTillResults));
          }
        } else if (timeTillResults > 0 && timeTillElections < 0) {
          setTimeout(this.reloadPage, Number(timeTillResults));
        }
        var load = this.state.loadContent;
        load[0] = true;
        this.setState({ loadContent: load });
      });
  };
  checker = (arr) => arr.every((v) => v === true);
  checkShow = () => {
    if (this.checker(this.state.loadContent)) {
      return 1;
    } else {
      return 0;
    }
  };
  sortfun = (a, b) => {
    if (a['elec_id'] >= b['elec_id']) return 1;
    else return -1;

  }
  componentDidMount() {
    this.getDates();
    fetch(api_endpoint + "/api/positions")
      .then((response) => {
        return response.json();
      })
      .then((positions) => {
        var load = this.state.loadContent;
        load[1] = true;
        var total = 0;
        //  console.log(this.props.Positions_robots);
        positions.forEach((element) => {
          total += element.elec_candidates.length;
        });

        //  console.log(total);
        this.setState({ posapi: positions.sort(this.sortfun), loadContent: load, totcand: total }); // NOTA subtract
      });
  }
  render() {
    return (
      <div>
        {this.checkShow() ? this.props.hideLoader() : this.props.showLoader()}
        <div style={{ opacity: this.checkShow() }}>
          <OnImagesLoaded
            onLoaded={() => {
              this.setState({ showImages: true });
            }}
            onTimeout={() => {
              this.setState({ showImages: true });
            }}
            timeout={60000}
          >
            <Router>
              <NavBar
                isSigned={this.state.isSigned}
                isElectionsDay={this.state.isElectionsDay}
                isResultsDay={this.state.isResultsDay}
                changeLoadContent={this.changeLoadContent}
              />
              <Switch>
                <Route
                  path="/"
                  exact
                  render={(props) => (
                    <Homedetails
                      hideLoader={this.props.hideLoader}
                      showLoader={this.props.showLoader}
                      voteStartTime={this.state.voteStartTime}
                      voteEndTime={this.state.voteEndTime}
                      resultTime={this.state.resultTime}
                      loadContent={this.checker(this.state.loadContent)}
                      getDates={this.getDates}
                      dateNow={this.state.dateNow}
                    />
                  )}
                />
                <Route
                  path="/admin"
                  exact
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
                  exact
                  render={(props) => (
                    <Elections
                      {...props}
                      hideLoader={this.props.hideLoader}
                      showLoader={this.props.showLoader}
                      Positions_robots={this.state.posapi}
                      loadContent={this.checker(this.state.loadContent)}
                      totcand={this.state.totcand}
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
                      allpos={this.state.posapi}
                      token={this.state.tokenId}
                      isSigned={this.state.isSigned}
                      isVoter={this.state.isVoter}
                      isElectionsDay={this.state.isElectionsDay}
                      loadContent={this.checker(this.state.loadContent)}
                    />
                  )}
                />

                <Route
                  path="/schedule"
                  exact
                  render={(props) => (
                    <Important
                      {...props}
                      hideLoader={this.props.hideLoader}
                      showLoader={this.props.showLoader}
                      loadContent={this.checker(this.state.loadContent)}
                    />
                  )}
                />

                <Route
                  path="/result"
                  exact
                  render={(props) => (
                    <Results
                      {...props}
                      hideLoader={this.props.hideLoader}
                      showLoader={this.props.showLoader}
                      isResultsDay={this.state.isResultsDay}
                      tokenId={this.state.tokenId}
                      loadContent={this.checker(this.state.loadContent)}
                    />
                  )}
                />

                <Route
                  path="/team"
                  exact
                  render={(props) => (
                    <Teampage
                      {...props}
                      hideLoader={this.props.hideLoader}
                      showLoader={this.props.showLoader}
                      loadContent={this.checker(this.state.loadContent)}
                    />
                  )}
                />
                <Route
                  path="*"
                  exact
                  render={(props) => (
                    <Homedetails
                      hideLoader={this.props.hideLoader}
                      showLoader={this.props.showLoader}
                      voteStartTime={this.state.voteStartTime}
                      voteEndTime={this.state.voteEndTime}
                      resultTime={this.state.resultTime}
                      loadContent={this.checker(this.state.loadContent)}
                      getDates={this.getDates}
                      dateNow={this.state.dateNow}
                    />
                  )}
                />
              </Switch>
              <Account
                show={this.state.showAccount}
                tokenId={this.state.tokenId}
                isVoter={this.state.isVoter}
              />
              <Footer
                style={{
                  opacity:
                    this.state.showImages && this.state.loadContent ? 1 : 0,
                }}
              />
            </Router>
          </OnImagesLoaded>
        </div>
      </div>
    );
  }
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
    return { data: this.state.details, message: "OK" };
  } else {
    return { message: "NO" };
  }
}

function setopacity(val) {
  this.setState({
    opac: val,
  });
}
function getopacity() {
  return this.state.opac;
}

export { App, showModel, fetchDetails, setopacity };
