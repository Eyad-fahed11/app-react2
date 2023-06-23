import React from "react";
import "../components/OwnerPostName.css"
import MyBotton from "./Mybotton";
function OwnerPostName(props) {
  return (
    <div className="contener-div">
      <img  alt="eeee" id="imgeee" src={props.imageURL} />
      {/* <h1>{props.id}</h1> */}
      <h1>{props.username}</h1>
      {/* <h1>{props.msgBody}</h1> */}
      <textarea placeholder="What's in your Mind ?"></textarea>
      <br/>
      <MyBotton/>
      <br/>



    </div>
  );
}

export default OwnerPostName;
