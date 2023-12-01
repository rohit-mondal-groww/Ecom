import React from 'react';
import AppNavigation from './App/navigation/AppNavigation';
import {Provider} from 'react-redux';
import {store} from './App/redux/store';

const App = () => (
  <Provider store={store}>
    <AppNavigation />
  </Provider>
);

export default App;
