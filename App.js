import * as React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import AppNavigator from './src/navigation/AppNavigation';
import { LogBox } from 'react-native';
import { rootReducer } from './store/rootReducer';

function App() {
  const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
  LogBox.ignoreLogs(['Sending']);
  // LogBox.ignoreLogs(['EventEmitter.removeListener']);

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

export default App;
