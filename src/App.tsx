import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import { Home } from './pages';

function App() {
  /*Axios.get('https://localhost:8000/api/sheets').then((response: AxiosResponse) => {
    console.log(response.data);
  });*/

  return (
    <Home />
  );
}

export default App;
