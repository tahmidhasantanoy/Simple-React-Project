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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
