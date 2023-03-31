import React from "react";

const Blogs = (props) => {
  console.log(props);
  const { img, picture, title,date,name } = props.info;
  return (
    <div className="container-fluid mx-5 px-5 py-5">
      <div className="">
        <div className="card w-75">
          <img
            className="card-img-top rounded rounded-3 w-100"
            src={img}
            alt="Nature image"/>
          <div className="card-body">
            <div className="d-flex align-items-center">
                <div className="d-flex .space-evenly .w-25 .py-3 align-items-center">
                    <img className="w-25 p-5 rounded-circle" src={picture} alt="" />
                    <div className="">
                    <h6 className="">{name}</h6>
                    <p>{date}</p>
                    </div>
                </div>
                <div>
                    <p className="text-nowrap">10 min read </p>
                </div>
                
            </div>
            <h5 className="card-title w-100">{title}</h5>
            <p>#beginners  <span style={{ marginLeft: '.5rem' }}></span>  #programming</p>
            <a style={{color: '#6047EC'}} href="#"><h6>Mark as read</h6></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
