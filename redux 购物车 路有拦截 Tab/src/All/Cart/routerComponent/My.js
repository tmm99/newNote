import React, { Component } from 'react'
import withWrapLogin from './HoldUp'
 class My extends Component {
    render() {
        return (
            <div>
                My
            </div>
        )
    }
}
export default withWrapLogin(My)