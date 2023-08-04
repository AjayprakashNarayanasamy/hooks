import Button from "react-bootstrap/Button";
import "./index.css";
import alexion from "./MicrosoftTeams-image.png";
import instagram from "./MicrosoftTeams-image (1).png";
import youtube from "./MicrosoftTeams-image (2).png";
import twitter from "./MicrosoftTeams-image (3).png";
import linkedin from "./MicrosoftTeams-image (4).png";
import React, { Fragment } from "react";

function BottomBar() {
  const contentRoutes = {
    value1: "Contact Us",
    value2: "Legal Statement",
    value3: "Privacy Notice",
    value4: "Term of Use",
    value5: "Cookies Settings",
  };
  const icons = {
    value1: instagram,
    value2: youtube,
    value3: twitter,
    value4: linkedin,
  };

  return (
    <div id="page-container">
      <div id="content-wrap"></div>
      <footer id="footer">
        <div className="row">
          <div className="mb-3 col-sm-12 col-md-11 col-lg-11 col-xl-10 icon-alignment">
            {Object.entries(icons).map(([key, value], i) => (
              <Fragment key={i}>
                <span className="p-2">
                  <img
                    src={value}
                    style={{ height: "20px ", width: "15px" }}
                    alt="fireSpot"
                  />
                </span>
                {/* <span className="p-2">
                  <img
                    src={youtube}
                    style={{ height: "20px ", width: "15px" }}
                    alt="fireSpot"
                  />
                </span>
                <span className="p-2">
                  <img
                    src={twitter}
                    style={{ height: "20px ", width: "15px" }}
                    alt="fireSpot"
                  />
                </span>
                <span className="pl-4">
                  <img
                    src={linkedin}
                    style={{ height: "20px ", width: "15px" }}
                    alt="fireSpot"
                  />
                </span> */}
              </Fragment>
            ))}
          </div>
        </div>
        <div className="row">
          <div
            className=" col-sm-12   col-md-4  col-lg-4 col-xl-4  logo "
            style={{ color: "red" }}
          >
            <img
              src={alexion}
              style={{ height: "60px ", width: "200px" }}
              alt="fireSpot"
            />
          </div>
          <div
            className=" col-sm-12   col-md-7    col-lg-7 col-xl-6 contents "
            style={{ color: "red", fontSize: "11px" }}
          >
            <div>
              {" "}
              {Object.entries(contentRoutes).map(([key, value], i) => {
                console.log()
                return (
                  <Fragment key={i}>
                    <span key={i}>{value}</span>{" "}
                    {Object.keys(contentRoutes).length - 1 !== i ? (
                      <span id="dot">.</span>
                    ) : null}{" "}
                    {/* <span>Leagl Statement</span> <span id="dot">.</span>{" "}
                    <span>Privacy Notice</span> <span id="dot">.</span>{" "}
                    <span>Term of Use</span> <span id="dot">.</span>{" "}
                    <span>Cookies Settings</span> */}
                  </Fragment>
                );
              })}
            </div>
            <div>
              {" "}
              The Website is intended only for the residents of the United
              States. @ 2022 Alexion Pharmaceutical, Inc.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default BottomBar;
