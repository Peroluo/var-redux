import _extends from "@babel/runtime/helpers/esm/extends";
import React, { useContext, createContext } from 'react';
var Context = createContext(null);
export var createStore = function createStore(initState) {
  if (initState === void 0) {
    initState = {};
  }

  var state = _extends({}, initState);

  var dispatch = function dispatch(key, value) {
    var _extends2;

    state = _extends({}, state, (_extends2 = {}, _extends2[key] = value, _extends2));
    return state;
  };

  var getState = function getState() {
    return state;
  };

  return {
    state: state,
    dispatch: dispatch,
    getState: getState
  };
};
export var Provide = function Provide(_ref) {
  var children = _ref.children,
      store = _ref.store;

  var _React$useState = React.useState(store.getState()),
      state = _React$useState[0],
      setState = _React$useState[1];

  var dispatch = function dispatch(key, value) {
    return setState(store.dispatch(key, value));
  };

  return /*#__PURE__*/React.createElement(Context.Provider, {
    value: {
      state: state,
      dispatch: dispatch
    }
  }, children);
};
export var useConnect = function useConnect() {
  return useContext(Context);
};