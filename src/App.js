import { useEffect, useState } from "react";
import "./App.css";
import Actions from "./components/Actions/Actions";
import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Header/Header";

function App() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("knowledge-cafe.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="App mx-5">
      <Header></Header>

      <div className="d-flex container-lg mx-5  px-5 py-5">
        <div>
          {blogs.map((blog) => (
            <Blogs key={blog.id} info={blog}></Blogs>
          ))}
        </div>
        <div>
          <Actions></Actions>
        </div>
      </div>
    </div>
  );
}

export default App;
