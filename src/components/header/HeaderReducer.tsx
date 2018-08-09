import {CHANGE_BUTTON_ITEM} from "../../store/actionTypes";
import { IHeaderStates } from "./types";

interface actionType {
    type: string;
    [propName: string]: any;
}

const defaultState:IHeaderStates = {
    buttonList:['计划表','学习路径'],
    currentIndex: 0
}

export default function (state= defaultState, action:actionType) {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case CHANGE_BUTTON_ITEM :
            newState.currentIndex = action.value;return newState;
    }
    return state;
}
