import React, { useState } from "react";

function Home(props) {
  const [text, setText] = useState("");

  const hedalUpclick = () => {
    console.log("hendalUpclick was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const hendalLoclick = () => {
    console.log("hendalLocase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };

  const hendalClclick = () => {
    let newText = "";
    setText(newText);
  };

  const hendalCopytext = () => {
    let text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const hendalOnchange = (event) => {
    console.log("hendalOnchange was clicked");
    setText(event.target.value);
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="mb-3">
          <h3 className="m-3"> {props.Heding} </h3>
          <textarea
            style={{
              backgroundColor: props.mode === "light" ? " #f4fbf9" : "black",
              color: props.mode === "light" ? "black" : "white",
            }}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={hendalOnchange}
          ></textarea>
        </div>
      </div>
      <div className="container">
        <button
          type="button"
          className="btn btn-primary me-3"
          onClick={hedalUpclick}
        >
          Convart to upparcase
        </button>
        <button
          type="button"
          className="btn btn-primary me-3"
          onClick={hendalLoclick}
        >
          Convart to lovercase
        </button>
        <button
          type="button"
          className="btn btn-primary me-3"
          onClick={hendalClclick}
        >
          Clear
        </button>
        <button
          type="button"
          className="btn btn-primary me-3"
          onClick={hendalCopytext}
        >
          Copy text
        </button>
      </div>
      <div className="container mt-5">
        <h1>Your text summarey</h1>
        <p>
          {" "}
          {text.split(" ").length} word {text.length} Charectres
        </p>
        <h2>Preview</h2>
        <p> {text} </p>
      </div>
    </div>
  );
}
export default Home;
