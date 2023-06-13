import React from 'react';
import Answer from './components/Answer/Answer';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Cart></Cart>
      <Answer></Answer>
      <ToastContainer />
    </div>
  );
};

export default App;