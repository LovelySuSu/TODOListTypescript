import { Button,List,Checkbox } from 'antd';
import 'antd/dist/antd.css';
import * as React from 'react';
import {ListItem} from "./types";


const AllItem  = (props:any) => (
    <List
        className="list"
        itemLayout="horizontal"
        dataSource={props.taskList}
        renderItem={
            (item:ListItem,index:number) => (
                <List.Item className="list-item">
                    <Checkbox className="task-name" checked={item.isDone} onChange={() => props.changeState(index)}>{item.name}</Checkbox>
                    <Button className="delete" onClick={()=> props.deleteItem(index)}>删除</Button>
                </List.Item>)
        }
    />
)

export default AllItem;