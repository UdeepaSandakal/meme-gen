import React from "react";

function Form() {
  return (
    <div className="form">
      <input type="text" placeholder="Top text" className="form--title" />
      <input type="text" placeholder="Bottom text" className="form--title" />
      <button className="form--button">Get a new Meme Image</button>
    </div>
  );
}

export default Form;
