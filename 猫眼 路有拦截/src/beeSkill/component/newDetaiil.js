import React, { Component } from 'react'

export default class NewDetaiil extends Component {
    state={
        newdata:[
            {
                name: "那你就回到家覅和金蝶积分积分",
                id: 0,
                img: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3517830552,2264671845&fm=26&gp=0.jpg"
            },
            {
                name: "那你就回到家覅和金蝶积分积分",
                id: 1,
                img: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3586924900,1699921762&fm=26&gp=0.jpg"
            },
            {
                name: "那你就回到家覅和金蝶积分积分",
                id: 2,
                img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1920211231,3220407244&fm=26&gp=0.jpg"
            }
        ]
    }
    render() {
        let {newdata}=this.state
        console.log(newdata[0].name)
        return (
            <div className="newDetail">
               <p>{newdata[0].name}</p>
                <p><img src={newdata[0].img}/></p>
            </div>
        )
    }
}
