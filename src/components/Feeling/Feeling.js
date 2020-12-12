import React, { Component } from 'react';
import { connect } from 'react-redux';

//class
class Feeling extends Component{

    nextPage = () => {
        console.log('In nextPage button.....')
        this.props.history.push('/understanding')
    }

    render(){
        return(
            <div>
                <h2>How are you feeling today?</h2>
                <input type="number" max="6" label="Feeling?" />
                <button onClick={this.nextPage}>NEXT</button>
            </div>
        ) //end return 
    } //end render
} //end class 

//export
export default connect()(Feeling); 