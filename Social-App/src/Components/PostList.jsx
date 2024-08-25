import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListContext } from "../store/post-list-store";
import Welcome from "./Welcome";
import Loaderspin from "./Loaderspin";

const PostList = () => {
  
  const { postList, addinitialPost } = useContext(PostListContext);
  const [fetching , setFetching] = useState(false);

  useEffect(()=>{
    setFetching(true);

    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts",{signal})
      .then((res) => res.json())
      .then((data) => { 
        addinitialPost(data.posts);
        setFetching(false);
      })

      return ()=>{
        controller.abort();
      }
  },[])

    
      

  return (
    <>
      {fetching && <Loaderspin />}
      { !fetching && postList.length === 0 && <Welcome />}
      { !fetching && postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
