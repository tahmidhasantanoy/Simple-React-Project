import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="bg-light text-center text-lg-start">
        <div class="container p-4">
          <div class="row">
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase">Props Vs state</h5>

              <p className="border p-3 mt-2">
                <strong>
                  <u>State</u>
                </strong>
                <br />
                <strong> (1)</strong>State are owned locally. <br />{" "}
                <strong>(2)</strong> State is modifiable. <br />
                <strong>
                  <u>Props</u>
                </strong>
                <br />
                <strong> (1)</strong>Props are owned by a parent. <br />{" "}
                <strong>(2)</strong> Props isn't modifiable.
              </p>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase mb-0">How useState work?</h5>

              <p className="border p-3 mt-2">
                When anything is need to change page we use useState().useState() is called at the first line of function. if developer need to show change state Then change state send into the set-function.After that the deafult variable get this.Finally developer can show change state by default variable. 
              </p>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase">What useEffect do?</h5>

              <p className="border p-3 mt-2">
              First argument-callback function contains the side-effect logic. callback is executed right after the dependencies update.
              </p>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase">How does react work?</h5>

              <p className="border p-3 mt-2">
                ReacJs divides The UI into multiple components(pieces of code).React components work similarly when they receive property(props).In React, it is possible to have many components. 
              </p>
            </div>
          </div>
        </div>

        <div
          class="text-center text-white p-3"
          style={{ backgroundColor: "Black" }}
        >
          © 2023 Copyright:
          <a class="text-white" href="_blank">
            tahmidhasan.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
