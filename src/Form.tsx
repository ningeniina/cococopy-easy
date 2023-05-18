/*import React, { useState } from "react";

const FormExample = () => {
  const [inputText, setInputText] = useState("");

  const handleButtonClick = () => {
    if (inputText === "あいうえお") {
      // 送信処理
      console.log("送信処理");
    } else {
      setInputText("あいうえお");
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputText} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>ボタン</button>
    </div>
  );
};

export default FormExample;*/

import React, { useState, useRef, useEffect } from "react";

const TextAreaForm = () => {
  const [text, setText] = useState("");
  const [inputText, setInputText] = useState("");
  const [savedLines, setSavedLines] = useState<string[]>([]);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleSave = () => {
    const lines = text
      .split("\n")
      .map((line) => (line.trim() === "" ? "------------" : line)); // 空白以外の要素だけをフィルタリング;
    setSavedLines(lines);
  };

  const handleLineClick = (line: string) => {
    if (inputText === line) {
      // 送信処理
      console.log(line);
      setInputText("");
    } else {
      setInputText(line);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  return (
    <div style={{ position: "relative", zIndex: "1000" }}>
      <textarea
        ref={textareaRef}
        value={text}
        onChange={handleChange}
        rows={5}
        cols={30}
        style={{
          width: "100%",
          height: "80px",
          resize: "none",
          boxSizing: "border-box",
        }}
      />
      <button onClick={handleSave}>保存</button>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        style={{
          width: "100%",
          backgroundColor: "white",
          overflowX: "hidden",
          overflowY: "scroll",
          boxSizing: "border-box",
        }}
      />
      <div
        style={{
          width: "100%",
          height: "200px",
          backgroundColor: "white",
          overflowX: "hidden",
          overflowY: "scroll",
          cursor: "default",
        }}
      >
        {savedLines.map((line, index) => (
          <p
            key={index}
            onClick={() => handleLineClick(line)}
            style={{
              fontSize: "14px",
              borderBottom: "1px solid #AAA",
              margin: 0,
              padding: "8px",
            }}
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

export default TextAreaForm;
