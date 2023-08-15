import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListPage from "./component/ListPage";
import { DetailsPage } from "./component/DetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/details" element={<DetailsPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
