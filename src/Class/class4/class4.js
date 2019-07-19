//Condition Render
import React from 'react';
import './class4.css'; 

class Class4 extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            num: 0,
            arr: [],
            len: 0
        }
    }

    handleMyInput=(event)=>{
        this.setState(
            {
                num: parseInt(event.target.value)
            }
            )
        console.log(event.target.value)
    }

    btnClick=()=>{
            this.state.arr.push(this.state.num);
            console.log(this.state.arr);
            this.setState({
                arr: this.state.arr,
                num: '',
                len: this.state.arr.length
            })
     }


render(){
    return(
        <div>
            <h1>Title</h1>
            <p>It's a <em>application</em></p>
        <input type="number" value={this.state.num} onChange ={this.handleMyInput}/>
                <button
                style={{
                    backgroundColor: "#1FFAB2"
                }}
                onClick ={this.btnClick}
                >
                    Push
                </button>
                
                <ol start="0">
                {this.state.arr.map( (s)=>(
                       <li>
                       {s}
                       <button 
                       className='button'
                       onClick={
                           ()=>{
                               this.state.arr.splice(this.state.arr.indexOf(s),1)
                               console.log(this.state.arr)
                               this.setState({
                                   arr: this.state.arr,
                                   len: this.state.arr.length
                                })
                            }
                            }>x</button>
                       </li>
                ))}
                </ol>
                {this.state.arr === []?<div>Array is Empty</div>:
                <div>Length of array: {this.state.len}</div>}
            </div>
    );
}
}

export default Class4;