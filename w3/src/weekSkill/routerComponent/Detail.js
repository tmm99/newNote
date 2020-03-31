import React, { Component } from 'react'
import Axios from 'axios';
import '../data/detailMock'
export default class Detail extends Component {
    state = {
       detailData: []
    }
    render() {
        let { detailData } = this.state

        return (
            <div>
                {
                    detailData && detailData.map((item, index) => <dl key={index} className="dl"  >
                        详情
                        <dt className="dl">{item.name}</dt>
                        <dd>{item.cont}</dd>
                    </dl>)
                }
            </div>
        )
    }
    componentDidMount() {
        Axios.get('/delist').then((res) => {
            this.setState({ detailData: res.data })

        })
    }
}
