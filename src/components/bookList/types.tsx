export interface IBookListStates {
    list: string[];
    currentPage:number;
    totalPage:number;
}
export interface IBookListProps extends IBookListStates {
    initBookList():void;
    loadMoreData(currentPage:number):void;
}

export interface IThisBookListState {
    bookList:IBookListStates
}