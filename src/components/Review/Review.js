import React, { Component } from 'react';
import { connect } from 'react-redux';

//class
class Review extends Component{

    submit = () => {
        this.props.history.push('/end-page')
    }

    render(){
        return(
            <div>
                <h2>{JSON.stringify(this.props.reduxState)}</h2>
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