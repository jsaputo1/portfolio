import { useState } from "react";

export default function useApplicationData() {

  const [state, setState] = useState({
    category: {},
  });

  const setCategory = (category) => setState({ ...state, category });

  return {
    state,
    setCategory
  };

}