//Condition Render
import React from 'react';
import './class4.css'; 

class Class4_1 extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: '',
            arr: [],
            age: '',
            a: ''
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

    handleMyAge=(event)=>{
        this.setState(
            {
                age: parseInt(event.target.value)
            }
            )
        console.log(event.target.value)
    }

    btnClick=()=>{
            this.state.arr.push({name:this.state.name,age:this.state.age,a:this.state.a});
            console.log(this.state.arr);
            this.setState({
                arr: this.state.arr,
                name: '',
                age: '',
                a: ''
            })
     }

    handleRadio=(event)=>{
        this.setState({
            a: event.target.value
        })
        console.log(event.target.value)
    }


render(){
    return(
        <div>
            <h1>Title</h1>
            <p>It's a <em>application</em></p>
            <from>
                Name: <input type="text" value={this.state.name} onChange ={this.handleMyName}/><br/>
                Age: <input type="number" value={this.state.age} onChange ={this.handleMyAge}/><br/>
                <input type='radio'value='true' name='sahi-aadmi' onChange={this.handleRadio}/>True
                <input type='radio'value='false' name='sahi-aadmi' onChange={this.handleRadio}/>False<br/>
            </from>
                <button
                style={{
                    backgroundColor: "#1FFAB2"
                }}
                onClick ={this.btnClick}
                >
                    Push
                </button>
                
                {
                    this.state.arr.length === 0 ? <div>No details found enter details.</div>:
                    <div>
                        <div className='box'>
                            <ol>
                                {this.state.arr.map((s)=>(
                                    s['a'] === 'true' ? 
                                <li>
                                    Name: {s['name']}<br />
                                    Age: {s['age']}<br />
                                </li>:""
                                ))
                                }
                            </ol>
                        </div>
                        <div className='box'>
                                <ol>
                                {this.state.arr.map((s)=>(
                                    s['a'] === 'false' ?
                                <li>
                                    Name: {s['name']}<br />
                                    Age: {s['age']}<br />
                                </li>:""
                                ))
                                }
                                </ol>
                        </div>
                    </div>
                }
            </div>
    );
}
}

export default Class4_1;