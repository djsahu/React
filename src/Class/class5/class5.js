//Condition Render
import React from 'react';
import './class5.css'; 

import{
    Link
} from "react-router-dom";


class Class5 extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            arr: [],
            url: '',
            name: '',
            price: '',
        }
    }

    handleMyUrl=(event)=>{
        this.setState(
            {
                url: event.target.value
            }
            )
        console.log(event.target.value)
    }

    handleMyName=(event)=>{
        this.setState(
            {
                name: event.target.value
            }
            )
        console.log(event.target.value)
    }

    handleMyPrice=(event)=>{
        this.setState(
            {
                price: event.target.value
            }
            )
        console.log(event.target.value)
    }


    btnClick=()=>{
            this.state.arr.push({url:this.state.url,name:this.state.name,price:this.state.price});
            console.log(this.state.arr);
            this.setState({
                arr: this.state.arr,
                name: '',
                url: '',
                price: ''
            })
     }


render(){
    return(
        <div>
            <Link to='mcq'>Go to Quiz</Link>
            <h1>Photo Showing Application</h1>
            <from>
                Url of img:      <input type="text" value={this.state.url} onChange ={this.handleMyUrl}/><br/>
                Name of product: <input type="text" value={this.state.name} onChange ={this.handleMyName}/><br/>
                Price:           <input type="text" value={this.state.price} onChange ={this.handleMyPrice}/><br/>
            </from>
                <button
                style={{
                    backgroundColor: "#1FFAB2"
                }}
                onClick ={this.btnClick}
                >
                   Submit
                </button>
                
                {
                    this.state.arr.length === 0 ? <div>No details found enter details.</div>:
                    <div>
                        <div>
                                {this.state.arr.map((s)=>(
                                <div className='box'>
                                    <a href={s['url']}><img className='img' alt='product' src={s['url']}/></a><br/>
                                    {s['name']}<br />
                                    {s['price']}<br />
                                </div>
                                ))
                                }
                        </div>
                    </div>
                }
            </div>
    );
}
}

export default Class5;