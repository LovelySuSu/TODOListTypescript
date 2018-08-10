import * as React from 'react';
import {Component, Fragment} from 'react';
import {connect} from "react-redux";
import { List,Button } from 'antd';
import 'antd/dist/antd.css';
import './BookList.css'
import {IBookListProps, IBookListStates, IThisBookListState} from "./types";
import {getBookListData,getMoreData} from "../../store/actions";
import store from "../../store";

class BookList extends Component<IBookListProps,IBookListStates>{
    componentDidMount(){
        let {initBookList,list} = this.props;
        if (list.length == 0) initBookList();
}
    render() {
        let {list,loadMoreData,currentPage,totalPage} = this.props;
        return (
            <Fragment>
                <List
                    className="list"
                    itemLayout="horizontal"
                    dataSource={list}
                    renderItem={
                        (item:any) => (
                            <List.Item className="list-item">{item}</List.Item>)
                    }
                />
                <Button className="my-button" onClick={()=>loadMoreData(currentPage)}>{currentPage === totalPage? '已无更多数据':'加载更多'}</Button>
            </Fragment>

        )
    }
}

const mapStateToProps = (state:IThisBookListState)  =>{
    return {
        list: state.bookList.list,
        currentPage: state.bookList.currentPage,
        totalPage:state.bookList.totalPage
    }
}

const mapDispatchToProps = () => {
    return {
        initBookList () {
            const action = getBookListData();
            store.dispatch(action);
        },
        loadMoreData (currentPage:number) {
            const action = getMoreData(currentPage);
            store.dispatch(action);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BookList);