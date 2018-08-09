import * as React from 'react';
import { Fragment } from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter,Route} from "react-router-dom";
import './index.css'
import store from './store/index'
import TodoList from './components/todoList/TodoList';
import Header from './components/header/Hearder';
import BookList from './components/bookList/BookList';

ReactDOM.render(
 <Provider store={store}>
     <BrowserRouter>
         <Fragment>
             <Header/>
             <Route path='/' exact component={TodoList}/>
             <Route path='/learn' exact component={BookList}/>
             {/*<TodoList />*/}
         </Fragment>
     </BrowserRouter>


 </Provider>,
  document.getElementById('root') as HTMLElement
);
