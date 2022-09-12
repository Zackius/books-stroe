import React  from "react";
import axios from 'axios'
import './Add.css'
import { useState } from 'react'


const Add = () => {
    const [data, setData] = useState({
        books_name: "",
        book_image: "",
        author: "",
    });
    
    function handle(e) {
        const newdata = { ...data };
        newdata[e.target.id] = e.target.value;
        setData(newdata);
        console.log(newdata);
      }

    function submit(e) {
        e.preventDefault();
        axios
            .post("http://localhost:9292/books", {
                books_name: data.books_name,
                book_image: data.book_image,
                author: data.author,
            })
            .then((response) => {
                console.log(response.data);
            });
    }
        
        return (
            <div className="main">
      <div className="inputAdd">
            <form className="list" onSubmit={(e) =>submit (e)}>
                <label>
                    <h4>Book-Name</h4>
                    <input className='gap'  
                        onChange={(e) => handle(e)}
                        id="books_name"
                        value={data.books_name}
                        placeholder="books_name"
                        type="text"
                        name="books_name"
                    />
                </label>
                <label>
                    <h4> Image-Url</h4>
                    <input className='gap'  
                        onChange={(e) => handle(e)}
                        id="book_image"
                        value={data.book_image}
                        placeholder="book_image"
                        type="url"
                        name="book_image"
                    />
                </label>
                <label>
                    <h4> Author</h4>
                    <input className='gap'  
                        onChange={(e) => handle(e)}
                        id="author"
                        value={data.author}
                        placeholder="author"
                        type="text"
                        name="author"
                    />
                </label>
                <div className="btn">
                    <input   type="submit" />
                </div>
                </form>
            </div>
            </div>
        )
    }

export default Add