import React, { useState } from 'react'
import './style.css'
import Card from './Card'
import axios from 'axios'

function Main() {
    const [search, setSearch] = useState("")
    const [bookData, setData] = useState([])
    const searchBook=(evt) => {
         if(evt.key === "Enter") {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyC28erZBbkxcqzG7_Qr8uYIBOzVs5NnJuo'+'&maxResults=40')
            .then(res => setData(res.data.items))
            .catch(err => console.log(err))
         }
    }
  return (
    // AIzaSyD5Z0YKFiCT-Wte3ZVT03hEKzSVqz6kfYU
    
    <div>
    <div className='header'>
        <div className="row1">
            <h1>A room without is like <br/> a body without a soul</h1>
        </div>
        <div className="row2">
            <h2>Find Your Book</h2>
            <div className="search">
                <input type="text" placeholder='Enter Your book name' value={search} onChange={e => setSearch(e.target.value)}
                onKeyPress={searchBook} />
                <button><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <img src="./images/bg2.png" alt="" />
        </div>
    </div>
        <div className="container">
            <Card book={bookData} />
 

        </div>
    </div>

    
  )
 
}

export default Main
