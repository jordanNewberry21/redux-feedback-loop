//imports //imports JUST the component from react not ALL of react 
import React, { Component } from 'react';
import { connect } from 'react-redux';

//class
class Understanding extends Component{

    // local state
    state = {
        newFeedback: {}
    }

    nextPage = () => { // begin nextPage function
        // input validation
        if (this.state.newFeedback.understanding === undefined) {
            alert('Please fill in the required information!')
        } else {
            console.log('In nextPage button.....');
            this.props.dispatch( { type: 'INPUT_FORM', payload: this.state.newFeedback.understanding})
            this.props.history.push('/support'); // pushing to next view
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

    changePrev = () => {
        let lastFeedback = this.props.reduxState.formInputs.length-1;
        console.log('going back to the last page.....');
        this.props.dispatch( { type: 'CHANGE_LAST', payload: lastFeedback } );
        this.props.history.push('/feeling');
    }

    render(){
        return(
            <div>
                <h2>How well are you understanding the current content?</h2>
                <h4>Score 1-5</h4>
                <input onChange={(event) => this.handleChange(event, 'understanding')}
                    required type="number" max="5" label="understanding?" />
                <button onClick={this.nextPage}>NEXT</button>
                <br />
                <br />
                <br />
                <div>
                    <button onClick={this.changePrev}>Change Previous Score</button>
                </div>
            </div>
        ) //end return 
    } //end render
} //end class 

// bringing in reduxStore to access the feedback reducer
const putReduxStateOnProps = ( reduxState) => ({ 
    reduxState
  })

//export
export default connect(putReduxStateOnProps)(Understanding); 