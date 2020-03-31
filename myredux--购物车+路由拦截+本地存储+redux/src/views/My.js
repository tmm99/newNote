/*
 * @Description: In User Settings Edcc
 * @Author: your name
 * @Date: 2019-08-17 08:54:44
 * @LastEditTime: 2019-08-19 16:00:33
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import wrapWithLogin from '../utils/wrapWithLogin'
class My extends Component {
    render() {
        return (
            <div>
                我的页面
            </div>
        );
    }
}

export default wrapWithLogin(My);