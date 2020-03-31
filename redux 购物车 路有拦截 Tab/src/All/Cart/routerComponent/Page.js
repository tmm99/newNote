import React, { Component } from 'react'
import axios from 'axios'
import '../data/mock'
import { connect } from 'react-redux'
class Page extends Component {
    state = {
        dataList: [],
        flag: false,
        ind: 0,
        collectArr: [],
        collectArray: ''
    }
    render() {
        let { dataList, flag, ind, collectArr, collectArray } = this.state
        let { getData, allPrice } = this.props
        // console.log(getData)
        return (
            <div>
                {
                    getData && getData.map((item, index) => <div key={index} className="box" >
                        <p>{item.tit}</p>
                        <p onClick={this.handleClick.bind(this, index)}>{item.cont}</p>
                        <button onClick={this.clickLose.bind(this, index)}>-</button>
                        <span>{item.num}</span>
                        <button onClick={this.clickAdd.bind(this, index)}>+</button>
                        <p>￥：{item.price}</p>
                        <p onClick={this.handleStore.bind(this, index)} className={ind == index && flag ? "storeStyle" : null}>{ind == index && flag ? "已收藏" : "收藏"}</p>
                    </div>)
                }
                <p>总价：{allPrice}</p>
            </div>
        )
    }
    componentDidMount() {
        this.props.setData()
        // axios.get('/list').then((res)=>{
        //     //  console.log(res.data)
        //     this.setState({ dataList:res.data})
        // })
    }
    handleClick(id) {
        this.props.history.push('/detail/' + id)
    }
    clickAdd(index) {
        this.props.add(index)
        // console.log(index)
    }
    clickLose(index) {
        this.props.lose(index)
    }
    handleStore(index) {
        console.log(index)
        let { flag, ind, collectArr, collectArray } = this.state

        flag = !flag
        this.setState({ ind: index })
        this.setState({ flag })
        let { getData } = this.props
        if (flag == true) {
            collectArray = getData.find(item => item.id == index)
            collectArr.push(collectArray)
            this.setState({ collectArr })
            console.log(collectArr && collectArr)
            localStorage.setItem("allData", JSON.stringify(collectArr))
            console.log(JSON.parse(localStorage.getItem("allData")))
        } else {
            //  collectArr.push()
        }

    }
}




export default connect((state) => {
    return {
        getData: state.list,
        allPrice: state.allPrice
    }
}, (dispatch) => {
    return {

        setData() {
            axios.get('/list').then((res) => {
                dispatch({ type: "SETDATA", dataList: res.data })
                // this.setState({ dataList: res.data })
                // console.log(res.data)
            })
        },

        add(addId) {
            dispatch({ type: "ADD", addId: addId })
        },
        lose(loseId) {
            dispatch({ type: "LOSE", loseId: loseId })
        },

        collect(collectInd) {
            dispatch({ type: "COLLECT", collectInd: collectInd })
        }
    }
})(Page)