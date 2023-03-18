import React from "react";
import "./Electioncard.css";
import { Redirect } from "react-router-dom";
import votebanner from "./votepage.png"; // with import
import Swal from "sweetalert2";
import OnImagesLoaded from "react-on-images-loaded";
import Grabelection from "./Grabelection";
import { setopacity } from "./../../App";
import { api_endpoint } from "../../Global";
import disableScroll from "disable-scroll";

class Electioncard extends React.Component {
  constructor(props) {
    super(props);
    disableScroll.on();
    window.scrollTo(0, 0);
    this.props.showLoader();
    setopacity(0);
    this.candbutton = this.candbutton.bind(this);
    this.updateLoad = this.updateLoad.bind(this);
    this.closeLoad = this.closeLoad.bind(this);
    this.state = {
      showImages: false,
      isapi: false,
      opened: false,
      validelec: [],
      voterinfo: [],
      totalcand: 1000,
      totalload: 0,
      render: false,
      loadC: this.props.loadContent,
      closeL: 0,
      redirect: false,
    };
  }
  closeLoad = () => {
    // console.log("F");
    if (this.state.showImages && this.state.isapi && this.props.loadContent) {
      this.props.hideLoader();
      setopacity(1);
      disableScroll.off();
      if (this.state.closeL !== 1) this.setState({ closeL: 1 });
      return true;
    } else {
      this.props.showLoader();
      if (this.state.closeL !== 0) this.setState({ closeL: 0 });
      return false;
    }
  };

  updateLoad = () => {
    this.setState({ totalload: this.state.totalload + 1 });
  };
  candbutton = (event) => {
    event.stopPropagation();
    // console.log(a, b);
    Swal.fire({
      title: "Cast Vote?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Success!", "Your vote has been casted.", "success");
      }
    });
  };
  sortWithVal = (a, b) => {
    if (
      Number(this.state.validelec.indexOf(a["elec_id"])) >
      Number(this.state.validelec.indexOf(b["elec_id"]))
    )
      return 1;
    else return -1;
  };
  sortVoting = (voterinfo) => {
    var arr = voterinfo;

    arr["voter_rights"] = arr["voter_rights"].sort(this.sortWithVal);

    return arr;
  };
  componentDidMount() {
    window.scrollTo(0, 0);
    //  console.log("once");
    //  console.log(this.props.isSigned, this.props.loadContent);
    var originalObj;
    var total = 0;
    var tempObjVoted = [];
    var tempObjUnVoted = [];
    if (this.props.isSigned && this.props.loadContent) {
      fetch(api_endpoint + "/api/voter?tokenId=" + this.props.token)
        .then((response) => {
          if (response.status === 401) {
            throw new Error("You have voted to this positon already.");
          }          
          return response.json();
        })
        .then((users) => {
          if (users.voting_system !== "online" && localStorage.getItem("election.cname") !== users.voting_system) {
            this.setState({redirect:true})
          }
          originalObj = users;
          var reqObj = originalObj.voter_rights;

          if (reqObj.length) {
            reqObj.forEach((element) => {
              if (
                this.props.allpos[element.elec_id - 1].elec_candidates.length >
                1
              ) {
                if (element.elec_isvoted) tempObjVoted.push(element.elec_id);
                else tempObjUnVoted.push(element.elec_id);

                total += this.props.allpos[element.elec_id - 1].elec_candidates
                  .length;
              }
            });
          }
          tempObjVoted = tempObjVoted.sort(function (a, b) {
            if (Number(a) > Number(b)) return 1;
            else return -1;
          });
          this.setState({ validelec: tempObjUnVoted.concat(tempObjVoted) });
          originalObj = this.sortVoting(originalObj);

          this.setState({
            voterinfo: originalObj,
            isapi: true,
            totalcand: total,
            validelec: tempObjUnVoted.concat(tempObjVoted),
          });
          this.setState({ render: true });
        })
        .catch(() => {
          console.log("err 401");
        });
    }
  }

  componentDidUpdate() {
    if (this.state.loadC !== this.props.loadContent) {
      var originalObj;
      var total = 0;
      var tempObjVoted = [];
      var tempObjUnVoted = [];
      if (this.props.isSigned && this.props.loadContent) {
        fetch(api_endpoint + "/api/voter?tokenId=" + this.props.token)
          .then((response) => {
            return response.json();
          })
          .then((users) => {
            if (users.voting_system !== "online" && localStorage.getItem("election.cname") !== users.voting_system) {
              this.setState({redirect:true})
            }
            originalObj = users;
            var reqObj = originalObj.voter_rights;
            if (reqObj.length) {
              reqObj.forEach((element) => {
                if (
                  this.props.allpos[element.elec_id - 1].elec_candidates
                    .length > 1
                ) {
                  if (element.elec_isvoted) tempObjVoted.push(element.elec_id);
                  else tempObjUnVoted.push(element.elec_id);
                  total += this.props.allpos[element.elec_id - 1]
                    .elec_candidates.length;
                }
              });
            }

            tempObjVoted = tempObjVoted.sort(function (a, b) {
              if (Number(a) > Number(b)) return 1;
              else return -1;
            });

            this.setState({ validelec: tempObjUnVoted.concat(tempObjVoted) });
            originalObj = this.sortVoting(originalObj);

            this.setState({
              voterinfo: originalObj,
              isapi: true,
              totalcand: total,
              validelec: tempObjUnVoted.concat(tempObjVoted),
              render: true,
              loadC: this.props.loadContent,
            });
          });
      }
      // TODO check for login
    }
    this.closeLoad();
  }

  render() {
    if (this.props.loadContent) {
      if (!this.props.isSigned) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please Sign In first",
        });
        return <Redirect to="/" />;
        // show error sign in
      } else if (!this.props.isElectionsDay) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "We are not in the elections time frame",
        });
        return <Redirect to="/" />;
        // show error sign in
      } else if (!this.props.isVoter) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Sorry, You don't have the voting privileges",
        });
        return <Redirect to="/" />;
        // show error sign in
      }
      else if (this.state.redirect)
      {
        Swal.fire({
          title: "Error!",
          text: "You are not allowed to vote in this computer.",
          icon: "error",
          confirmButtonText: "OK",
        });
        return <Redirect to="/"/>;
      }
      else {
        if (this.state.render) {
          //    console.log(this.state.voterinfo);
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
              <div style={{ opacity: this.state.closeL }}>
                <div className="elecdesk">
                  <div className="topbanner">
                    <div className="titleban">
                      {" "}
                      Voting page
                      <p>
                        Vote for the following positions according to your
                        voting rights.
                      </p>
                    </div>
                    <img
                      src={votebanner}
                      alt="Banner"
                      className="topbannerimg"
                    />
                  </div>
                </div>

                <div className="elecmobile">
                  <div className="topbanner">
                    <img
                      src={votebanner}
                      className="topbannerimg"
                      alt="Banner"
                    />

                    <div className="titleban">
                      {" "}
                      Voting page
                      <p>
                        Vote for the following positions according to your
                        voting rights.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="forthemeelec">
                  <div className="cont">
                    <Grabelection
                      updateLoad={this.updateLoad}
                      token={this.props.token}
                      validelec={this.state.validelec}
                      allelec={this.props.allpos}
                      voterinfo={this.state.voterinfo}
                      vfunc={this.candbutton}
                    />
                  </div>
                  <div className="bottombanner"></div>
                </div>
              </div>
            </OnImagesLoaded>
          );
        } else {
          return <div className="empdiv"></div>;
        }
      }
    } else {
      return <div style={{ minHeight: "110vh" }}></div>;
    }
  }
}

export { Electioncard };
