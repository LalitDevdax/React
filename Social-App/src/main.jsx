import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App';
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import CreatePost , {createpostaction} from './Components/CreatePost';
import  PostList, { postloader }  from './Components/PostList';


const router = createBrowserRouter([
  {path : "/" , element : <App /> , children : [{path : "/" , element : <PostList /> , loader : postloader},{path : "/create-post" , element : <CreatePost />,action: createpostaction},]},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
