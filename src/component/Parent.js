import Link from "next/link";

const Parent = ({ children }) => {
  return (
    <div>
      <div className="parent-header">
        <Link
          className="HomeButton"
          href="https://dev-blog-three-theta.vercel.app/"
        ></Link>
        <Link
          href="https://dev-blog-three-theta.vercel.app/createPost"
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
