import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-light text-center text-lg-start">
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Props Vs state</h5>

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

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-0">How useState work?</h5>

              <p className="border p-3 mt-2">
                When anything is need to change page we use useState().useState() is called at the first line of function. if developer need to show change state Then change state send into the set-function.After that the deafult variable get this.Finally developer can show change state by default variable. 
              </p>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">What useEffect do?</h5>

              <p className="border p-3 mt-2">
              First argument-callback function contains the side-effect logic. callback is executed right after the dependencies update. <br />
              <strong><u>Work list</u></strong><br />
              (1)validating input field, (2)live filtering, (3)update paragraph list on fetched API data update
              </p>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">How does react work?</h5>

              <p className="border p-3 mt-2">
                ReacJs divides The UI into multiple components(pieces of code).React components work similarly when they receive property(props).In React, it is possible to have many components. 
              </p>
            </div>
          </div>
        </div>

        <div
          className="text-center text-white p-3"
          style={{ backgroundColor: "Black" }}
        >
          © 2023 Copyright:
          <a className="text-white" href="_blank">
            tahmidhasan.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
