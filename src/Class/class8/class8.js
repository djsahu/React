//Navigtion

import React from 'react';
import {
    BrowserRouter,
    Link,
    Route
} from "react-router-dom";

import Class5 from "../class5/class5";
import Class9 from "../class9/class9";
import Quiz from "../Proj/quiz";

class Class8 extends React.Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                {/* <Link to='mcq'>Go to Quiz</Link> */}
                <Route exact path="/" component={Class9} />
                <Route path="/mcq" component={Quiz} />
                </BrowserRouter>
            </div>

        );
    }
}

export default Class8;
