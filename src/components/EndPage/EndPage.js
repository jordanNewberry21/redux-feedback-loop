import React, { Component } from 'react';
import { connect } from 'react-redux';

//class
class EndPage extends Component{

    restart = () => {
        console.log('I need this button to clear the form information....');
        console.log('and take me back to the beginning....');
        this.props.dispatch({type: 'RESET'})
        this.props.history.push('/')
    }

    render(){
        return(
            <div>
                <h2>FeedBack!! FINISHED! WOO</h2>
                <div>
                    <h2>Thank You!</h2>
                    <button onClick={this.restart}>Leave New Feedback</button>
                </div>
            </div>
        ) //end return 
    } //end render
} //end class 

//export
export default connect()(EndPage); 