import { useContext} from "react";
import { PostList } from "../store/PostListProvider";
import { redirect , useActionData} from "react-router-dom";
import { Form } from "react-router-dom";

const CreatePost = () => {

 
 // const { addPost } = useContext(PostList);

  return (
    <Form method="POST" className="create-post" >
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">Enter your User Id here</label>
        <input
          type="text"
          name="userId"
          className="form-control"
          id="userId"
          placeholder="Your User Id"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Post Title</label>
        <input
          type="text"
          name="postTitle"
          className="form-control"
          id="title"
          placeholder="How are you feeling today..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">Post Content</label>
        <textarea
          type="text"
          name="postBody"
          rows="4"
          className="form-control"
          id="body"
          placeholder="Tell us more about it"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">Number of reactions</label>
        <input
          type="text"
          name="reactions"
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to this post"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">Enter your hashtags here</label>
        <input
          type="text"
          className="form-control"
          id="tags"
          name="tags"
          placeholder="Please enter tags using space"
        />
      </div>
      <button type="submit" className="btn btn-primary">Post</button>
    </Form>
  );
};

export async function createpostaction(data){

  const formDATA = await data.request.formData();
  const postdata = Object.fromEntries(formDATA);
  postdata.tags = postdata.tags.split(" ");



  fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(
      postdata
    ),
  })
  .then(res => res.json())
  .then(post => console.log(post));

  return redirect("/")
}

export default CreatePost;
