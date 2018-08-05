import { Button,Input,List } from 'antd';
import 'antd/dist/antd.css';
import * as React from 'react';
import { Component,Fragment } from "react";

import Header from './components/Hearder';
import './TodoList.css'

interface ITodoListState {
    inputValue: string,
    taskList: Array<string|number>
}
class TodoList extends Component<any,ITodoListState> {
    constructor (props:any) {
        super(props);
        this.state = {
            inputValue: '',
            taskList: []
        }
        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.addItem = this.addItem.bind(this);
        // this.deleteItem = this.deleteItem.bind(this);
    }
    public render() {
        return (
            <Fragment>
                <Header/>
                <div className="container">
                    <Input
                        value={this.state.inputValue}
                        placeholder='输入你的任务清单'
                        onChange={this.handleChangeInput}
                    />
                    <Button onClick={this.addItem}>添加任务</Button>
                </div>
                <List
                    className="list"
                    itemLayout="horizontal"
                    dataSource={this.state.taskList}
                    renderItem={
                        (item:string|number,index:number) => (
                            <List.Item className="list-item">
                                <span className="task-name">{item}</span>
                                <Button className="delete" onClick={this.deleteItem.bind(this,index)}>删除</Button>
                            </List.Item>)
                    }
                />
            </Fragment>
        );
    }
    private handleChangeInput (e:any) {
        this.setState({
            inputValue: e.target.value
        });
    }
    private addItem () {
        this.setState({
            inputValue:'',
            taskList:[...this.state.taskList,this.state.inputValue]
        })
    }
    private deleteItem (index:number) {
        const newArr = this.state.taskList.slice();
        newArr.splice(index,1);
        this.setState({
            taskList:newArr
        })
    }
}

export default TodoList;