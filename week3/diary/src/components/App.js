import "./App.css";
import Header from "./Header";
import DiaryEntry from "./DiaryEntry";
import Login from "./Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SignUp from "./SignUp";
import DiaryEntryList from "./DiaryEntryList";
import { UserAuth } from "./UserAuth";

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
        <Route
          exact
          path="/"
          render={() => {
            return isSignedIn ? (
              <Navigate to="/deardiary" />
            ) : (
              <Navigate to="/login" />
            );
          }}
        />
        <Route path="/login" index element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/deardiary" element={<DiaryEntry />} />
        <Route path="/pastentries" element={<DiaryEntryList />} />
      </Routes>
    </div>
  );
}

export default App;
