import { useState } from "react";
import { calculateDaysBetweenTwoDates } from "../utils/calculatingUtils";
import styles from "./show-more.module.css";

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
      {displayMore ? <>
        <p className={styles.days}>Days worked together: {longestCollaboration.daysWorked}</p>
        <ul className={styles.more} id="more">
        {
          <>
            {longestCollaboration.projects.map((p, index) => (
              <li key={index}>
                <p>ProjectId: {p.projectID}</p>
                <p>Days: {calculateDaysBetweenTwoDates(p.dateFrom, p.dateTo)}</p>
              </li>
            ))}
          </>
        }
      </ul>
      </> : null}
      
      <button onClick={hadleClick}>Show {word} information</button>
    </>
  );
}
