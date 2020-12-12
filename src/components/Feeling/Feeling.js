import React, { Component } from 'react';
import { connect } from 'react-redux';

//class
class Feeling extends Component{
    render(){
        return(
            <div>
                <h2>Hello from Feeling component </h2>
            </div>
        ) //end return 
    } //end render
} //end class 

//export
export default connect()(Feeling); 