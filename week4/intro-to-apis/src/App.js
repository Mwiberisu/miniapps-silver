import "./App.css";
import FetchData from "./components/fetch_data";

function App() {
  document.title = "LePosts";
  return (
    <div className="App">
      <FetchData />
    </div>
  );
}

export default App;
