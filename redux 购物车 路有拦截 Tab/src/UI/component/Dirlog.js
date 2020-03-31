import React, { Component } from 'react'
import { Modal, Button } from 'antd';

export default class Dirlog extends Component {
    state = { visible: false };
    render() {
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>
                    Open Modal
        </Button>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                   <input type="text"/>
                </Modal>
            </div>
        )
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
}
