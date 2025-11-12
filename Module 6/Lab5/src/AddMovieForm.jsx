import { useState } from "react";

function AddMovieForm({ onAddMovie }) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  // ++ add support for the synopsis field as well, here and below
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMovie({ title, year });
  };
  return (
    <div className="AddMovieForm componentBox">
      <form onSubmit={handleSubmit}>
        <label>
          Movie Title:
          <input
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Year Released:
          <input
            name="year"
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </label>
        <button>Add Movie</button>
      </form>
    </div>
  );
}
// add this in MoviesList component
const handleAddMovie = (newMovie) => {
  newMovie.id = currentMovies.length + 1; // unreliable but
  succinct;
  setCurrentMovies([...currentMovies, newMovie]);
};
<AddMovieForm onAddMovie={handleAddMovie} />;

export default AddMovieForm;
