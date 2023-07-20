import React, { useState } from "react";
import Quotes from "./Quotes";
import Stories from "./Stories";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  function searchValue(e) {
    setSearchQuery(e.target.value);
  }
  function searchNavigation() {
    window.open(`https://www.google.com/search?q=${searchQuery}`);
  }
  function handleClick(e) {
    if (e.key === "Enter") {
      window.open(`https://www.google.com/search?q=${searchQuery}`);
    }
  }
  return (
    <>
      <div clasName="">
        <h1>Search Engine</h1>
        <div className="form">
          <input
            value={searchQuery}
            onChange={searchValue}
            onKeyDown={handleClick}
          ></input>
          <button onClick={searchNavigation}>Search</button>
        </div>
      </div>
      <hr></hr>
      <Quotes></Quotes>
      <hr></hr>
      <Stories></Stories>
    </>
  );
}

export default App;
