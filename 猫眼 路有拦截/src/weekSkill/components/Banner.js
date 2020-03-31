import React, { Component } from 'react'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
export default class Banner extends Component {
    state={
        ban:["one","two","three"],
        ind:0
    }
    render() {
        let {ban,ind}=this.state
        return (
            <div className="banner">
                {/* <div className="aboveNav">{ban[ind]}</div>
                <div className="banNav">
                    {
                        ban.map((item,index)=><li key={index} onClick={this.handleClick.bind(this,index)}>{item}</li>)
                    }
                </div> */}
                
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">one</div>
                            <div className="swiper-slide">two</div>
                            <div className="swiper-slide">three</div>                        
                        </div>
                        <div className="swiper-pagination"></div>
                         <div className="swiper-scrollbar"></div>                        
                    </div>
            </div>
        )
    }
    componentDidMount(){
        let mySwiper=new Swiper('.swiper-container',{
            loop:true,
            autoplay:true,

        },
       
        )
    }
    // handleClick(index){
    //     this.setState({ind:index})
    // }
}
