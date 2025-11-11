import { useState } from "react";

const movies = [
  {
    title: "The Shawshank Redemption",
    year: 1994,
    synopsis: "Two imprisoned men find redemption.",
  },
  {
    title: "The Dark Knight",
    year: 2008,
    synopsis: "Batman fights the menace known as the Joker.",
  },
  {
    title: "Interstellar",
    year: 2014,
    synopsis: "Explorers travel through a wormhole in space.",
  },
];

function Movie({ title, year, synopsis }) {
  return (
    <li>
      <h3>{title}</h3> <span>({year})</span>
      <div>{synopsis}</div>
    </li>
  );
}

// const handleSortByYear = () => {
//   let sortedMovies = [...currentMovies];
//   sortedMovies.sort((a, b) => a.year - b.year);
//   setCurrentMovies(sortedMovies);
// }

// const handleSortByTitle = () => {
//     let sortedMovies = [...currentMovies];
//     sortedMovies.sort((a,b) => a.title.localeCompare(b.title));
//     setCurrentMovies(sortedMovies);
//   }

  function SortButton({setCurrentMovies}) {

  const handleReverseMovies = () => {
    setCurrentMovies((currentMovies) => {
    let newMovies = [...currentMovies];
    newMovies.reverse(); 
    return newMovies;
  });
}
  return <button onClick={handleReverseMovies}>Reverse List</button>

  }

export function MoviesList() {
  const [currentMovies, setCurrentMovies] = useState(movies);

  const movieItems = currentMovies.map((movie) => (
    <Movie
      key={movie.title}
      title={movie.title}
      year={movie.year}
      synopsis={movie.synopsis}
    />
  ));

  return (
    <div className="MoviesList">
      <ul>{movieItems}</ul>
      {/* <button onClick={handleSortByYear}>Sort by Year</button>
      <button onClick={handleSortByTitle}>Sort by Title</button> */}
      <SortButton setCurrentMovies={setCurrentMovies} />
    </div>
  );
}

// ++ Try adding buttons to sort by year and by title
// ++ Try extracting a SortButton component to replace the above