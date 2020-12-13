import React, { Component } from 'react';
import { connect } from 'react-redux';

// material-ui
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';

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

});

//class
class Feeling extends Component{
    

    // local state
    state = {
        newFeedback: {},
        
    }

    nextPage = () => {// start nextPage function
        // input validation
        if (this.state.newFeedback.feeling === undefined) {
            alert('Please fill in the required information!')
        } else {
            console.log('In nextPage button.....');
            this.props.dispatch( { type: 'INPUT_FORM', payload: this.state.newFeedback.feeling})
            // sending the data to the reduxStore like this puts it directly into the array as a number
            // It doesn't have a key name to access it but I can display it on the review page
            // using the index numbers.
            // I feel like this way is probably not ideal for some applications, 
            // but for this one I don't see how it could be a problem I guess.
            this.props.history.push('/understanding'); // next page
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

    render(){
        const classes = this.props;
        return(
            <div>
                <h2>How are you feeling today?</h2>
                <h4>Score 1-5</h4>
                <TextField
                    required
                    id="feeling"
                    type="number"
                    max="5"
                    label="feeling?"
                    className={classes.textField}
                    value={this.state.name}
                    onChange={(event) => this.handleChange(event, 'feeling')}
                    margin="normal"
                />

                <br /><br />

                    <Fab onClick={this.nextPage}
                        color="primary" aria-label="Add" className={classes.fab}>
                        <AddIcon />
                    </Fab>
                    
            </div>
        ) //end return 
    } //end render
} //end class 

//export // i'm not sure if this is actually how i have to do it, but it worked finally.
// I think this might actually be what confused me the most about material-ui
// is i'm not sure when I need to use withStyles since other components seem 
// to inherit the styles from other components.
export default connect(withStyles(styles))(Feeling); 