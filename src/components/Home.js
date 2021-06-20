import { useState, useEffect} from "react";
import BlogList from "./BlogList";
import useFetch from "../useFetch";

const Home = () => {
   
  const {data:blogs,isPending,error} = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="home">
          {error &&<div>Could not fetch the data for the resource......</div>}
          {isPending && <div>Content is Loading......</div>}
          {blogs && <BlogList blogs={blogs} title="All Blogs!"  />}
           
        </div>
     );
}
 
export default Home;