import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

const BlogDetails = () => {

    const {id} = useParams();
    const {data:blog,error,isPending} = useFetch('http://localhost:8000/blogs/'+id);
    
    return ( 
        <div className="blog-details">
            { isPending && <div>Loading blog details...</div>}
            {error &&<div>Could not fetch the data for the resource......</div>}
            {blog &&(
                <article>
                <h2>{blog.title}</h2>
                <p>Writen by {blog.author}</p>
                <div>{blog.body}</div>
                </article>   
            )}
        </div>
     );
}
 
export default BlogDetails;