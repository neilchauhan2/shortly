import React from "react";

function UrlError(props) {
  return (
    <div>
      <div className="notification is-danger"> {props.msg} </div>
    </div>
  );
}

export default UrlError;
