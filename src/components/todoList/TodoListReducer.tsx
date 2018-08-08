import {ADD_LIST_ITEM,CHANGE_INPUT_VALUE,DELETE_LIST_ITEM} from "../../store/actionTypes";
import { ITodoListState } from "./types";

interface actionType {
    type: string;
    [propName: string]: any;
}

const defaultState:ITodoListState = {
    inputValue:'',
    taskList: []
}

export default function (state= defaultState, action:actionType) {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case CHANGE_INPUT_VALUE :
            newState.inputValue = action.value;
            return newState;
        case ADD_LIST_ITEM :
            newState.taskList.push(newState.inputValue);
            newState.inputValue = '';
            return newState;
        case DELETE_LIST_ITEM:
            newState.taskList.splice(action.value,1);
            return newState;
    }
    return state;
}
