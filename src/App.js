import { useEffect, useState } from "react";
import "./App.css";
import Actions from "./components/Actions/Actions";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("knowledge-cafe.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);


  let readingTime = 0;
  const [count, setCount] = useState(0);
  const markAsRead = (time) => {
    readingTime = readingTime + time;
    // console.log(count);
    console.log(readingTime);
    setCount(readingTime);
    // <Actions readTime={count}></Actions>;
  };
  console.log(readingTime);
  // function from another components 

  return (
    <div className="App mx-5">
      <Header></Header>
      
      <div className="blogs-actions d-flex container-lg mx-5  px-5 py-5">
        <div>
          {blogs.map((blog) => (
            <Blogs key={blog.id} info={blog} markAsRead={markAsRead}></Blogs>
          ))}
        </div>
        <div className="container-fluid me-5 pe-5">
          <Actions readTime={count}></Actions>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
