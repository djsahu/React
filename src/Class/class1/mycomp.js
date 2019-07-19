import React from "react";
import App from '../App';

var a = "This a javascript variable";
class MyComp extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            num1: 0,
            num2: 0
        }
    }
    handleMyInput=(event)=>{
        a='Hello';
        this.setState(
            {
                num1: event.target.value
            }
            )
        console.log(event.target.value)
    }

    btnClick=()=>{
       this.setState({
           num1: parseInt(this.state.num1)+1
       })
    }

    componentDidMount(){
        console.log("Called Automatically")
    }
        
    render(){
        return(
            <div>
                {a}
            <h1>Title</h1>
            <p>It's a <em>application</em></p>
            <input type="number" onChange={this.handleMyInput}/>
            <input type="number" onChange={
                (event) =>{
                    this.setState({
                        num2: event.target.value
                    })
                }}/>
                <button
                style={{
                    backgroundColor: "#1FFAB2"
                }}
                onClick ={this.btnClick}
                >
                    Click Me
                </button>
                <App val1={this.state.num1} val2 ={this.state.num2}/>
                </div>
        )
    }

}
export default MyComp;