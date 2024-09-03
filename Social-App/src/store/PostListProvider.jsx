import { createContext, useReducer, useCallback, useEffect, useState } from "react";

// Context Initialization
export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

// Reducer to handle post actions
const postListReducer = (state, action) => {
  switch (action.type) {
    case "ADD_INITIAL_POST":
      return [...action.payload.posts];
    case "ADD_POST":
      return [action.payload.post, ...state];
      case "DELETE_POST":
        const newState = state.filter(post => post.id !== action.payload.postId);
        return newState;
    default:
      return state;
  }
};

// Provider Component
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
 

  const addInitialPosts = (posts) =>{
    dispatchPostList({ type: "ADD_INITIAL_POST", payload: { posts: data.posts } });
  }
  // Function to add a post
  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: { post },
    });
  };

  // Function to delete a post
  const deletePost = useCallback((postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: { postId },
    });
  }, []);

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
