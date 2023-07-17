import React, { useState } from "react";

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
    <div className="">
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
  );
}

export default App;
