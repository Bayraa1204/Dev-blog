"use client";

import { useEffect, useRef, useState } from "react";
import Blog from "../component/blog";
const Page = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const dataJSON = await fetch(
      `https://dev.to/api/articles?per_page=9&page=${count}`
    );
    const dataUnJson = await dataJSON.json();
    setData(dataUnJson);
  };
  const [count, setCount] = useState(1);
  const [searchedDataCount, setSearchedDataCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const AddCount = () => {
    setCount(count + 1);
  };
  const MinusCount = () => {
    if (count !== 1) {
      setCount(count - 1);
    }
  };
  useEffect(() => {
    getData();
  }, [count]);

  return (
    <div className="big-body">
      <h1 className="text">All Blogs</h1>
      <input
        placeholder="Search for the Title"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="input"
      />
      <div className="all-container">
        {searchedDataCount == 9 ? <div>No Data</div> : null}
        {data &&
          data.map((blog, index) => {
            if (blog.title.toLowerCase().includes(inputValue.toLowerCase())) {
              return (
                <Blog
                  key={index}
                  tags={blog.tags}
                  imgUrl={blog.social_image}
                  title={blog.title}
                  user={blog.user}
                  date={blog.readable_publish_date}
                  siteUrl={blog.url}
                />
              );
            } else {
            }
          })}
      </div>
      <div className="pageChanger">
        <button onClick={() => MinusCount()} className="pageChangerBtn">
          {"<="}
        </button>
        {count}
        <button onClick={() => AddCount()} className="pageChangerBtn">
          {"=>"}
        </button>
      </div>
    </div>
  );
};
export default Page;
