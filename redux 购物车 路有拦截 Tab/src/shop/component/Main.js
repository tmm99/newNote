import React, { Component } from 'react'
import Footer from '../component/Footer'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import routerConfig from '../router/routerConfig'
import RouterView from '../router/routerViews'

// import { Provider } from 'react-redux'
// import store from '../store/store'
export default class Main extends Component {
    render() {
        return (
            <div className="main">
                {/* <Provider store={store}> */}
              
                <BrowserRouter> 
                <div className="cont">
                  <RouterView routers={routerConfig}></RouterView>
                    </div>
                    <Footer/>
                
                </BrowserRouter>
                 {/* </Provider> */}
            </div>
        )
    }
}
