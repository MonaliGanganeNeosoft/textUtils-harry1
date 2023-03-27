import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");
  const handleUPClick = () => {
    console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase", "success");
  };

  const handleLOClick = () => {
    console.log("lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to Lowercase", "success");
  };
  const handleChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };
  const handleClearClick = () => {
    setText("");
    props.showAlert("clear text", "success");
  };

  const handleCopy = () => {
    console.log("i am copy");
    var text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("copy to clipboard", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);

    setText(newText.join(" "));
    props.showAlert("removed extra spaces", "success");
  };
  return (
    <>
      <div
        class="mb-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <label for="exampleFormControlTextarea1" class="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          value={text}
          rows="3"
          onChange={handleChange}
          style={{
            backgroundColor: props.mode === "dark" ? "grey" : "white",
            color: props.mode === "dark" ? "white" : "black"
          }}
        ></textarea>
      </div>
      <button className=" btn btn-primary mx-2" onClick={handleUPClick}>
        Convert to uppercase
      </button>
      <button className=" btn btn-primary mx2" onClick={handleLOClick}>
        Convert to Lowercase
      </button>
      <button className=" btn btn-primary" onClick={handleClearClick}>
        clear text
      </button>

      <button className=" btn btn-primary" onClick={handleCopy}>
        Copy Text
      </button>
      <button className=" btn btn-primary" onClick={handleExtraSpaces}>
        remove extra space
      </button>

      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words,{text.length} char
        </p>
        <p>{0.008 * text.split(" ").length} Min read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in textarea above"}</p>
      </div>
    </>
  );
};
export default TextForm;
