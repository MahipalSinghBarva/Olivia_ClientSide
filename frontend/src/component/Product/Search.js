import React, { Fragment, useState } from 'react'
import "./Search.css"


const Search = ({history}) => {
    const [Keyword, setKeyword] = useState("")
    
    const searchSubmitHandler=(e)=>{
        e.preventDefault()
        if (Keyword.trim()) {
            history.push(`/products/${Keyword}`)
        } else{
            history.push("/products")
        }
    }
  return (
    <Fragment>
        <form className='searchBox' onSubmit={searchSubmitHandler}>
            <input type='text'
            placeholder='Search for Products...' 
            onChange={(e)=>setKeyword(e.target.value)}
            />
            <input type='submit' value="Search"/>
        </form>
    </Fragment>
  )
}

export default Search
