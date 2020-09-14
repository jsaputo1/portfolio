import { useState } from "react";

export default function useApplicationData() {

  const [state, setState] = useState({
    category: "default",
    sticky: false,
    // offSet: false
  });

  const setCategory = (category) => setState({ ...state, category });
  const setSticky = (sticky) => setState({ ...state, sticky });
  // const addOffset = (offSet) => setState({ ...state, offSet });

  return {
    state,
    setCategory,
    setSticky,
    // addOffset
  };

}