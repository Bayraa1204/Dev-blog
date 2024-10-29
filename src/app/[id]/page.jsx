"use client";
import Parent from "@/component/Parent";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const blogId = usePathname();
  const [blogData, setBlogData] = useState([]);
  const fetchBlogData = async () => {
    const dataJson = await fetch(`https://dev.to/api/articles${blogId}`);
    const fetchedData = await dataJson.json();
    setBlogData(fetchedData);
  };
  useEffect(() => {
    fetchBlogData();
  }, []);
  const userObj = blogData.user;
  return (
    <Parent>
      <div className="pageAll-container">
        <div className="container">
          <h1 className="header">{blogData.title}</h1>
          <img className="image" src={blogData.social_image} />
          <div className="blogDes">{blogData.description}</div>
          {userObj && (
            <div className="userBoard">
              <div className="userInfo">
                <img className="user-image" src={userObj.profile_image} />
                <div>{userObj.name}</div>
              </div>
              <div className="userDes">
                <div className="line">UserName : {userObj.username}</div>
                <div className="line">Twitter : {userObj.twitter_username}</div>
                <div className="line">GitHub : {userObj.github_username}</div>
              </div>
            </div>
          )}
          <div className="board">
            <h1 style={{ borderBottom: "2px solid black" }}>?Details?</h1>
            <h2>Tags</h2>
            <div className="line">{blogData.tag_list}</div>
            <h2>Publish Date</h2>
            <div className="line">{blogData.published_at}</div>
            <h2>Reactions</h2>
            <div className="line">{blogData.public_reactions_count}</div>
            <h2>Comment count</h2>
            <div className="line">{blogData.comments_count}</div>
          </div>
        </div>
      </div>
    </Parent>
  );
};
export default Page;
