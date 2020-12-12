import Axios from 'axios';
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

    submit = () => {
        Axios.post('/feedback', this.state).then((response) => {
            console.log('back from POST.......', response.data);
        }).catch((error) => {
            console.log('error with POST.......', error);
            alert('something wrong with the POST')
        })
        this.props.history.push('/end-page')
    }

    render(){
        return(
            <div>
                <h2>{JSON.stringify(this.props.reduxState.formInputs)}</h2>
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
                <button onClick={this.submit}>this button will post inputs and open a new page</button>
            </div>
        ) //end return 
    } //end render
} //end class 

const putReduxStateOnProps = ( reduxState) => ({ 
    reduxState
  })

//export
export default connect(putReduxStateOnProps)(Review); 