import Book from "./Components/Book";
import Checkout from "./Components/Checkout";
import Header from "./Components/Header";
import Home from "./Components/Home";
import NoutFound from "./Components/NoutFound";
import Register from "./Components/Register";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  const token = localStorage.getItem("token");
  console.log(token);
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/book" element={token ? <Book /> : <Register />} />
          <Route exact path="/" element={token ? <Home /> : <Register />} />
          <Route
            exact
            path="/checkout"
            element={token ? <Checkout /> : <Register />}
          />
          <Route exact path="/register" element={<Register />} />
          <Route path="/:abcd" element={<NoutFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
