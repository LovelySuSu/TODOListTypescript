export interface ITodoListState {
    inputValue: string,
    taskList: Array<string|number>
}
export interface ITodoListProps extends ITodoListState {
    handleInputChange(event:any):void,
    addItem():void,
    deleteItem(index:number):void
}