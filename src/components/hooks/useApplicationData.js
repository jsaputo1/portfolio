import { useState } from "react";

export default function useApplicationData() {

  const [state, setState] = useState({
    category: "default",
    sticky: false
  });

  const setCategory = (category) => setState({ ...state, category });
  const setSticky = (sticky) => setState({ ...state, sticky });

  return {
    state,
    setCategory,
    setSticky
  };

}