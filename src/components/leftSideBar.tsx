import React from "react";

const LeftSideBar = () => {
  return (
    <div className="border-r-1 border-gray-100 h-screen ">
      <h2>Popular Communities</h2>
      <ul>
        <li>
          <a href="#">r/AskReddit</a>
        </li>
        <li>
          <a href="#">r/gifs</a>
        </li>
        <li>
          <a href="#">r/funny</a>
        </li>
        <li>
          <a href="#">r/pics</a>
        </li>
        <li>
          <a href="#">r/todayilearned</a>
        </li>
      </ul>
      <h2>Filter by Flair</h2>
      <ul>
        <li>
          <a href="#">Discussion</a>
        </li>
        <li>
          <a href="#">News</a>
        </li>
        <li>
          <a href="#">Question</a>
        </li>
        <li>
          <a href="#">Media</a>
        </li>
        <li>
          <a href="#">Humor</a>
        </li>
      </ul>
    </div>
  );
};

export default LeftSideBar;
