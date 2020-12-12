import React, { Component } from 'react';
import { connect } from 'react-redux';

//class
class Comments extends Component{

    nextPage = () => {
        console.log('In nextPage button.....')
        this.props.history.push('/review')
    }

    render(){
        return(
            <div>
                <h2>Is there anything else you would like us to know this week?</h2>
                <input type="text" label="comments" />
                <button onClick={this.nextPage}>NEXT</button>
            </div>
        ) //end return 
    } //end render
} //end class 

//export
export default connect()(Comments); 