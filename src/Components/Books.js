import React, { useEffect, useState } from "react";

import axios from "axios";
import "./Books.css";
import EditForm from "./EditForm";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [editForm, setEditForm] = useState(false);
  const []


  function handleChanges(e, id) {
    if (e) {
      setEditForm(() => !editForm);
    }
    fetch(`http://localhost:9292/books/${e.target.id}`, {
      method: "PATCH",
      headers: {
        "Conteent-Type": "application/json",
      },
      body: JSON.stringify(),
    }).then((resp) => resp.json());
  }

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
            <div id="hide-form">
              {editForm? <EditForm id ={id} /> : <button className="button" onClick={handleChanges} id ={id}>Edit</button>}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Books;
