import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
const NewsBox = (props) => {
  const [jsonNewsData,setJsonNewsData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      
        const newsDataResponse = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&pageSize=${props.pageSize}&page=${props.page}&apiKey=7a095a27d3bc4318b52512c52aceac94`);
       
        const jsonNewsData = await newsDataResponse.json();
        setJsonNewsData(jsonNewsData.articles);
        console.log(jsonNewsData);
        console.log(jsonNewsData.totalResults)
     
    };

    fetchData();
  }, [props.country,props.category,props.page,props.pageSize]);
  
  
  return (
    <div className='container my-3'>
      <div className='row'>
      {jsonNewsData.map((element) => {
        return <div  key={element.url} className='col-md-3'>
          <NewsItem title={element.title ? element.title.slice(0,45)+"...":""} description={element.description ? element.description.slice(0,85)+"..." : ""} imageUrl={element.urlToImage} newsUrl={element.url}></NewsItem>
        </div>
        })}
      </div>
      
      
    </div>
  )
}

export default NewsBox
