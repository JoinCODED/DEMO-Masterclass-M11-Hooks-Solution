import { Route, Routes } from "react-router-dom";

import EmployeeList from "./components/EmployeeList";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { useScrollToTop } from "./hooks";

const App = () => {
  useScrollToTop();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<EmployeeList />} />
      </Routes>
    </>
  );
};

export default App;
