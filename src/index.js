import React, { useContext, createContext } from 'react';

const Context = createContext(null);

export const createStore = (initState = {}) => {
  let state = { ...initState };
  const dispatch = (key, value) => {
    state = {
      ...state,
      [key]: value,
    };
    return state;
  };

  const getState = () => state;

  return {
    state,
    dispatch,
    getState,
  };
};

export const Provide = ({ children, store }) => {
  const [state, setState] = React.useState(store.getState());

  const dispatch = (key, value) => setState(store.dispatch(key, value));

  return (
    <Context.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useConnect = () => useContext(Context);
