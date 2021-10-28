import { useCallback, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        [action.name]: action.value,
      };
    case "RESET_INPUT":
      return action.state;
    default:
      return state;
  }
}

function useInputs(initialForm) {
  const [state, dispatch] = useReducer(reducer, initialForm);

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({
      type: "CHANGE_INPUT",
      name,
      value,
    });
  }, []);

  const onReset = useCallback(
    () =>
      dispatch({
        type: "RESET_INPUT",
        state: initialForm,
      }),
    [initialForm]
  );

  return [state, onChange, onReset];
}

export default useInputs;
