import "./App.css";
import Header from "./Header";
import DiaryEntry from "./DiaryEntry";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";

function App() {
  document.title = "Dear Diary";
  return (
    <div className="App">
      <Header />
      {/* <Login /> */}
      <SignUp />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/deardiary" element={<DiaryEntry />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
