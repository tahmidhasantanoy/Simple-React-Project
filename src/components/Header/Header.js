import React from "react";

const Header = () => {
  return (
    <nav className="navbar mx-5 px-5">
      <div className="container-fluid mx-5 px-5">
        <h1>
            Knowledge-cafe
        </h1>
        <div>
          <div class="post__profile w-50">
            <img
              class="rounded-circle w-50"
              alt="avatar1"
              src="https://mdbcdn.b-cdn.net/img/new/avatars/9.webp"
            />
            {/* <img className="rounded-circle  w-25" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="User Picture" /> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
