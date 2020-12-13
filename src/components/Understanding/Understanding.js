//imports //imports JUST the component from react not ALL of react 
import React, { Component } from 'react';
import { connect } from 'react-redux';

// material-ui
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// styles
const styles = theme => ({
    fab: {
        margin: theme.spacing.unit,
     },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
      },
    button: {
        margin: theme.spacing.unit,
      },

});

//class
class Understanding extends Component{

    // local state
    state = {
        newFeedback: {}
    }

    nextPage = () => { // begin nextPage function
        // input validation
        if (this.state.newFeedback.understanding === undefined) {
            alert('Please fill in the required information!')
        } else {
            console.log('In nextPage button.....');
            this.props.dispatch( { type: 'INPUT_FORM', payload: this.state.newFeedback.understanding})
            this.props.history.push('/support'); // pushing to next view
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

    changePrev = () => {
        // targeting the last item in my reducer
        let lastFeedback = this.props.reduxState.formInputs.length-1;
        console.log('going back to the last page.....');
        // sending last item index back to the store as payload
        this.props.dispatch( { type: 'CHANGE_LAST', payload: lastFeedback } );
        this.props.history.push('/feeling');
    }

    render(){
        const classes = this.props;
        return(
            <div>
                <h2>How well are you understanding the current content?</h2>
                <h4>Score 1-5</h4>
                <TextField
                    required
                    id="understanding"
                    type="number"
                    max="5"
                    label="understanding?"
                    className={classes.textField}
                    onChange={(event) => this.handleChange(event, 'understanding')}
                    margin="normal"
                />
                
                <br /><br />

                    <Fab onClick={this.nextPage}
                        color="primary" aria-label="Add" className={classes.fab}>
                        <AddIcon />
                    </Fab>

                <br /><br />

                <div>
                    <Button onClick={this.changePrev}
                        color="secondary" className={classes.button}>
                        Change Previous Score
                    </Button>
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
export default connect(putReduxStateOnProps)(Understanding); 