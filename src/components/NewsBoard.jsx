import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';


const NewsBoard = () => {
    const [articles, setArticles] = useState([]);

useEffect(() =>{
    let url =`https://newsapi.org/v2/top-headlines?category=sport&language=fr&apiKey=014a5dbb16f2454c95ebc84dc782ea19`;
    fetch(url).then(response => response.json()).then(data => setArticles(data.articles));
}, [])


  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-green-800 sm:text-4xl capitalize">Dernières actualités</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Profitez de nos dernières actualités sur le sport
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 ">
          {
            articles.map((news, index) =>{
                return <NewsItem key={index} title={news.title} desc={news.description} date={news.publishedAt} image={news.urlToImage} author={news.author} />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default NewsBoard