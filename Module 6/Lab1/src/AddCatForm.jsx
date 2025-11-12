import { useState } from "react";

export function AddCatForm({ addCat }) {
  const [newCat, setNewCat] = useState({ name: "", latinName: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    addCat(newCat);
    setNewCat({ name: "", latinName: "" });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={newCat.name}
        onChange={(event) => setNewCat({ ...newCat, name: event.target.value })}
      />
      <label htmlFor="latinName">Latin Name:</label>
      <input
        type="text"
        id="latinName"
        name="latinName"
        value={newCat.latinName}
        onChange={(event) =>
          setNewCat({ ...newCat, latinName: event.target.value })
        }
      />
      <input type="submit" value="Add Cat" />
    </form>
  );
}
export default AddCatForm;
