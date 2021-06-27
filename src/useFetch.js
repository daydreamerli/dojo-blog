import { useState, useEffect} from "react";

const useFetch = (apiurl) => {

    const[data,setData] = useState(null);
    const [isPending,setIsPending] = useState(true);
    const [error,setError] = useState(null);
    // const apiurl = ' http://localhost:8000/blogs';

    useEffect(() =>{
      
      const abortCont = new AbortController();

        setTimeout(() =>{
          fetch(apiurl,{signal:abortCont.signal})
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
            if(err.name === 'AbortError'){
              console.log('fetch abort')
            }else{
              setIsPending(false);
              setError(err.message);
            }
          })
        },300); 
        return () => abortCont.abort();
        },[apiurl]);
      
    return {data,isPending,error}
}
 
export default useFetch;