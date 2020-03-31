/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-22 11:28:32
 * @LastEditTime: 2019-08-22 15:14:54
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import axios from 'axios'
import TuiJian from '../../component/shequ/TuiJian'
import SqList from '../../component/shequ/SqList'

class SheQu extends Component {
    state = { list: [],currentIndex:0 }
    render() {
        let {list,currentIndex}=this.state
        return (
            <div className='tuijian'>
                <TuiJian {...this.state} tabFn={this.tabFn}/>
                <SqList list={list.length&&list[currentIndex].list}/>
                <button onClick={this.toPublish}>发布评论</button>
            </div>
        );
    }
    toPublish=()=>{
        this.props.history.push('/publish')
    }
    tabFn=(index)=>{
        this.setState({currentIndex:index})
    }
    componentDidMount() {
        axios.get('/sq').then(({ data }) => {
            this.setState({ list: data })
        })
    }
}

export default SheQu;