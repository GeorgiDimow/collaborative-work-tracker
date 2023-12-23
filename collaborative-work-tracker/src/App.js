import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Search from "./pages/Search";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="/search" element={<Search />} />
      </Route>
    </Routes>
  );
}

export default App;
