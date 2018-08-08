import {combineReducers} from 'redux';

import TodoListReducer from '../components/todoList/TodoListReducer';
import HeaderReducer from '../components/header/HeaderReducer';

const rootReducer = combineReducers({
    header: HeaderReducer,
    todoList: TodoListReducer

});

export default rootReducer;