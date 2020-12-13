import React, { Component } from 'react';
import { connect } from 'react-redux';

// material-ui
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// I realized by the time I got to this component that since I was connected to the
// redux store I didn't need to put the styles in every component since they all are
// connected, I can access them with this.props. At least I think that's what is happening.

//class
class Comments extends Component{

    // local state
    state = {
        newFeedback: {}
    }

    // nextPage function
    nextPage = () => {
        console.log('In nextPage button.....');
        // dispatch to redux store
        this.props.dispatch( { type: 'INPUT_FORM', payload: this.state.newFeedback.comments})
        // push to the next view
        this.props.history.push('/review');
        
    }

    handleChange = (event, inputType) => { // handle change function
        console.log(inputType, '=', event.target.value)
        this.setState({   // setting state of the target input value   
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
        this.props.history.push('/support');
    }

    render(){
        const classes = this.props;
        return(
            <div>
                <h2>Is there anything else you would like us to know this week?</h2>
                <h4>Leave a few short comments (optional)</h4>
                <TextField
                    required
                    id="comments"
                    type="text"
                    label="comments?"
                    className={classes.textField}
                    onChange={(event) => this.handleChange(event, 'comments')}
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
export default connect(putReduxStateOnProps)(Comments); 