import React, { Component } from 'react';
import { connect } from 'react-redux';

//class
class Comments extends Component{

    state = {
        newFeedback: {}
    }

    nextPage = () => {
        if (this.state.newFeedback.comments === undefined) {
            alert('Please fill in the required information!')
        } else {
            console.log('In nextPage button.....');
            this.props.dispatch( { type: 'INPUT_FORM', payload: this.state.newFeedback.comments})
            this.props.history.push('/review');
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