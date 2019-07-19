import React from "react";
//import App from '../App';

class MyArray extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            num: 0,
            arr: []
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
            this.setState({num: ''})
     }


    render(){
        return(
            <div>
            <h1>Title</h1>
            <p>It's a <em>application</em></p>
            <input type="number" value={this.state.num} onChange= {this.handleMyInput} />
                <button
                style={{
                    backgroundColor: "#1FFAB2"
                }}
                onClick ={this.btnClick}
                >
                    Push
                </button>
                <p>Array is: {this.state.arr}</p>
            </div>
        )
    }

}
export default MyArray;