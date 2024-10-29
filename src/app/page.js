"use client";

import { useEffect, useRef, useState } from "react";
import Blog from "../component/blog";
import Parent from "@/component/Parent";
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
  const [inputValue, setInputValue] = useState("");

  const filterData = data.filter((blog) => {
    return blog.title.toLowerCase().includes(inputValue.toLowerCase());
  });

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
    <Parent>
      <div className="big-body">
        <h1 className="header" style={{ marginTop: "50px" }}>
          -Blog Posts-
        </h1>
        <input
          placeholder="Search for the Title"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="input"
        />
        <div className="all-container">
          {filterData.length == 0 && (
            <div className="notFound">Nothing was found</div>
          )}
          {data &&
            filterData.map((blog, index) => {
              return (
                <Blog
                  key={index}
                  tags={blog.tags}
                  imgUrl={blog.social_image}
                  title={blog.title}
                  user={blog.user}
                  date={blog.readable_publish_date}
                  id={blog.id}
                />
              );
            })}
        </div>
        {filterData.length !== 0 ? (
          <div className="pageChanger">
            <button onClick={() => MinusCount()} className="pageChangerBtn">
              {"<="}
            </button>
            {count}
            <button onClick={() => AddCount()} className="pageChangerBtn">
              {"=>"}
            </button>
          </div>
        ) : null}
      </div>
    </Parent>
  );
};
export default Page;
