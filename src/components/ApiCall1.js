// import React, { useEffect, useState } from 'react'
// import Cards from './cards'
// import axios from 'axios'

// export default function ApiCall1() {
//   const [aricles , setarticles] = useState([])

//   useEffect(() => {
//     const getArticles = async () =>{
//       const res = await axios.get("https://newsapi.org/v2/everything?q=tesla&from=2024-06-17&sortBy=publishedAt&apiKey=d1d7bf2eed334c8489611608c47c7083")
//       console.log(res)
//       setarticles(res.data.articles)
//     }
//     getArticles()
//   },[]);

//   return (
//     <div>
//       {aricles.map(article => {
//         return (
//           <Cards
//             title = {article.title}
//             description={article.description}
//             url = {article.url}
//             urlToImage = {article.urlToImage}
//           />
//         )
//       })
//       }
//     </div>
//   )
// }

//SHOWS AN DATA IN THE HOME PAGE ALL LIVE NEWS


import React, { useEffect, useState } from 'react';
import Cards from './cards';
import axios from 'axios';

export default function ApiCall1() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const res = await axios.get(
        "https://newsapi.org/v2/everything?q=tesla&from=2024-06-20&sortBy=publishedAt&apiKey=c396b561e1c74f7d8b5e40e92bbbe0dc"
        );
        console.log(res.data.articles); 
        setArticles(res.data.articles);
      } catch (error) {
        console.error("Error fetching the articles:", error);
      }
    };
    getArticles();
  }, []);

  return (
    <div className="row">
      {articles.map((article, index) => (
        <Cards
          key={index}
          title={article.title}
          description={article.description}
          url={article.url}
          urlToImage={article.urlToImage}
        />
      ))}
    </div>
  );
}
