import React, { Component } from 'react';
import { connect } from 'react-redux';

//class
class Feeling extends Component{

    // local state
    state = {
        newFeedback: {},
        
    }

    nextPage = () => {// start nextPage function
        // input validation
        if (this.state.newFeedback.feeling === undefined) {
            alert('Please fill in the required information!')
        } else {
            console.log('In nextPage button.....');
            this.props.dispatch( { type: 'INPUT_FORM', payload: this.state.newFeedback.feeling})
            // sending the data to the reduxStore like this puts it directly into the array as a number
            // It doesn't have a key name to access it but I can display it on the review page
            // using the index numbers.
            // I feel like this way is probably not ideal for some applications, 
            // but for this one I don't see how it could be a problem I guess.
            this.props.history.push('/understanding'); // next page
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
                <h2>How are you feeling today?</h2>
                <h4>Score 1-5</h4>
                <input onChange={(event) => this.handleChange(event, 'feeling')}
                    required type="number" max="5" label="Feeling?" />
                <button onClick={this.nextPage}>NEXT</button>
            </div>
        ) //end return 
    } //end render
} //end class 

//export
export default connect()(Feeling); 