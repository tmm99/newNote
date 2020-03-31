import React, { Component } from 'react'
// import '../img/2-11.jpg'
import axios from 'axios'
import '../mock/mock'
import { connect } from 'react-redux'
class Cart extends Component {
    state = {
        cdata: []
    }
    render() {
        let { receiveStore, allPrice} = this.props
        console.log(this.props.newDetail)

        
        return (
            <div>
                {
                    receiveStore && receiveStore.map((item, index) =>

                        <div className="cart" key={index}>
                            <dl>
                                <dd>{item.produce}</dd>
                                <dt><img src={item.img} onClick={this.jumpDetail.bind(this,index)}/></dt>
                                <dt>{item.detailMsg}</dt>
                                <dt>{item.price}</dt>
                               
                                <p>
                                    <button className="lose" onClick={this.handleClicklose.bind(this,index)}>-</button>
                                    <span className="num">{item.num}</span>
                                    <button className="add" onClick={this.handleClickadd.bind(this,index)}>+</button>
                                </p>
                            </dl>

                        </div>
                    )
                }
                <h3>总价：{allPrice}</h3>
            </div>
        )
    }
    componentDidMount() {
    this.props.getdata()
    }


    handleClicklose(ind) {
        
        this.props.lose(ind)
    }
    handleClickadd(addInd) {
        
        this.props.add(addInd)

    }
    jumpDetail(detailInd){
        this.props.jumpDetail(detailInd)
        // console.log("detailInd")
    }

}

export default connect((state) => {
    // console.log(state)
return{
    receiveStore: state.data,
    allPrice : state.allPrice,
    newDetail: state

}
}, (dispath) => {
    return{
        getdata(){
           axios.get('/list').then((res) => {
               dispath({type:"storeData",list:res.data.cartData})
            // console.log(res)
            // this.setState({ cdata: res.data.cartData })
        })
        },
        lose(ind){
            dispath({ type:"loseIndex",ind:ind})
        },
        add(addInd){
            dispath({type:"addIndex",addInd:addInd})
        },
        jumpDetail(detailInd){
            dispath({ type: 'detailIndex', detailInd: detailInd});
            this.history.push('/detail')
        }
    }
})(Cart)

