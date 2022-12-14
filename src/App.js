import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  nonfiction: [
    {
      name: "The 12 rules of life",
      rating: "4/5"
    },
    {
      name: "Psychology of money",
      rating: "3.5/5"
    },
    {
      name: "Sapiens: A Brief History of Humankind",
      rating: "4.5/5"
    }
  ],

  fiction: [
    { name: "Shiva Trilogy", rating: "5/5" },
    { name: "Harry Potter and the Sorcerer's Stone", rating: "4.5/5" },
    { name: "Sophie's World", rating: "4.5/5" }
  ],

 
  autobiography: [
    {
      name: "My Experiments with Truth",
      rating: "4/5"
    },
    {
      name: "Born a Crime",
      rating: "4/5"
    },
    {
      name: "Long Walk to Freedom",
      rating: "4/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Fiction");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 📚 Book Recommendations </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite books. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
