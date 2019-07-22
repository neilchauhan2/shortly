import React from "react";

function UrlSuccess(props) {
  return (
    <div>
      <div className="notification is-success">
        Your shotened url: {props.shortUrl}
      </div>
    </div>
  );
}

export default UrlSuccess;
