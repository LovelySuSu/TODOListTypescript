import { INIT_BOOK_LIST,LOAD_MORE } from "../../store/actionTypes";
import { IBookListStates } from "./types";

interface actionType {
    type: string;
    [propName: string]: any;
}

const defaultState:IBookListStates = {
    list:[],
    currentPage: 1,
    totalPage: 1
}

export default function (state= defaultState, action:actionType) {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case INIT_BOOK_LIST:
            newState.list = action.list;
            newState.totalPage = action.totalPage;
            return newState;
        case LOAD_MORE:
            if (newState.currentPage < newState.totalPage ) {
                newState.currentPage++;
                newState.list = newState.list.concat(action.value);
            }
            return newState;
    }
    return state;
}
