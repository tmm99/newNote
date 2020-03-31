/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-17 08:54:20
 * @LastEditTime: 2019-08-17 09:50:28
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import Item from '../components/Item'
import listData from '../data/list.json'
class Home extends Component {
    render() {
        return (
            <div className='list'>
                {
                    listData.map((item,index)=>{
                        return <Item key={index} item={item} />
                    })
                }
            </div>
        );
    }
}

export default Home;