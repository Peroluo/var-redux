"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.useConnect = exports.Provide = exports.createStore = void 0;

var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var Context = (0, _react.createContext)(null);

var createStore = function createStore(initState) {
  if (initState === void 0) {
    initState = {};
  }

  var state = (0, _extends3["default"])({}, initState);

  var dispatch = function dispatch(key, value) {
    var _extends2;

    state = (0, _extends3["default"])({}, state, (_extends2 = {}, _extends2[key] = value, _extends2));
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

exports.createStore = createStore;

var Provide = function Provide(_ref) {
  var children = _ref.children,
      store = _ref.store;

  var _React$useState = _react["default"].useState(store.getState()),
      state = _React$useState[0],
      setState = _React$useState[1];

  var dispatch = function dispatch(key, value) {
    return setState(store.dispatch(key, value));
  };

  return /*#__PURE__*/_react["default"].createElement(Context.Provider, {
    value: {
      state: state,
      dispatch: dispatch
    }
  }, children);
};

exports.Provide = Provide;

var useConnect = function useConnect() {
  return (0, _react.useContext)(Context);
};

exports.useConnect = useConnect;