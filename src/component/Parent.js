import Link from "next/link";

const Parent = ({ children }) => {
  return (
    <div>
      <div className="parent-header">
        <Link className="HomeButton" href="http://localhost:3000/"></Link>
        <Link
          href="http://localhost:3000/createPost"
          className="CreatePostButton"
        >
          Create a Post
        </Link>
      </div>
      <div className="body">{children}</div>
    </div>
  );
};
export default Parent;
