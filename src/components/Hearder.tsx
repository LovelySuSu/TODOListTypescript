import * as React from 'react';
import { Component } from 'react';
import logo from '../statics/logo.png';
import './Header.css'

interface IHeaderStates {
    currentList: boolean[],
    buttonList: string[]
}

class Header extends Component<any,IHeaderStates> {
    constructor (props:any) {
        super(props);
        this.state = {
            buttonList:['全部','已完成','未完成'],
            currentList: [true,false,false]
        }
    }
    public render () {
        return (
            <div className="header">
                <img src={logo}  alt="" className="logo"/>
                <div className="title">丁丁的计划表</div>
                <div className="button-list">
                    {
                        this.state.buttonList.map((item,index)=>{
                            return (
                                <button onClick={this.changeButton.bind(this,index)}
                                        key={index}
                                        className={this.state.currentList[index] ? 'current' : ''}
                                >
                                    {item}
                                </button>
                            );
                        })
                    }
                </div>
            </div>
        )
    }
    private changeButton (index:number) {
        const newArr = new Array(this.state.buttonList.length).fill(false);
        newArr[index] = true;
        this.setState({
            currentList: newArr
        })
    }
}
export default Header;