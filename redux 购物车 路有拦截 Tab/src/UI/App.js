import React, { Component } from 'react'
import Dirlog from './component/Dirlog'
import 'antd/dist/antd.css'
import Calenda from './component/Calenda'

export default class App extends Component {
    render() {
        return (
            <div>
               {/* <Dirlog/> */}
                <Calenda/>
            </div>
        )
    }
}

