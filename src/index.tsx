import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css'
import store from './store/index'
import TodoList from './TodoList';

ReactDOM.render(
 <Provider store={store}>
     <TodoList />
 </Provider>,
  document.getElementById('root') as HTMLElement
);
