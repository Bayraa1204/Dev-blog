"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Blog = ({ title, imgUrl, tags, user, date, id }) => {
  return (
    <div className="blog-container ">
      <img className="img" src={imgUrl} />
      <Link
        href={`https://dev-blog-three-theta.vercel.app/paths?id=${id}`}
        className="text tag"
        style={{ color: "#4370CB" }}
      >
        +{tags.toUpperCase()}+
      </Link>
      <div className="text">{title}</div>
      <div className="user-container">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img className="userImg" src={user.profile_image} />
          <div>{user.name}</div>
        </div>
        <div>{date}</div>
      </div>
    </div>
  );
};
export default Blog;
