import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";
function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <Link to="/createpost">Create A Post</Link>
          <Link to="/">Go home page</Link>
        </div>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/createpost" Component={CreatePost} />
          <Route path="/post/:id" Component={Post} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
