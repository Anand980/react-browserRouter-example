import React, { useState } from "react";

const Home = ({}) => {
  const [text, setText] = useState("");

  return (
    <div>
      <h1>Home</h1>

      <div>
        <input
          type="text"
          placeholder="Seach any food"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
      </div>
    </div>
  );
};

export default Home;
