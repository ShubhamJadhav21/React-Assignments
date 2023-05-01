import React, { useRef } from "react";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import "./FilePicker.css";
export default function FilePicker() {
  let pickFile = useRef();

  function ButtonClick() {
    pickFile.current.click();
  }

  return (
    <div className="wrapper">
      <div className="container">
        <button onClick={ButtonClick} id="btn1">
          <FileUploadOutlinedIcon sx={{ fontSize: 40 }} />
          <p>Drag and drop any files here</p>
        </button>

        <input type="file" ref={pickFile} />
      </div>
      <button id="btn2" onClick={ButtonClick}>
        upload
      </button>
    </div>
  );
}
