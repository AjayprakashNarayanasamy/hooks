import axios from "axios";
import React , { useState, useEffect, useRef } from "react";
import { fetchAxios } from "./hooks";

function Stories() {
  const [stories, setStories] = useState([]);

  async function getStories() {
    try {
      const topStories = await fetchAxios(
        "https://news-proxy-230704.appspot.com/topstories"
      );
      setStories(topStories);
    } catch (err) {
      console.log("Error in Stories Fetching: " + err);
    }
  }

  useEffect(() => {
    getStories();
  }, []);
  console.log(stories);
  return (
    <>
      <div className="Stories">
        {stories.map((val , i) => {
          const { by, title, url, time } = val;
          return (
            <React.Fragment key={i}>
              <a href={url}>{title}</a>
              <div>
                {by} at {new Date(time * 1000).toLocaleString()}
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
}
export default Stories;
