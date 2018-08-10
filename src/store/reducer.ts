import {combineReducers} from 'redux';

import TodoListReducer from '../components/todoList/TodoListReducer';
import HeaderReducer from '../components/header/HeaderReducer';
import BookListReducer from '../components/bookList/BookListReducer';

const rootReducer = combineReducers({
    header: HeaderReducer,
    todoList: TodoListReducer,
    bookList:BookListReducer

});

export default rootReducer;