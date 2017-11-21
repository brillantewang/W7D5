import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import { signup, login, logout } from './actions/session_actions.js';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // console.log(Root);

  ReactDOM.render(<Root store={ store }/>, root);
});

window.login = login;
