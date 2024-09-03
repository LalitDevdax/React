import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Sidebar from "../Components/Sidebar"


import PostListProvider from "../store/PostListProvider"
import { Outlet } from "react-router-dom"


function App() {

  


  return (
    <PostListProvider>
      <div id="sidebar">
      <Sidebar ></Sidebar>
      <div id="content">
      <Header></Header>
      <Outlet />
      <div id="footermain">
      <Footer></Footer>
      </div>
      
      </div>
      </div>

    </PostListProvider>
  )
}

export default App
