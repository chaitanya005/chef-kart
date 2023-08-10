import Layout from "./components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemDetais from "./components/ItemDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Layout />}></Route>
        <Route exact path="/item-detail" element={<ItemDetais />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
