import { SingleCat } from "./SingleCat";
import { useState } from "react";
import { AddCatForm } from "./AddCatForm.jsx";

const cats = [
  { name: "Cheetah", latinName: "Acinonyx jubatus" },
  { name: "Lion", latinName: "Panthera leo" },
  { name: "Tiger", latinName: "Panthera tigris" },
  { name: "Leopard", latinName: "Panthera pardus" },
  { name: "Snow Leopard", latinName: "Panthera uncia" },
  { name: "Jaguar", latinName: "Panthera onca" },
];

function SortButton({ setCurrentCats }) {
  const sortByName = () => {
    setCurrentCats((currentCats) =>
      [...currentCats].sort((a, b) => a.name.localeCompare(b.name))
    );
  };
  return <button onClick={sortByName}>Sort by Name</button>;
}

function ReverseButton({ setCurrentCats }) {
  const reverseCats = () => {
    setCurrentCats((currentCats) => [...currentCats].reverse());
  };
  return <button onClick={reverseCats}>Reverse List</button>;
}

function FilterButton({ setCurrentCats }) {
  const filterByName = () => {
    setCurrentCats((currentCats) =>
      [...currentCats].filter((cat) => cat.latinName.includes("Panthera"))
    );
  };
  return <button onClick={filterByName}>Filter by Name</button>;
}

function ResetButton({ setCurrentCats }) {
  const resetCats = () => {
    setCurrentCats(cats);
  };
  return <button onClick={resetCats}>Reset List</button>;
}

export function BigCats() {
  const [currentCats, setCurrentCats] = useState(cats);
  const addCat = (newCat) => {
    setCurrentCats([...currentCats, newCat]);
  };
  const removeCat = (catToRemove) => {
    setCurrentCats(currentCats.filter((cat) => cat.name !== catToRemove));
  };
  return (
    <>
      {currentCats.map((cat) => (
        <SingleCat
          key={cat.name}
          name={cat.name}
          latinName={cat.latinName}
          removeCat={removeCat}
          cat={cat}
        />
      ))}
      <SortButton setCurrentCats={setCurrentCats} />
      <ReverseButton setCurrentCats={setCurrentCats} />
      <FilterButton setCurrentCats={setCurrentCats} />
      <ResetButton setCurrentCats={setCurrentCats} />
      <AddCatForm addCat={addCat} />
    </>
  );
}
