class Post {
  async create(formData) {
    try {
      const url = "http://localhost:4000/api/book";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to create post: " + response.statusText);
      }

      return await response.json();
    } catch (error) {
      throw new Error("Failed to create post: " + error.message);
    }
  }

  async getBooks() {
    try {
      const url = "http://localhost:4000/api/book";
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch books");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching books:", error);
      throw new Error("Error fetching books: " + error.message);
    }
  }

  async deleteBook(id) {
    try {
      const response = await fetch(`http://localhost:4000/api/books/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete book");
      }
  //  fetchBooks();
      return await response.json(); // Return the response if needed
    } catch (error) {
      console.error("Error deleting book:", error);
      throw new Error("Error deleting book: " + error.message);
    }
  }

  async updateBook(book) {
    try {
      const response = await fetch(
        `http://localhost:4000/api/books/${book._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(book),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update book");
      }
     
      return await response.json(); // Return the response if needed
    } catch (error) {
      console.error("Error updating book:", error);
      throw new Error("Error updating book: " + error.message);
    }
  }
}

export default new Post();
