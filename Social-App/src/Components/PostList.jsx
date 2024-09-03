
import Post from "./Post";
import Welcome from "./Welcome";

import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const postList = useLoaderData();

  return (
    <>
     
      { postList.length === 0 && <Welcome />}
      { postList.map((post, index) => {
        
        return <Post key={post.id} post={post} />;
      })}
    </>
  );
};

export const postloader =()=>{
  return fetch("https://dummyjson.com/posts")
  .then(res => res.json())
  .then(data => {
     return data.posts;
  });
}

export default PostList;
