import React from "react";
import "./Electioncard.css";
import Grabcandidate from "./Grabcandidate";
import {
  CollapsibleComponent,
  CollapsibleHead,
} from "react-collapsible-component";
/*


*/
function sortfun1(a, b) {
  if (Number(a['cand_id']) !== 0 && Number(b['cand_id']) !== 0) {
    if (a["cand_name"] > b["cand_name"]) return 1;
    else return -1;
  } else if (Number(a['cand_id']) === 0) {
    return 1
  } else {
    return -1
  }
}

function sendProps(allelec, i) {

  var arr = allelec[i - 1].elec_candidates
    .sort(sortfun1);
   console.log(allelec[i - 1].elec_candidates);
  return arr;
    
}
const Grabelection = ({ validelec, allelec, voterinfo, token, updateLoad }) => {
  if (validelec.length) {
    return (
      <div>
        {validelec.map((i, id) => {
          return (
            <div key={id}>
              <CollapsibleComponent name={i}>
                <CollapsibleHead
                  className={voterinfo.voter_rights[id].elec_isvoted ? "elecbar elecbar-disabled " : "elecbar"}
                  
                >
                  <div className="elecname">{allelec[i - 1].elec_name}</div>
                </CollapsibleHead>
                <Grabcandidate
                  key={i}
                  elecid={i}
                  elec_name={allelec[i - 1].elec_name}
                  candidates={sendProps(allelec, i)}
                  voterinfo={voterinfo}
                  token={token}
                  updateLoad={updateLoad}
                  isVoted={voterinfo.voter_rights[id].elec_isvoted}
                  votedto={voterinfo.voter_rights[id].cand_id}
                />
              </CollapsibleComponent>
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="errmsg">
        No elections available with valid number of candidates.
      </div>
    );
  }
};

export default Grabelection;
