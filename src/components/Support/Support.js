import React, { Component } from 'react';
import { connect } from 'react-redux';

// material-ui
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

//styles
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
    rightIcon: {
        marginLeft: theme.spacing.unit,
      },

});

//class
class Support extends Component{

    // local state
    state = {
        newFeedback: {}
    }

    nextPage = () => { // start nextPage
        // input validation
        if (this.state.newFeedback.support === undefined) {
            alert('Please fill in the required information!')
        } else {
            console.log('In nextPage button.....');
            // dispatch to reduxStore
            this.props.dispatch( { type: 'INPUT_FORM', payload: this.state.newFeedback.support})
            this.props.history.push('/comments'); // pushing to next view
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
        let lastFeedback = this.props.reduxState.formInputs.length-1;
        console.log('going back to the last page.....');
        this.props.dispatch( { type: 'CHANGE_LAST', payload: lastFeedback } );
        this.props.history.push('/understanding');
    }

    render(){
        const classes = this.props;
        return(
            <div>
                <h2>How well are you feeling supported?</h2>
                <h4>Score 1-5</h4>
                <TextField
                    required
                    id="support"
                    type="number"
                    max="5"
                    label="supported?"
                    className={classes.textField}
                    onChange={(event) => this.handleChange(event, 'support')}
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
export default connect(putReduxStateOnProps)(Support); 