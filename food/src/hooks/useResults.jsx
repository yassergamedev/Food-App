import React, { useEffect, useState } from "react";
import yelp from "../api/yelp";
export default ()=>{
    const [results, setResults] = useState([])

    const searchApi = async (value)=>{
     const response = await yelp.get('/search',{
      params:{
        term : value,
        limit : 50,
        location : 'san jose'
      }
     })
     
     setResults(response.data.businesses)
    }
  
    useEffect(()=>{
      searchApi('pasta')
    },[])
    return [searchApi, results]
}