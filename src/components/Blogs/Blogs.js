import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";

//BookMarked section
const bookBookmark = (id) => {
  //   console.log(typeof id);
  let count = 0;
  const arr = [1];
  let bookMarkedArray = [...arr];
  const storeID = bookMarkedArray.find((element) => element === id);
  console.log(storeID); //Even though it's exist in array ,show undefined

  if (storeID) {
    console.log("alreay exist");
  } else {
    console.log("Not exist");
    count++;
    bookMarkedArray.push(id); //why replace by new one?
  }
  console.log(count);
  console.log(bookMarkedArray);
};

//Mark As Read section
// let readingTime = 0;
// const markAsRead = (time) => {
//   console.log(time);
//   readingTime = readingTime + time;
//   console.log(readingTime);
// };

const Blogs = (props) => {
  //   console.log(props);
  const markRead = props.markAsRead;
  //   console.log(markRead);
  const { id, img, picture, title, date, name, read_time } = props.info;
  return (
    <div className="container-fluid mx-5 px-5 py-5">
      <div className="">
        <div className="card w-75">
          <img
            className="card-img-top rounded rounded-3 w-100"
            src={img}
            alt="Nature image"
          />
          <div className=".card-body">
            <div className="d-flex align-items-center">
              <div className="d-flex .space-evenly .w-25 py-3 align-items-center">
                <img className="w-25 p-3 rounded-circle" src={picture} alt="" />
                <div className="">
                  <h6 className="">{name}</h6>
                  <p>{date}</p>
                </div>
              </div>
              <div>
                <p className="text-nowrap">
                  {read_time} min read{" "}
                  <button
                    onClick={() => bookBookmark(id)}
                    className="border border-white bg-transparent"
                  >
                    <FontAwesomeIcon icon={faBookBookmark} />
                  </button>
                </p>
              </div>
            </div>
            <h5 className="card-title w-100">{title}</h5>
            <p>
              #beginners <span style={{ marginLeft: ".5rem" }}></span>{" "}
              #programming
            </p>
            <button
              className="border border-white bg-transparent"
              style={{ color: "#6047EC" }}
              href="_blank"
            >
              <h6 onClick={() => markRead(read_time)}>
                <u>Mark as read</u>
              </h6>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
