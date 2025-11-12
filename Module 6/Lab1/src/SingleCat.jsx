export function SingleCat({ name, latinName, removeCat }) {
  return (
    <>
      <h2>{name}</h2>
      <p>{latinName}</p>
      <button
        onClick={() => {
          removeCat(name);
        }}
      >
        Delete
      </button>
    </>
  );
}
