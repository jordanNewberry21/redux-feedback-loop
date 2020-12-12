import React, { Component } from 'react';
import { connect } from 'react-redux';

//class
class Support extends Component{

    // local state
    state = {
        newFeedback: {}
    }

    nextPage = () => {
        if (this.state.newFeedback.support === undefined) {
            alert('Please fill in the required information!')
        } else {
            console.log('In nextPage button.....');
            this.props.dispatch( { type: 'INPUT_FORM', payload: this.state.newFeedback.support})
            this.props.history.push('/comments');
        }
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
                <h2>How well are you feeling supported?</h2>
                <input onChange={(event) => this.handleChange(event, 'support')}
                    required type="number" max="5" label="supported?" />
                <button onClick={this.nextPage}>NEXT</button>
            </div>
        ) //end return 
    } //end render
} //end class 

//export
export default connect()(Support); 