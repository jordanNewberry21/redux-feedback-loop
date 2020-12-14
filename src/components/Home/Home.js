import React, { Component } from 'react';
import { connect } from 'react-redux';

// material-ui
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

//class
class Home extends Component{

    nextPage = () => { // this function simply goes to the next view
        console.log('In nextPage button.....')
        this.props.history.push('/feeling')
    }

    render(){
        const classes = this.props;
        return(
            <div>
                <h2>Welcome to the Feedback Loop!</h2>
                <h3>Please click the button below to get started.</h3>

                <br />
                
                <Button onClick={this.nextPage} variant="contained" 
                        color="primary" className={classes.button}>
                    Start
                </Button>
            </div>
        ) //end return 
    } //end render
} //end class 

//export
export default connect()(Home); 