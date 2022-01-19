import React from "react";

import "./pageHeader.scss";

const PageHeader = (props) => {
  return (
    <div
      className={`page-${props.category === "movie" ? "movie" : "tv"}-header`}
    >
      <h1>{props.children}</h1>
    </div>
  );
};

export default PageHeader;
