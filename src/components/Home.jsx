import React , {useState} from 'react'
import NewsBox from './NewsBox'

const Home = () => {
  const [newsCategory,setNewsCategory] = useState('Business');
  const [currPage,setCurrPage] = useState(1);
  const handleCategory = (event)=>{
    setNewsCategory(event);
    console.log(event);
    setCurrPage(1);
  }
  const handleCurrPage = (pageNumber)=>{
    setCurrPage(pageNumber);
  }
  return (
    <div>
      <h2>NewsMonkey - Top Headlines</h2>
        <ul className='container d-flex flex-row justify-content-evenly'>
        <li className="d-flex border rounded-start p-2 my-4">Category</li>
        {['Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology'].map((category, index) => (
          <li key={index} className="d-flex rounded-pill border p-1 my-4 text-primary" onClick={() => handleCategory(category)}>{category}</li>
        ))}
</ul>

      <NewsBox category={newsCategory} country={'in'} pageSize={10} page={currPage}></NewsBox>

      <div className='pagination container justify-content-end my-3'>
      <button type="button" className="btn btn-secondary" onClick={()=>handleCurrPage(currPage-1)} disabled={currPage===1}>prev</button>
      <span className='mx-3 border'>{currPage}</span>
      <button type="button" className="btn btn-secondary" onClick={()=>handleCurrPage(currPage+1)}>next</button>
      </div>
    </div>
  )
}

export default Home
