import Link from "next/link";

const Blog = ({ title, imgUrl, tags, user, date, siteUrl }) => {
  return (
    <div className="blog-container ">
      <img className="img" src={imgUrl} />
      <Link href={siteUrl} className="text tag" style={{ color: "#4370CB" }}>
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
