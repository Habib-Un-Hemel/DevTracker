import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";

function Write() {
  const [value, setValue] = useState("");

  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="Title" />
        <div className="editorContainer">
          <ReactQuill theme="snow" value={value} onChange={setValue} />
        </div>
        {/* <button>Publish</button> */}
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input
            style={{ display: "none" }}
            type="file"
            name=""
            id="file"
          ></input>
          <label htmlFor="file">Upload Image </label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button>Update</button>
          </div>
        </div>
        {/* item  */}

        <div className="item">
          <h1>Catergory</h1>
          <div className="cat">
            <input type="radio" name="cat" value="dsa" id="dsa" />
            <label htmlFor="dsa">DSA</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="mern" id="mern" />
            <label htmlFor="mern">MERN</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              value="fundamental"
              id="fundamental"
            />
            <label htmlFor="fundamental">FUNDAMENTAL</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="ml" id="ml" />
            <label htmlFor="ml">ML</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="java" id="java" />
            <label htmlFor="java">JAVA</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Write;
