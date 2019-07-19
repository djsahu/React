import React from "react";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Icon } from '@material-ui/core';

import{
    Link,
    Route,
    BrowserRouter,
    Redirect
} from 'react-router-dom';

import Quiz from '../Proj/quiz';

export default class Class9 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            em: '',
            pass: '',
            message: '',
            dis: true,
            loggedin: false
        }
    }

    handleMyMail=(event)=>{
        this.setState(
            {
                em: event.target.value
            }
            )
        console.log(event.target.value)
    }

    handleMyPass=(event)=>{
        this.setState(
            {
                pass: event.target.value,
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
                    message: "Login Successful",
                    loggedin: true
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
            
            if(this.state.loggedin === true){
                return <Redirect to="mcq"/>
            }
            return(
                <div>
                    <Grid container justify='center'>
                        <Grid item xs={12} lg={4}>
                        <h1>Login</h1>
                        <p>It's a <em>application</em></p>
                        <Card>
                           <CardContent>
                        <from>
                        <TextField
                            label="Email"
                            value={this.state.em}
                            onChange={this.handleMyMail}
                            margin="normal"
                            variant="outlined"
                        />    
                        <TextField
                            label="Password"
                            type="password"
                            value={this.state.pass}
                            onChange={this.handleMyPass}
                            margin="normal"
                            variant="outlined"
                        /><br />

                    {this.state.em!='' & this.state.pass!='' ? <Button variant="contained"
                        onClick ={this.btnClick}
                        >
                         Login<Icon> send</Icon>
                        </Button>: <Button variant="contained" disabled={this.state.dis}
                        >
                            Login<Icon> send</Icon>
                        </Button>
                    }
                    <br/>{this.state.message}
                    </from>  
                    </CardContent>  
                    </Card> 
                    </Grid>
                    </Grid>

                </div>
            );
        }
        }