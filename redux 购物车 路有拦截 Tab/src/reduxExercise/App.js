import React, { Component } from 'react'
import store from './Index';
import Input from "./Input"
import Cont from './Cont'
// import Index from './Index'
class App extends Component {
    render() {
        return (
            <div>
              <Input/>
              <Cont/>
            </div>
        )
    }
}
export default App
