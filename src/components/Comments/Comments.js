import React, { Component } from 'react';
import { connect } from 'react-redux';

//class
class Comments extends Component{

    // local state
    state = {
        newFeedback: {}
    }

    // nextPage function
    nextPage = () => {
        // input validation
        if (this.state.newFeedback.comments === undefined) {
            alert('Please fill in the required information!')
        } else {
            console.log('In nextPage button.....');
            // dispatch to redux store
            this.props.dispatch( { type: 'INPUT_FORM', payload: this.state.newFeedback.comments})
            // push to the next view
            this.props.history.push('/review');
        }
    }

    handleChange = (event, inputType) => { // handle change function
        console.log(inputType, '=', event.target.value)
        this.setState({   // setting state of the target input value   
            newFeedback: { 
                ...this.state.newFeedback,
                [inputType]: event.target.value,
            }  
        })
        
    }

    render(){
        return(
            <div>
                <h2>Is there anything else you would like us to know this week?</h2>
                <input onChange={(event) => this.handleChange(event, 'comments')}
                    type="text" label="comments" />
                <button onClick={this.nextPage}>NEXT</button>
            </div>
        ) //end return 
    } //end render
} //end class 

//export
export default connect()(Comments); 