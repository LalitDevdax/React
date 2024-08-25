import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Sidebar from "./Components/Sidebar"
import CreatePost from "./Components/CreatePost"
import PostList from "./Components/PostList"
import { useState } from "react"
import PostListProvider from "./store/post-list-store"


function App() {

  const [selectedTab , setSelectedTab] = useState("Home");


  return (
    <PostListProvider>
      <div id="sidebar">
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Sidebar>
      <div id="content">
      <Header></Header>
      { selectedTab === "Home" ? <PostList></PostList> : <CreatePost></CreatePost>}
      <Footer></Footer>
      </div>
      </div>

    </PostListProvider>
  )
}

export default App
