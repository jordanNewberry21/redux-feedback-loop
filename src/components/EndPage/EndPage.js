import React, { Component } from 'react';
import { connect } from 'react-redux';

// material-ui
import Button from '@material-ui/core/Button';

//class
class EndPage extends Component{
    // restart function
    restart = () => {
        console.log('I need this button to clear the form information....');
        console.log('and take me back to the beginning....');
        this.props.dispatch({type: 'RESET'}) // this action empties the reducer
        this.props.history.push('/') // pushing to the home page
    }

    render(){
        const classes = this.props;
        return(
            <div>
                <h2>Thank you for finishing your feedback today!</h2>
                <div>
                    <h3>Do you want to leave another one?</h3>
                    <Button onClick={this.restart} variant="contained" 
                            color="primary" className={classes.button}>
                        Leave New Feedback
                    </Button>
                </div>
            </div>
        ) //end return 
    } //end render
} //end class 

//export
export default connect()(EndPage); 