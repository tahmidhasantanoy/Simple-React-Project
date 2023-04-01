import { useEffect, useState } from "react";
import "./App.css";
import Actions from "./components/Actions/Actions";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";


function App() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("knowledge-cafe.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);


  const notify = () => toast("Wow so easy!");

  //BookMarked section
  // const [booked,setBooked] = useState(0)
  // const bookmark = (id) => {
  //   //   console.log(typeof id);
  //   let count = 0;
  //   const arr = [1];
  //   let bookMarkedArray = [...arr];
  //   const storeID = bookMarkedArray.find(element => element === id);
  //   console.log(storeID); //Even though it's exist in array ,show undefined

  //   if (storeID) {
  //     console.log("alreay exist");
  //   } else {
  //     console.log("Not exist");
  //     count++;
  //     bookMarkedArray.push(id); //why replace by new one?
  //   }
  //   console.log(count);
  //   console.log(bookMarkedArray);
  // };

  const [book, setBooked] = useState([]);
  const bookmark = (obj) => {
    // console.log(obj);
    let arr = [];

    if (book.find((element) => element.id === obj.id)) {
      notify()
    }
    arr = [...book,obj];
    setBooked(arr)
    console.log(arr);
  };

  //Mark as read
  // let readingTime = 0;
  // let readingTimeArr = []
  const [count, setCount] = useState(0);
  const markAsRead = (time) => {
    // readingTime = readingTime + time;  //why not it's adding all?
    //state rerender?
    // readingTimeArr.push(readingTime)  //readingTime e kno hoy na
    // console.log(readingTimeArr);
    // console.log(readingTime);
    setCount(count + time); //elhane kno hoy?
    // setCount(readingTime)
    // setCount(readingTimeArr);
  };
  // console.log(readingTime);
  console.log(count);

  return (
    <div className="App mx-5">
      <Header></Header>

      <div className="blogs-actions d-flex container-lg mx-5  px-5 py-5">
        <div>
          {blogs.map((blog) => (
            <Blogs
              key={blog.id}
              info={blog}
              markAsRead={markAsRead}
              bookMark={bookmark}
            ></Blogs>
          ))}
        </div>
        <div className="container-fluid me-5 pe-5">
          <Actions readTime={count} book={book}></Actions>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
