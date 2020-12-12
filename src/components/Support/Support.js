import React, { Component } from 'react';
import { connect } from 'react-redux';

//class
class Support extends Component{

    nextPage = () => {
        console.log('In nextPage button.....')
        this.props.history.push('/comments')
    }

    render(){
        return(
            <div>
                <h2>How well are you feeling supported?</h2>
                <input type="number" max="6" label="supported?" />
                <button onClick={this.nextPage}>NEXT</button>
            </div>
        ) //end return 
    } //end render
} //end class 

//export
export default connect()(Support); 