import { useState } from "react";
import { calculateDaysBetweenTwoDates } from "../utils/calculatingUtils";

export function ShowMoreLongestCollab({ longestCollaboration }) {
  const [displayMore, setDisplayMore] = useState(false);
  const [word, setWord] = useState('more');

  const hadleClick = (() => {
    displayMore ? setDisplayMore(false) : setDisplayMore(true);
    displayMore ? setWord('more') : setWord('less');
  })

  return (
    <>
      <p>
        The longest collaboration work on common projects is between:{" "}
        {longestCollaboration.empID1}, {longestCollaboration.empID2}
      </p>
      {displayMore ? <ul id="more">
        Days worked together: {longestCollaboration.daysWorked}
        <br />
        {
          
          <>
            {longestCollaboration.projects.map((p, index) => (
              <li key={index}>
                Project: {p.projectID},{" "}
                {calculateDaysBetweenTwoDates(p.dateFrom, p.dateTo)}
              </li>
            ))}
          </>
        }
      </ul> : null}
      
      <button id="myBtn" onClick={hadleClick}>Show {word} information</button>
    </>
  );
}
