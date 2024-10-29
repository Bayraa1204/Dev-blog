"use client";
import Parent from "@/component/Parent";
import { useState } from "react";

const Page = () => {
  const [ifTitleEmpty, setIfTitleEmpty] = useState(null);
  const [ifContentEmpty, setIfContentEmpty] = useState(null);
  const [titleValue, setTitleValue] = useState(null);
  const [contentValue, setContentValue] = useState(null);

  const HandlePublish = () => {
    contentValue === "" || contentValue == " " || contentValue === null
      ? setIfContentEmpty(true)
      : setIfContentEmpty(false);
    titleValue === "" || titleValue == " " || contentValue === null
      ? setIfTitleEmpty(true)
      : setIfTitleEmpty(false);
    ifContentEmpty == false && ifTitleEmpty == false && alert("It's Complete");
  };
  return (
    <Parent>
      <div className="createPostBody">
        <div className="create-container">
          <input
            onChange={(e) => setTitleValue(e.target.value)}
            placeholder="New post title here..."
            className="Title"
          ></input>
          {ifTitleEmpty && <div className="EmptyAlert">Empty title!</div>}
          <textarea
            onChange={(e) => setContentValue(e.target.value)}
            placeholder="Write your post content here..."
            className="Description"
          ></textarea>
          {ifContentEmpty && <div className="EmptyAlert">Empty content!</div>}
          <div className="publishBtn-container">
            <button onClick={() => HandlePublish()} className="publishButton">
              Publish
            </button>
          </div>
        </div>
      </div>
    </Parent>
  );
};
export default Page;
