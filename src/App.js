import "./App.css";
import Navbar from "./Components/Navbar";
import Books from "./Components/Books";
import Add from "./Components/Add";

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
      <Books />
      <Add />
    </div>
  );
}

export default App;
