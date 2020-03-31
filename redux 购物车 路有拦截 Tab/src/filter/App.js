import React, { Component } from 'react'
import Nav from './component/Nav'
import Content from './component/Content'
import './style/style.css'

// import {Provider} from "react-redux"
// import store from './store/store'
export default class App extends Component {
    render() {
        return (
            <div className='app'>
                {/* <Provider store={store}> */}
                     <Nav/>
                     <Content/>
                {/* </Provider> */}
            </div>
        )
    }
}
