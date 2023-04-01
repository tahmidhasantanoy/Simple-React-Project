import React from "react";
import "./Actions.css";

const Actions = (props) => {
  console.log(props);
  const bookArr  =  props.book
  const { readTime } = props;

  return (
    <div className="action-menu .me-4">
      <div className="action-meanu ms-0 me-5 pe-5 my-5">
        <div
          style={{
            backgroundColor: "rgba(96, 71, 236, 0.1)",
            border: "1px solid rgba(96, 71, 236, 0.1)",
          }}
          className="me-5 pe-5 rounded-1 my-3"
        >
          <h5 style={{ color: "#6047EC" }} className="text-nowrap ms-5 py-2">
            {" "}
            Spent time on read : {readTime} min
          </h5>
        </div>


        <div
          style={{ backgroundColor: "rgba(17, 17, 17, 0.05);" }}
          className="me-5 pe-5 rounded-1 bg-dark-subtle text-center"
        >

          <h5 className="ps-5 text-nowrap py-2">Bookmarked Blogs : {bookArr.length}</h5>
 
          {
            bookArr.map(item => <p className="bg-light rounded-1 text-center ms-5 my-3 py-2">{item.blog_title}</p>)
          }
        </div>
      </div>
    </div>
  );
};

export default Actions;
