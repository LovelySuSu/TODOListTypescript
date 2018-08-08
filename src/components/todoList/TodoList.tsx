import { Button,Input,List } from 'antd';
import 'antd/dist/antd.css';
import * as React from 'react';
import {connect} from 'react-redux';
import { Component,Fragment } from "react";
import { getInputChangeAction, addListItem, deleteListItem } from "../../store/actions";
import { ITodoListState,ITodoListProps } from "./types";
import store from '../../store'
import Header from '../header/Hearder';
import './TodoList.css'

interface IThisState {
    todoList: ITodoListState
}
class TodoList extends Component<ITodoListProps,ITodoListState> {
    public render() {
        let  { handleInputChange,addItem,deleteItem,inputValue,taskList} = this.props;
        return (
            <Fragment>
                <Header/>
                <div className="container">
                    <Input
                        value={inputValue}
                        placeholder='输入你的任务清单'
                        onChange={(event) => handleInputChange(event)}
                    />
                    <Button onClick={addItem}>添加任务</Button>
                </div>
                <List
                    className="list"
                    itemLayout="horizontal"
                    dataSource={taskList}
                    renderItem={
                        (item:string|number,index:number) => (
                            <List.Item className="list-item">
                                <span className="task-name">{item}</span>
                                <Button className="delete" onClick={()=> deleteItem(index)}>删除</Button>
                            </List.Item>)
                    }
                />
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
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);