//Navigtion

import React from 'react';
import {
    BrowserRouter,
    Route
} from "react-router-dom";

import SignIn from "./signin";
import SignUp from "./signup";
import Chat from "./chatting";

class Router extends React.Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                {/* <Link to='mcq'>Go to Quiz</Link> */}
                
                <Route path="/signup" component={SignUp} />
                <Route exact path="/" component={SignIn} />
                <Route path='/chatroom' component={Chat} />
                </BrowserRouter>

            </div>

        );
    }
}

export default Router;
