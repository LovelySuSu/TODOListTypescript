import {CHANGE_INPUT_VALUE, ADD_LIST_ITEM, DELETE_LIST_ITEM, CHANGE_BUTTON_ITEM, CHANGE_LIST_DATA,CHANGE_ITEM_STATE} from "./actionTypes";
import axios from 'axios';

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
});
export const changeItemState = (value:number) => ({
    type:CHANGE_ITEM_STATE,
    value:value
})

const changeListData = (value:Array<string|number>) => ({
    type:CHANGE_LIST_DATA,
    value:value
})

export const getInitData = ():any => {
    return async (dispatch: any) => {
        let res = await axios.get('/api/getList.json');
        let data = res.data;
        dispatch(changeListData(data.list))
    }
}