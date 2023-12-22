import { useContext } from "react";
import { calculateLongestCollaboration } from "../../utils/calculatingUtils";
import { dataContext } from "../../context/useDataContext";

export function LongestCollabWork() {
  const data = useContext(dataContext);
  const longestCollaboration = calculateLongestCollaboration(data.employeesData);

  return <p>The longest collaboration work on common projects is between: {longestCollaboration.empID1}, {longestCollaboration.empID2}</p>;
}


