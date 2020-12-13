import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';

//class
class Review extends Component{

    //local state to store the feedback before POST
    state = {
        feeling: this.props.reduxState.formInputs[0],
        understanding: this.props.reduxState.formInputs[1],
        support: this.props.reduxState.formInputs[2],
        comments: this.props.reduxState.formInputs[3]
    }

    submit = () => { // axios POST request
        axios.post('/feedback', this.state).then((response) => {
            console.log('back from POST.......', response.data);
        }).catch((error) => {
            console.log('error with POST.......', error);
            alert('something wrong with the POST')
        })
        this.props.history.push('/end-page') // pushing to the final page view
    }

    changePrev = () => {
        let lastFeedback = this.props.reduxState.formInputs.length-1;
        console.log('going back to the last page.....');
        this.props.dispatch( { type: 'CHANGE_LAST', payload: lastFeedback } );
        this.props.history.push('/comments');
    }

    render(){ // displaying user feedback results
        return(
            <div>
                <div>
                    <h3>Feeling: {this.props.reduxState.formInputs[0]}</h3>
                </div>
                <div>
                    <h3>Understanding: {this.props.reduxState.formInputs[1]}</h3>
                </div>
                <div>
                    <h3>Support: {this.props.reduxState.formInputs[2]}</h3>
                </div>
                <div>
                    <h3>Comments: {this.props.reduxState.formInputs[3]}</h3>
                </div>
                <button onClick={this.submit}>Submit Feedback</button>
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
export default connect(putReduxStateOnProps)(Review); 