// Quotes.js
import React, { useEffect, useState } from "react";
import { fetchAxios, add } from "./hooks";

function Quotes() {
  const [quote, setQuote] = useState({});
  let ref = React.useRef(false);
  // async function fetchData() {
  //   try {
  //     const response = await axios.get(
  //       "https://official-joke-api.appspot.com/random_joke"
  //     );

  //     console.log(response.data);
  //     setQuote(response.data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // }
  async function fetchQuotes() {
    try {
      const value = await fetchAxios(
        "https://official-joke-api.appspot.com/random_joke"
      );
      setQuote(value);
    } catch (err) {
      console.log("Error While Fetching Quotes", err);
    }
  }

  useEffect(() => {
    if (!ref.current) {
      fetchQuotes();
      return () => {
        ref.current = true;
      };
    }
  }, []);

  const { punchline, setup } = quote;

  return (
    <>
      <h3>Random Quote</h3>
      <p>{punchline}</p>
      <p>
        <em>{setup}</em>
      </p>
    </>
  );
}

export default Quotes;
