import React from 'react';
import './class6.css'; 


class Class6_1 extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            em: '',
            pass: '',
            message: '',
            dis: true,
        }
    }

    handleMyMail=(index,event)=>{
        this.state.sub[index] = true;
        this.setState(
            {
                sub: this.state.sub,
                em: event.target.value
            }
            )
        console.log(event.target.value)
    }

    handleMyPass=(index,event)=>{
        this.state.sub[index] = true;
        this.setState(
            {
                pass: event.target.value,
                sub: this.state.sub
            }
            )
        console.log(event.target.value)
    }

    btnClick=()=>{
            
            fetch("https://reqres.in/api/login",{
             method: "POST",
             headers: {
                 Accept: 'application/json',
                 'Content-Type': 'application/json',
             },
             body: JSON.stringify({
                 email: this.state.em,
                 password: this.state.pass
             }),
             
         })
         .then((response)=>response.json())
         .then((res_json)=>{
             console.log(res_json);
             if (res_json.token){
                this.setState({
                    message: "Login Successful"
                })
            }else {
               this.setState({
                   message: "Login Failed"
               })
           }
         })
         this.setState({
             em: '',
             pass: ''
         })
     }

     


        render(){
            return(
                <div>
                    <h1>Title</h1>
                    <p>It's a <em>application</em></p>
                    <div className="box">
                    <from>
                        Email:  <input type="email" value={this.state.em} onChange ={this.handleMyMail.bind(this, 0)}/><br/>
                        Password: <input type="password" value={this.state.pass} onChange ={this.handleMyPass.bind(this, 1)}/><br/><br/>
                    </from>
                    {this.state.em!='' & this.state.pass!='' ? <button
                        style={{
                            backgroundColor: "#1FFAB2"
                        }}
                        onClick ={this.btnClick}
                        >
                            Login
                        </button>: <button disabled={this.state.dis}
                        style={{
                            backgroundColor: "#1FFAB2"
                        }}
                        >
                            Login
                        </button>}
                         
                    <br/>{this.state.message}
                    
                    </div>
                </div>
            );
        }
        }
        
        export default Class6_1;