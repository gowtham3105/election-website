import React from "react";
import "./Electioncard.css";
import Swal from "sweetalert2";
import { CollapsibleContent } from "react-collapsible-component";
import { api_endpoint, csrftoken } from "./../../Global";
import LazyLoad from "react-lazyload";
import RenderSmoothImage from "render-smooth-image-react";
import "./styley.css";

function getLockStatus(candid, checkid) {
  if (candid === checkid) return `lock`;
  else return `lock unlocked`;
}

function getLockStatus_name(candid, checkid) {
  if (candid === checkid) return `candname-lock`;
  else return `candname`;
}
const Grabcandidate = ({
  candidates,
  voterinfo,
  elecid,
  elec_name,
  token,
  updateObj,
  isVoted,
  votedto,
  updateLoad,
  islocked,
}) => {
  const candbutton = (rollno, cand_name, elec) => {
    // check if is logged in
    //then

    // console.log(rollno, cand_name, elec);
    const systemID = localStorage.getItem('election.system-id')?localStorage.getItem('election.system-id'):'';

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-CSRFToken": csrftoken },
      body: JSON.stringify({ tokenId: token, candid: rollno, elecid: elec, "systemid": systemID}),
    };

    Swal.fire({
      title: `Cast Vote to ` + cand_name + ` for ` + elec_name + ` Position ?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Confirm",
      showLoaderOnConfirm: true,
      preConfirm:() => {
        return fetch(`${api_endpoint}/api/isvote/`, requestOptions)
          .then((response) => {
            if (!(response.status === 202)) {
              if (response.status === 200) {
                throw new Error("You have voted to this positon already.");
              } else if (response.status === 500) {
                throw new Error("Not eligible to vote for this position");
              }else if(response.status === 401){
                throw new Error("You are not authorised to vote on this computer");
              } else throw new Error(response.statusText);
            }
            return response.json();
          })
          .catch((error) => {
            Swal.showValidationMessage(`${error}`);
          });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        if (result.value.vote_casted) {
          Swal.fire("Success!", "Your vote has been casted.", "success");
          document.querySelector(
            `[data-cid="${rollno}"][data-eid="${elecid}"][data-type="lockSymbol"]`
          ).className = `lock`;
          document.querySelector(
            `[data-cid="${rollno}"][data-eid="${elecid}"][data-type="cand_name"]`
          ).className = `candname-lock`;

          var x = document.querySelectorAll(
            `[data-eid="${elecid}"][data-type="candidate-parent"]`
          );
          var i = 0;
          for (i = 0; i < x.length; i++) {
            x[i].className = "candidate candidate-disable";
            x[i].onClick = "";
          }

          var y = document.querySelectorAll(`[data-eid="${elecid}"]`);

          for (i = 0; i < y.length; i++) {
            y[i].style.cursor = "default";
          }

          document.querySelector(
            `[data-cid="${rollno}"][data-eid="${elecid}"][data-type="candidate-parent"]`
          ).className = "candidate";
        } else {
          Swal.fire("Oops!", "An error occurred.", "error");
        }
      }
    });
  };
  return (
    <CollapsibleContent isExpanded={true}>
      <div className="eleccard">
        {candidates.map((user, i) => {
          return (
            <div
              key={candidates[i].cand_id}
              className={
                isVoted
                  ? votedto === candidates[i].cand_id
                    ? "candidate"
                    : "candidate candidate-disable"
                  : "candidate"
              }
              data-cid={candidates[i].cand_id}
              data-eid={elecid}
              data-type="candidate-parent"
              style={{
                cursor: votedto ? "default" : "pointer",
              }}
              onClick={() => {
                if (!isVoted) {
                  candbutton(
                    candidates[i].cand_id,
                    candidates[i].cand_name,
                    elecid
                  );
                }
              }} // needs work  add user.lockstatus
            >
              <div className="candimg">

                <LazyLoad height={280} offset={400} once={true}>
                  <RenderSmoothImage src={candidates[i].cand_imgsrc} alt="Profile pic" />
                </LazyLoad>

              </div>
              <div
                className={getLockStatus_name(candidates[i].cand_id, votedto)}
                data-cid={candidates[i].cand_id}
                data-eid={elecid}
                data-type="cand_name"
                style={{
                  cursor: votedto ? "default" : "pointer",
                }}
              >
                {candidates[i].cand_name}
              </div>
              <div
                data-cid={candidates[i].cand_id}
                data-eid={elecid}
                data-type="lockSymbol"
                style={{
                  cursor: votedto ? "default" : "pointer",
                }}
                className={getLockStatus(candidates[i].cand_id, votedto)}
              ></div>
            </div>
          );
        })}
      </div>
    </CollapsibleContent>
  );
};

export default Grabcandidate;
