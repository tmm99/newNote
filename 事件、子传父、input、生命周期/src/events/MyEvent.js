import React, { Component } from 'react';

let style1={
    border:'1px solid red',
    width:'200px',
    height:'200px'
}
let style2={
    border:'1px solid blue',
    width:'100px',
    height:'100px'
}
class MyEvent extends Component {
    componentDidMount(){
        document.getElementById('box1').onclick=function(e){alert(`原生事件${e.currentTarget.id}`)}
        document.getElementById('box2').onclick=function(e){alert(`原生事件${e.currentTarget.id}`);e.stopPropagation()}
    }
    render() {
        return (
            <div id='box1' style={style1} onClick={(e)=>{alert(e.currentTarget.id)}}>
                box1
                <div id="box2" style={style2} onClick={(e)=>{alert(e.currentTarget.id);e.stopPropagation()}}>box2</div>
            </div>
        );
    }
}

export default MyEvent;