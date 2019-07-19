import React from 'react';
var count = 0;


class Quiz extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            arr: [],
            a: '',
            count1: 0,
            // ans={ans1: false,ans2: false,ans3: false}
            ans:[false,false,false],
            sbmt: false,
        }
    }

    btnClick=()=>{
            this.state.arr.push(this.state.a);
            console.log(this.state.a);
            this.setState({
                arr: this.state.arr,
            }.function=()=>{this.state.ans.map((s)=>(
                    s === 'true' ? <div>
                    {
                       count= count + 1 
                       
                    }
                    </div>:""
                    ))
                    console.log(count)
                    this.setState({
                        count1: count,
                        sbmt: true
                    })
            })
            
            
     }

    handleRadio=(index,event)=>{
        this.state.ans[index] = event.target.value;
        this.setState({
            ans: this.state.ans
        })
        console.log(event.target.value)
    }


render(){
    return(
        <div>
            <h1>Quiz</h1>
            <p>It's a C programming Quiz <em>application</em></p>
            <div>
            <from>
                <div className='questionblock'>
                 The default parameter passing mechanism is ?<br/>
                <input type='radio'value='true' name='q1' onChange={this.handleRadio.bind(this, 0)}/>Call by value<br/>
                <input type='radio'value='false' name='q1' onChange={this.handleRadio.bind(this, 0)}/>Call by reference<br/>
                <input type='radio'value='false' name='q1' onChange={this.handleRadio.bind(this, 0)}/>Call by value result<br/>
                <input type='radio'value='false' name='q1' onChange={this.handleRadio.bind(this, 0)}/>None of these<br/><br/>
                </div>
                <div className='questionblock'>
                 Use of functions ?<br/>
                <input type='radio'value='false' name='q2' onChange={this.handleRadio.bind(this, 1)}/>Helps to avoid repeating a set of statements many times<br/>
                <input type='radio'value='false' name='q2' onChange={this.handleRadio.bind(this, 1)}/>Enhance the logical clarity of the program<br/>
                <input type='radio'value='false' name='q2' onChange={this.handleRadio.bind(this, 1)}/>Helps to avoid repeated programming across program<br/>
                <input type='radio'value='true' name='q2' onChange={this.handleRadio.bind(this, 1)}/>All of the Above<br/><br/>
                </div>
                <div className='questionblock'>
                 The value of automatic variable that is declared but not initialized will be?<br/>
                <input type='radio'value='false' name='q3' onChange={this.handleRadio.bind(this, 2)}/>0<br/>
                <input type='radio'value='false' name='q3' onChange={this.handleRadio.bind(this, 2)}/>-1<br/>
                <input type='radio'value='true' name='q3' onChange={this.handleRadio.bind(this, 2)}/>Unpredictable<br/>
                <input type='radio'value='false' name='q3' onChange={this.handleRadio.bind(this, 2)}/>None of these<br/><br/>
                </div>
            </from>
            </div>

            {this.state.sbmt===true ? "": <button
                style={{
                    backgroundColor: "#1FFAB2"
                }}
                onClick ={this.btnClick}
                >
                    Submit
                </button>}
                
                
                <br/>Total Correct: {this.state.count1}
                
            </div>
    );
}
}

export default Quiz;