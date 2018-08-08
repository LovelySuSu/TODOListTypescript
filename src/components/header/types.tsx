export interface IHeaderStates {
    currentIndex: number,
    buttonList: string[]
}
export interface IHeaderProps extends IHeaderStates {
    changeButton(index:number):void
}