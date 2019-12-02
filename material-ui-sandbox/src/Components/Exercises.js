import React, { useContext, Fragment } from 'react'
import { ExercisesContext } from '../Context/ExercisesContext'
import { IconButton, Grid, Paper, Typography, List, ListItem, ListItemText } from '@material-ui/core'
import { Delete, Edit } from '@material-ui/icons';

const Exercises = () => {
    // ##### Grabbing context #####
    const { footerSelectedMuscle, exercises, removeExercise, chosenExercise, setExerciseSelected } = useContext(ExercisesContext)

    // ##### Handler Functions #####
    const handleDelete = (exerciseId) => {
        removeExercise(exerciseId)
    }

    const handleEdit = () => {

    }

    // ##### Extra Functions #####
    const orderExercises = () => {
        return Object.entries(exercises.reduce((exercises, iterator) => {
            const muscles = iterator.muscles;

            exercises[muscles] = exercises[muscles] ? [...exercises[muscles], iterator] : [iterator]

            return exercises
        }, {})
        )
    }

    // ##### Component vars #####
    const orderedExercises = orderExercises();
    const { title = 'Welcome!!!', description = 'Select an exercise from the left panel please :D' } = chosenExercise;

    // ##### JSX #####
    return (
        <div>
            <Grid container>
                <Grid item sm>
                    <Paper style={{ padding: 20, marginTop: 10, marginBottom: 10, height: 500, overflowY: 'auto' }}>
                        {orderedExercises.map( ([group, exercises]) => {
                            if(footerSelectedMuscle.toLowerCase() === 'all'){
                                return(
                                    <Fragment key={group}>
                                        <Typography variant='body1'>
                                            { group }
                                        </Typography>
                                        <List component="nav" aria-label="secondary mailbox folders">
                                            { exercises.map( exercise => {
                                                return(
                                                    <ListItem button key={exercise.id} onClick={() => setExerciseSelected(exercise)}>
                                                        <ListItemText primary={exercise.title} />
                                                        <IconButton>
                                                            <Edit />
                                                        </IconButton>
                                                        <IconButton onClick={() => handleDelete(exercise.id)}>
                                                            <Delete />
                                                        </IconButton>
                                                    </ListItem>
                                                )
                                            })}
                                        </List>
                                    </Fragment>
                                )
                            }
                            else{
                                if(group === footerSelectedMuscle.toLowerCase()){
                                    return(
                                        <Fragment key={group}>
                                            <Typography variant='body1'>
                                                { group }
                                            </Typography>
                                            <List component="nav" aria-label="secondary mailbox folders">
                                                { exercises.map( exercise => {
                                                    return(
                                                        <ListItem button key={exercise.id} onClick={() => setExerciseSelected(exercise)}>
                                                            <ListItemText primary={exercise.title} />
                                                            <IconButton>
                                                                <Edit />
                                                            </IconButton>
                                                            <IconButton onClick={() => handleDelete(exercise)}>
                                                                <Delete />
                                                            </IconButton>
                                                        </ListItem>
                                                    )
                                                })}
                                            </List>
                                        </Fragment>                                        
                                    )
                                }
                                else{
                                    return null;
                                }
                            }
                        })}
                    </Paper>
                </Grid>
                <Grid item sm>
                    <Paper style={{ padding: 20, marginTop: 10, marginBottom: 10, height:500, overflowY:'auto' }}>
                        <Typography variant='h4'>
                            { title }
                        </Typography>
                        <Typography variant='subtitle2' style={{ marginTop: 20 }}>
                            { description }
                        </Typography>
                    </Paper>
                </Grid> 
            </Grid>
        </div>
    )
}

export default Exercises;
