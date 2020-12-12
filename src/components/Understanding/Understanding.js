//imports //imports JUST the component from react not ALL of react 
import React, { Component } from 'react';
import { connect } from 'react-redux';

//class
class Understanding extends Component{

    nextPage = () => {
        console.log('In nextPage button.....')
        this.props.history.push('/support')
    }

    render(){
        return(
            <div>
                <h2>How well are you understanding the current content?</h2>
                <input type="number" max="6" label="understanding?" />
                <button onClick={this.nextPage}>NEXT</button>
            </div>
        ) //end return 
    } //end render
} //end class 

//export
export default connect()(Understanding); 