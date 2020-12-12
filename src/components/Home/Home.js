
import React, { Component } from 'react';
import { connect } from 'react-redux';

//class
class Home extends Component{

    nextPage = () => {
        console.log('In nextPage button.....')
        this.props.history.push('/feeling')
    }

    render(){
        return(
            <div>
                <h2>Welcome to the Feedback Loop!</h2>
                <h3>Please click the button below to get started.</h3>
                <button onClick={this.nextPage}>START</button>
            </div>
        ) //end return 
    } //end render
} //end class 

//export
export default connect()(Home); 