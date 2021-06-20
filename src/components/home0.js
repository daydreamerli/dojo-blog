import { useState, useEffect} from "react";
import BlogList from "./BlogList";

const Home = () => {
   
    const[blogs,setBlogs] = useState(null);
    let apiurl = ' http://localhost:8000/blogs'
    const [name,SetName] = useState('frank');

    const handleDelete = (id) =>{
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
      };

    useEffect(() =>{
        fetch(apiurl)
        .then(res => {
          return res.json();
        })
        .then(data =>{
            set.log(data);
        })
      },[]);
      
    const handleClickAgain = (name,e) => {
        console.log('hello,ninjas :'+ name,e)
    }
    return ( 
        <div className="home">
           <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
           <BlogList blogs={blogs.filter(blog => blog.author === 'frank')} 
           title="Frank's Blogs" handleDelete={handleDelete} />
           <p>{name}</p>
           <button onClick ={()=> SetName('carrie')}>change name</button>
        </div>
     );
}
 
export default Home;