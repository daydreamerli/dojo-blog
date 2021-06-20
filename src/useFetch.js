import { useState, useEffect} from "react";

const useFetch = (apiurl) => {

    const[data,setData] = useState(null);
    const [isPending,setIsPending] = useState(true);
    const [error,setError] = useState(null);
    // const apiurl = ' http://localhost:8000/blogs';

    useEffect(() =>{
        setTimeout(() =>{
          fetch(apiurl)
          .then(res => {
            if(!res.ok){
                throw Error('Could not fetch the data for the resource');
            }
            return res.json();
          })
          .then(data =>{
              setData(data);
              setIsPending(false);
              setError(null);
          }).catch(err => {
            setError(err.message);
            setIsPending(false);
          })
        },500); 
        },[apiurl]);
        
    return {data,isPending,error}
}
 
export default useFetch;