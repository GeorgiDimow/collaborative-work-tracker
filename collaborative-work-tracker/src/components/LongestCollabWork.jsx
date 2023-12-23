import { useContext } from "react";
import { calculateLongestCollaboration } from "../utils/calculatingUtils";
import { dataContext } from "../context/useDataContext";
import { useState } from "react";
import { useEffect } from "react";
import { ShowMoreLongestCollab } from "./ShowMoreLongestCollaboration";
import { NavLink, Outlet } from "react-router-dom";

export function LongestCollabWork() {
  const data = useContext(dataContext);
  const [longestCollaboration, setLongestCollaboration] = useState(
    data.employeesData
  );

  useEffect(() => {
    setLongestCollaboration(calculateLongestCollaboration(data.employeesData));
  }, [data.employeesData]);

  return (
    <>
      {longestCollaboration.empID1 ? (
        <>
          <ShowMoreLongestCollab longestCollaboration={longestCollaboration} />{" "}
          <NavLink to="/search">Search More</NavLink>
        </>
      ) : null}
    </>
  );
}
