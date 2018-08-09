export interface ITodoListState {
    inputValue: string,
    taskList: ListItem[]
}
export interface ITodoListProps extends ITodoListState {
    handleInputChange(event:any):void,
    addItem():void,
    deleteItem(index:number):void,
    initList():void,
    changeState(index:number):void
}

export interface ListItem {
    name:string;
    isDone:boolean;
}