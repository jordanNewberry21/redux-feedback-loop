//imports //imports JUST the component from react not ALL of react 
import React, { Component } from 'react';
import { connect } from 'react-redux';

//class
class Understanding extends Component{

    // local state
    state = {
        newFeedback: {}
    }

    nextPage = () => {
        console.log('In nextPage button.....');
        this.props.dispatch( { type: 'INPUT_FORM', payload: this.state.newFeedback})
        this.props.history.push('/support');
    }

    handleChange = (event, inputType) => { 
        console.log(inputType, '=', event.target.value)
        this.setState({     
            newFeedback: { 
                ...this.state.newFeedback,
                [inputType]: event.target.value,
            }  
        })
        
    }

    render(){
        return(
            <div>
                <h2>How well are you understanding the current content?</h2>
                <input onChange={(event) => this.handleChange(event, 'understanding')}
                    type="number" max="6" label="understanding?" />
                <button onClick={this.nextPage}>NEXT</button>
            </div>
        ) //end return 
    } //end render
} //end class 

//export
export default connect()(Understanding); 