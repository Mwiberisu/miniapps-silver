import "./App.css";
import Header from "./Header";
import DiaryEntry from "./DiaryEntry";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";
import DiaryEntryList from "./DiaryEntryList";
import { UserAuth } from "./UserAuth";
import Logout from "./Logout";

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
  const { isSignedIn } = UserAuth();

  return (
    <div>
      <Header />

      <Routes>
        <Route path="/*" element={isSignedIn ? <DiaryEntry /> : <Login />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/deardiary" element={<DiaryEntry />} />
        <Route path="/pastentries" element={<DiaryEntryList />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
