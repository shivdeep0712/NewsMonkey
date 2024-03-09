import React from 'react'
import { Link } from 'react-router-dom';
const NewsItem = (props) => {
  const { title, description, imageUrl, newsUrl } = props;
  return (
    <div className='my-3'>
  <div className="card " style={{width: '18rem'}}>
  <img src={imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <Link to={newsUrl} className="btn btn-primary" target='_blank'>Know more..</Link>
  </div>
</div>
    </div>
  )
}

export default NewsItem
