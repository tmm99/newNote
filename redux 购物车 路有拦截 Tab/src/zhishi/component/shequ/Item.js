/*
 * @Description: In User Settings Edit
 
 * @Author: your name
 * @LastEditTime: 2019-08-22 15:10:37
 * @LastEditors: Please set LastEditors22 14:38:25
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';

class Item extends Component {
    render() {
        console.log(this.props)
        let {info,title,user} =this.props
        return (
            <div className='item'>
                <p>
                    <img src={user.avator}/> <span>{user.name}</span><span>{user.time}</span> <button>关注</button>
                </p>
                <h5>{title}</h5>
                <p>{info}</p>
                <p>
                    <button>评论</button>
                    <button>点赞</button>
                    <button>收藏</button>
                </p>
            </div>
        );
    }
}

export default Item;