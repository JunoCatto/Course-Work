import { useEffect, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "FETCHING":
      return { ...state, loading: true, error: null };
    case "FETCHED":
      return { ...state, loading: false, data: action.payload };
    case "ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export function useData(url) {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });

  useEffect(() => {
    if (!url) return;

    let ignore = false;

    dispatch({ type: "FETCHING" });

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        if (!ignore) dispatch({ type: "FETCHED", payload: json });
      })
      .catch((err) => {
        if (!ignore) dispatch({ type: "ERROR", payload: err });
      });

    return () => {
      ignore = true;
    };
  }, [url]);

  return state; // <-- FIXED
}

export default useData;
