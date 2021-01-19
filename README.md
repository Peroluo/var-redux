# var-redux

```js
import { createStore, Provide, useConnect } from 'var-redux';

const store = createStore({
  theme: {
    foreground: '#000000',
    background: '#eeeeee',
  },
});

function App() {
  return (
    <Provide store={store}>
      <Toolbar />
    </Provide>
  );
}

function Toolbar() {
  const { state, dispatch } = useConnect();
  const { theme } = state;
  React.useEffect(() => {
    setTimeout(() => {
      dispatch('theme', {
        foreground: 'green',
        background: 'red',
      });
    }, 500);
  }, []);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}

export default App;
```
