import { Button,Input} from 'antd';
import 'antd/dist/antd.css';
import * as React from 'react';
import {connect} from 'react-redux';
import { Component,Fragment } from "react";
import { getInputChangeAction, addListItem, deleteListItem,getInitData,changeItemState } from "../../store/actions";
import { ITodoListState,ITodoListProps } from "./types";
import store from '../../store'
import AllItem from './AllItem';
import './TodoList.css'

interface IThisState {
    todoList: ITodoListState
}
class TodoList extends Component<ITodoListProps,ITodoListState> {
    componentDidMount() {
       let { initList,taskList } = this.props;
       if(taskList.length === 0) initList();

    }
    public render() {
        let  { handleInputChange,addItem,deleteItem,changeState,inputValue,taskList} = this.props;
        return (
            <Fragment>
                <div className="container">
                    <Input
                        value={inputValue}
                        placeholder='输入你的任务清单'
                        onChange={(event) => handleInputChange(event)}
                    />
                    <Button onClick={addItem}>添加任务</Button>
                </div>
                <AllItem taskList={taskList} changeState={changeState} deleteItem={deleteItem}></AllItem>
            </Fragment>
        );
    }
}

const mapStateToProps = (state:IThisState) => {
    return {
        inputValue: state.todoList.inputValue,
        taskList:state.todoList.taskList
    }
}

const mapDispatchToProps = () => {
    return {
        handleInputChange (event:any) {
            const action = getInputChangeAction(event.target.value);
            store.dispatch(action);
        },
        addItem () {
            const action = addListItem();
            store.dispatch(action);
        },
        deleteItem (index:number) {
            const action = deleteListItem(index);
            store.dispatch(action);
        },
        initList() {
            const action = getInitData();
            store.dispatch(action);
        },
        changeState(index:number) {
            const action = changeItemState(index);
            store.dispatch(action);
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);