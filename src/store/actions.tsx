import { CHANGE_INPUT_VALUE,ADD_LIST_ITEM,DELETE_LIST_ITEM, CHANGE_BUTTON_ITEM } from "./actionTypes";

export const getInputChangeAction = (value:string|number) => ({
    type:CHANGE_INPUT_VALUE,
    value:value
});

export const addListItem = () => ({
    type:ADD_LIST_ITEM
});

export const deleteListItem = (value:number) => ({
    type:DELETE_LIST_ITEM,
    value:value
});

export const changeButtonItem = (value:number) => ({
    type:CHANGE_BUTTON_ITEM,
    value:value
})