import * as React from 'react';
import { Component } from 'react';
import logo from '../../statics/logo.png';
import './Header.css'
import {IHeaderStates,IHeaderProps} from "./types";
import {connect} from "react-redux";
import {changeButtonItem} from "../../store/actions";
import store from "../../store";
import {Link} from "react-router-dom";

interface IThisHeadState {
    header: IHeaderStates
}

class Header extends Component<IHeaderProps,IHeaderStates> {
    public render () {
        let { buttonList,currentIndex,changeButton }  = this.props;
        return (
            <div className="header">
                <img src={logo}  alt="" className="logo"/>
                <div className="title">丁丁的计划表</div>
                <div className="button-list">
                    {
                        buttonList.map((item,index)=>{
                            return (
                                    <Link to={index === 0 ? '/':'/learn'} key={index}>
                                        <button onClick={() => changeButton(index)}
                                                className={currentIndex === index ? 'current' : ''}
                                        >{item}</button>
                                    </Link>

                            );
                        })
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state:IThisHeadState)  =>{
    return {
        buttonList: state.header.buttonList,
        currentIndex: state.header.currentIndex
    }
}

const mapDispatchToProps = () => {
    return {
        changeButton (index:number) {
            const action = changeButtonItem(index);
            store.dispatch(action);
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);