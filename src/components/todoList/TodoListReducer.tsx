import {ADD_LIST_ITEM,CHANGE_INPUT_VALUE,DELETE_LIST_ITEM,CHANGE_LIST_DATA,CHANGE_ITEM_STATE} from "../../store/actionTypes";
import { ITodoListState,ListItem } from "./types";

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
            let obj:ListItem= {
                name:newState.inputValue,
                isDone:false
            };
            newState.taskList.push(obj);
            newState.inputValue = '';
            return newState;
        case DELETE_LIST_ITEM:
            newState.taskList.splice(action.value,1);
            return newState;
        case CHANGE_LIST_DATA:
            newState.taskList = action.value;
            return newState;
        case CHANGE_ITEM_STATE:
            newState.taskList[action.value].isDone = !newState.taskList[action.value].isDone;
            return newState;

    }
    return state;
}
