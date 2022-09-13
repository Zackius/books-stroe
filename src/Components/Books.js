import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Books.css";

const Books = () => {
  const [books, setBooks] = useState([]);

  function handleDelete(id) {
    if (window.confirm("Are you sure you want to delete this book?")) {
      axios.delete(`http://localhost:9292/books/${id}`).then((response) => {
        console.log(response.data);
        getAllBooks();
      });
    }
  }

  useEffect(() => {
    getAllBooks();
  }, []);
  const getAllBooks = () => {
    axios
      .get("http://localhost:9292/books")
      .then((resp) => {
        const allBooks = resp.data;
        setBooks(allBooks);
      })
      .catch((err) => {
        console.log(err.resp);
      });
  };

  return (
    <section className="main">
      {books.map((book) => {
        return (
          <div key={book.id}>
            <img src={book.book_image} alt="book" />
            <h4> Book Name :{book.books_name}</h4>
            <h5> Author :{book.author} </h5>
            <button
              onClick={() => {
                handleDelete(book.id);
              }}
            >
              Delete
            </button>
            <button>Edit</button>
          </div>
        );
      })}
    </section>
  );
};

export default Books;
