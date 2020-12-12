//imports //imports JUST the component from react not ALL of react 
import React, { Component } from 'react';
import { connect } from 'react-redux';

//class
class Review extends Component{
    render(){
        return(
            <div>
                <h2>Hello from Review component </h2>
            </div>
        ) //end return 
    } //end render
} //end class 

//export
export default connect()(Review); 