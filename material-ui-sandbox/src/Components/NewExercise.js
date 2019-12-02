import React, { useState, useContext } from 'react';
import { ExercisesContext } from '../Context/ExercisesContext'
import { makeStyles } from '@material-ui/core/styles';
import { 
  IconButton, Button, TextField, Dialog, DialogActions, DialogContent, 
  DialogContentText, DialogTitle, InputLabel, MenuItem, FormControl, Select 
} from '@material-ui/core'
import { Add } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  FormControl: {
    width: 500
  }
}));

const NewExercise = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [newExercise, setNewExercise] = useState({ 
      title: '', 
      description: '', 
      muscles: ''
    })
    const { muscles, addNewExercise } = useContext(ExercisesContext)

    const handleClose = () => {
        setOpen(false);
    }

    const handleChange = (e, id) => {
      if(!e.target.id){
        e.target.id = id.props.id
        e.target.value = id.props.value.toLowerCase()
      }

      setNewExercise({
        ...newExercise,
        [e.target.id]: e.target.value,
      })

    }

    const handleSubmit = (e) => {
      newExercise.id = newExercise.title.toLowerCase().replace(/ /g, '-')

      // Add the exercise.
      addNewExercise(newExercise)

      // Cleaning up the state
      setNewExercise({
        title: '',
        description: '',
        muscles: ''
      })

      // Closing the dialog
      setOpen(false);
    }

    return (
        <div>
          <IconButton variant="contained" onClick={() => {setOpen(true)}} justify="flex-end">
            <Add />
          </IconButton>
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">New Exercise</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Fill the fields to create a new exercise.
              </DialogContentText>
              <form>
                <TextField
                  required
                  id="title"
                  label="Title"
                  defaultValue={newExercise.title}
                  onChange={ handleChange.bind("id") }
                  className={classes.FormControl}
                  margin="normal"
                />
                <br/>
                <FormControl>
                  <InputLabel id="musclesLabelID">Muscle</InputLabel>
                  <Select
                    id="muscles"
                    labelId="musclesLabelID"
                    defaultValue={ newExercise.muscles }
                    onChange={handleChange.bind("id")}
                    className={classes.FormControl}
                    >
                    { muscles.map(muscle => {
                      if(muscle !== 'All'){
                        return(
                          <MenuItem key={muscle} value={muscle} id="muscles">{muscle}</MenuItem>
                        )
                      }
                    })}
                  </Select>
                </FormControl>
                <br/>
                <TextField
                  id="description"
                  label="Description"
                  defaultValue={newExercise.description}
                  multiline
                  rowsMax="4"
                  onChange={handleChange.bind("id")}
                  className={classes.FormControl}
                  margin="normal"
                />
              </form>
            </DialogContent>
            <DialogActions>
              <Button color="primary" onClick={handleSubmit}>
                Create
              </Button>
            </DialogActions>
          </Dialog>
        </div>
    )
}

export default NewExercise;