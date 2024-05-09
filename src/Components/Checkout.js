import React, { useState } from "react";

const Checkout = () => {
  const [formData, setFormData] = useState({
    userId: "",
    bookId: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      }

      setMessage(data.message);
      setFormData({
        userId: "",
        bookId: "",
      });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section className="w-full flex flex-col justify-center items-center">
      <h2>Checkout</h2>
      <form
        onSubmit={handleSubmit}
        className="w-1/3 border border-green-400 rounded-lg mt-8 bg-gray-600 p-8 text-white"
      >
        <div>
          <label htmlFor="userId">User ID:</label>
          <input
            className="p-2 my-2 w-full rounded bg-gray-800"
            type="text"
            id="userId"
            required
            value={formData.userId}
            onChange={(e) =>
              setFormData({ ...formData, userId: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="bookId">Book ID:</label>
          <input
            type="text"
            id="bookId"
            required
            className="p-2 my-2 w-full rounded bg-gray-800"
            value={formData.bookId}
            onChange={(e) =>
              setFormData({ ...formData, bookId: e.target.value })
            }
          />
        </div>
        <button
          type="submit"
          className="border border-gray-400 p-2 my-2 rounded-lg"
        >
          Checkout
        </button>
      </form>
      {message && <p className="font-bold">{message}</p>}
      {error && <p>{error}</p>}
    </section>
  );
};

export default Checkout;
