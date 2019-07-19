import React from "react";
//import App from '../App';

class Class3_1 extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            num: 0,
            arr: [],
            name:'',
            age: 0
        }
    }

    handleMyName=(event)=>{
        this.setState(
            {
                name: event.target.value
            }
            )
        console.log(event.target.value)
    }

    handleMyRoll=(event)=>{
        this.setState(
            {
                age: parseInt(event.target.value)
            }
            )
        console.log(event.target.value)
    }

    btnClick=()=>{
        this.state.arr.push({name:this.state.name,age:this.state.age})
        this.setState(
            {
            arr : this.state.arr
            }
        )
        console.log(this.state.arr)
     }


    render(){
        return(
            <div>
            <h1>Title</h1>
            <p>It's a <em>application</em></p>
            Name: <input type="text" placeholder='Enter your Name' value={this.state.name} onChange ={this.handleMyName}/><br />
            Age: <input type="number" placeholder='Enter your Age' value={this.state.age} onChange={this.handleMyRoll}/><br />
            
                <button
                style={{
                    backgroundColor: "#1FFAB2"
                }}
                onClick ={this.btnClick}
                >
                    Submit
                </button>
                
            <ol>
            {this.state.arr.map((s)=>(
                <li>
                Name: {s['name']}<br />
                Age: {s['age']}<br />
                </li>
            ))
            }
            </ol>
            </div>
        
        );
    }          
}
export default Class3_1;