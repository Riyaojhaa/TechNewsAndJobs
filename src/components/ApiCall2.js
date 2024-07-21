import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cards from './cards';

export default function ApiCall2() {

const [getTechNews , setgetTechNews] = useState([])

useEffect(() => {
    const getArticles =  async () => {
      try {
      const res = await axios.get("https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=d1d7bf2eed334c8489611608c47c7083");
      console.log(res)
      setgetTechNews(res.data.articles)
     } catch (error) {
       console.error('error in fetching the technologynews:', error)
     }
   };
   getArticles();
 },[]);

 return (
   <div className='row'>
     {
       getTechNews.map((tech , index) => (
         <Cards 
           key = {index}
           title = {tech.title}
           description = {tech.description}
           url = {tech.url}
           urlToImage = {tech.urlToImage}
         />
       ))
     }
   </div>
 )}
