import "./App.css";
import Navbar from "./Components/Navbar";
import Books from "./Components/Books";
import Add from "./Components/Add";
import { Routes, Route } from "react-router-dom";

function App() {
  // const [books, setBooks] = useState([])

  // useEffect(() => {
  //   const fetchBooks = async () => {
  //     const { data } = await bookApi.get("/books");
  //     setBooks(data)
  //   }
  //   fetchBooks()
  // }, [])
  // const addBook = async (newBooks) => {
  //   const { data } = await bookApi.post("/books", newBooks);
  //   setBooks((prevBooks) => {
  //     return [...prevBooks, data]
  //   })
  // }

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="books" element={<Books />} />
        <Route path="add" element={<Add />} />
      </Routes>
      <h3>Welcome to Soma</h3>
    </div>
  );
}

export default App;
