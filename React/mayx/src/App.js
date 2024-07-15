import React, { useEffect, useState } from 'react'

export default function App() {
  const [news,setNews] = useState([])
  const [page,setPage] =  useState(1)
  const [search,setSearch] =  useState("cricket")
  useEffect(()=>{
      handleNews(page,search)
  },[page,search])
  const handleNews =async (page,search)=>{
    const data =await fetch(`https://newsapi.org/v2/everything?q=${search}&page=${page}&pageSize=5&from=2024-06-15&sortBy=publishedAt&apiKey=28a2c6b3aa1945c2afd8012e42fdac9e`)
    const result =await data.json()
    console.log(result)
    setNews(result.articles)
  }
  return (
    <div>
      <form>
        <input type="text"  
        value={search} onChange={(e)=>setSearch(e.target.value)}/>
        {/* <button onClick={handleNews} type="submit">Search</button> */}
      </form>
      {news && (
        <ul>{news.map((item)=>(
          <li>{item.title}</li>
        ))}</ul>
      )}
     
      <button onClick={()=>setPage(page-1)}>Prev</button>
      <button onClick={()=>setPage(1)}>1</button>
      <button onClick={()=>setPage(2)}>2</button>
      <button onClick={()=>setPage(3)}>3</button>
      <button onClick={()=>setPage(4)}>4</button>
      <button onClick={()=>setPage(5)}>5</button>
      <button onClick={()=>setPage(page+1)}>Next</button>
      {page}
    </div>
  )
}
