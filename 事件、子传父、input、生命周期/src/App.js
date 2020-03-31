import React, {Component} from 'react';
import './App.css';
import axios from 'axios'
class Test  extends Component{
  state={title:this.props.title}
  // componentWillMount(){
  //   console.log('Test','componentWillMount')
  // }
  componentWillUnmount(){
    console.log('componentWillUnmount')
  }
  componentDidMount(){
    console.log('Test','componentDidMount')
  }
  // 组件应该被更新吗
  shouldComponentUpdate(nextProps,nextState){
   console.log(this.props.title,nextProps)
   if(this.props.title!==nextProps.title){
     return true
   }else{
     return false
   }
    
  }
  static getDerivedStateFromProps(props,state){  //有两个参数，props，state
    if(props.title!==state.title){
      return {title:props.title}
    }else{
      return null
    }
  }
  // componentWillReceiveProps(props,state){
  //   console.log('Test','componentWillReceiveProps')
  //   return null
  // }
 
   getSnapshotBeforeUpdate(){
    console.log('Test','getSnapshotBeforeUpdate')
    return true
  }
  componentDidUpdate(prevProps, prevState,snapshot){
    console.log('Test','componentDidUpdate',prevProps,prevState)

  }
  render(){
    console.log('Test','render')
    return <h1>look at me {this.state.title}</h1>
  }
}

class App extends Component{
  state={msg:'下雨天',flag:true,data:[],name:'1704E'}
  // constructor(){}
  clickFn=()=>{
    // console.log(111)
    this.setState({msg:'明天考试'})
  }
  componentWillMount(){
    console.log('componentWillMount',document.getElementById('demo'))
  }
  componentDidMount(){
    axios.get('/list').then(({data})=>{
      this.setState({data:data})
    })
    console.log('componentDidMount',document.getElementById('demo'))
  }
  componentWillUpdate(){
    console.log('componentWillUpdate')
  }
  componentDidUpdate(){
    console.log('componentDidUpdate')
  }
  
  render(){
    let {data,name}=this.state
    console.log('render',document.getElementById('demo'))
    return <div id='demo'>
    {this.state.msg}
    <button onClick={this.clickFn}>改变内容</button>
    {this.state.flag?<Test title={name}/>:null}
    <button onClick={()=>{this.setState({flag:false})}}>改变显隐</button>
{data.map((item,index)=><span key={index}>{item.name}</span>)}
  <button onClick={()=>{this.setState({name:'1704E优秀'})}}>修改title</button>
    </div>
  }
}

export default App;
