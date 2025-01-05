import "./App.css";
import Header from "./Header";
import DiaryEntry from "./DiaryEntry";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";

function App() {
  document.title = "Dear Diary";

  return (
    <div className="App">
      <Router>
        <Root />
      </Router>
    </div>
  );
}

function Root() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/deardiary" element={<DiaryEntry />} />
      </Routes>
    </div>
  );
}

export default App;
