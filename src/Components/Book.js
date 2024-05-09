import React, { useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";
import postServices from "./postServices";

const Book = () => {
  const [books, setBooks] = useState([]);
  const [addSection, setAddSection] = useState(false);
  const [editingBook, setEditingBook] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    ISBN: "",
    published_at: "",
    copies: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = { ...formData };

    try {
      if (editingBook) {
        await postServices.updateBook({
          ...formDataToSend,
          _id: editingBook._id, 
        });
        setBooks(
          books.map((book) =>
            book._id === editingBook._id ? formDataToSend : book
          )
        );
        setEditingBook(null);

      } else {
        await postServices.create(formDataToSend);
       // setBooks([...books, formDataToSend]);
      }
      setFormData({
        title: "",
        author: "",
        ISBN: "",
        published_at: "",
        copies: "",
      });
      setAddSection(false);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await postServices.deleteBook(id);
      window.location.reload();
    } catch (error) {
      console.error("Error deleting book:", error.message);
    }
  };

  const handleUpdate = (book) => {
    setEditingBook(book);
    setFormData({ ...book });
    setAddSection(true);
  };
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const fetchedBooks = await postServices.getBooks();
        setBooks(fetchedBooks);
      } catch (error) {
        console.error("Error fetching books:", error.message);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div >
      <button
        onClick={() => {
          setAddSection(true)
          setEditingBook(null)
        }}
        className="mx-8 p-2 rounded-lg border border-gray-600 bg-blue-400 mt-4 items-end"
      >
        New Book
      </button>
      {addSection && (
        <section className="w-full flex flex-col justify-center items-center ">
          <form
            onSubmit={handleSubmit}
            className="w-2/4 border border-gray-700 p-4 flex flex-col rounded-lg bg-slate-400"
          >
            <IoIosCloseCircleOutline
              onClick={() => setAddSection(false)}
              className="w-12 h-12 p-2 mb-2  ml-auto"
            />
            <div className="flex flex-col border border-stone-600 rounded-lg p-4 w-full">
              <input
                className="px-4 py-2 my-2 border border-gray-300 rounded-lg  bg-gray-500 text-white "
                type="text"
                placeholder="Book Title"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />
              <input
                className="px-4 py-2 my-2 border border-gray-300 rounded-lg bg-gray-500 text-white"
                type="text"
                placeholder="Author"
                value={formData.author}
                onChange={(e) =>
                  setFormData({ ...formData, author: e.target.value })
                }
              />
              <input
                className="px-4 py-2 my-2 border border-gray-300 rounded-lg bg-gray-500 text-white "
                type="date"
                placeholder="Publish Date"
                name="published_at"
                value={formData.published_at}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    published_at: e.target.value,
                  })
                }
              />
              <input
                className="px-4 py-2 my-2 border border-gray-300 rounded-lg bg-gray-500 text-white "
                type="text"
                placeholder="ISBN"
                name="ISBN"
                value={formData.ISBN}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    ISBN: e.target.value,
                  })
                }
              />
              <input
                className="px-4 py-2 my-2 border border-gray-300 rounded-lg  bg-gray-500 text-white"
                type="number"
                placeholder="Copies"
                name="copies"
                value={formData.copies}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    copies: e.target.value,
                  })
                }
              />
            </div>
            <div className=" w-32 rounded-lg bg-blue-700 text-white p-2 m-2 items-start flex flex-row">
              <button type="submit">
                {editingBook ? "Update Book" : "Add Book"}
              </button>
            </div>
          </form>
        </section>
      )}
      <section className="grid grid-cols-2 gap-4 absolute top-80 left-4 right-4 -z-40">
        {books.map((book) => (
          <div key={book._id} className="border p-4 rounded">
            <h2 className="text-xl font-bold">{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>ISBN: {book.ISBN}</p>
            <p>Published At: {book.published_at}</p>
            <p>Copies: {book.copies}</p>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => handleDelete(book._id)}
                className="bg-red-500 text-white p-2 rounded mr-2"
              >
                Delete
              </button>
              <button
                onClick={() => handleUpdate(book)}
                className="bg-green-500 text-white p-2 rounded"
              >
                update
              </button>
            </div>
          </div>
        ))}
      </section>
      ;
    </div>
  );
};

export default Book;
