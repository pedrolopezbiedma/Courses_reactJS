
import React, { useState, createContext } from 'react';
export const ExercisesContext = createContext();

const ExercisesContextProvider = (props) => {
    // ##### Muscles ( To be splitted?? ) #####
    const [muscles, setMuscles] = useState(['All', 'Shoulders', 'Chest', 'Arms', 'Back','Legs']);
    const [footerSelectedMuscle, setFooterSelectedMuscle] = useState('All')
    const setFooterSelected = (e, index) => {
        setFooterSelectedMuscle(muscles[index]);  
    }    
    const getSelectedFooterIndex = () => {
        const selectedIndex = muscles.findIndex(muscle => {
            return muscle === footerSelectedMuscle
        })
        return selectedIndex;
    }

    // ##### Exercises #####
    const [exercises, setExercises] = useState([
        { id: 'overhead-press', title: 'Overhead Press', description: 'Delts exercise...',   muscles: 'shoulders' },
        { id: 'dips',           title: 'Dips',           description: 'Triceps exercise...', muscles: 'arms' },
        { id: 'barbell-curls',  title: 'Barbell Curls',  description: 'Biceps exercise...',  muscles: 'arms' },
        { id: 'bench-press',    title: 'Bench Press',    description: 'Chest exercise...',   muscles: 'chest'},
        { id: 'pull-ups',       title: 'Pull Ups',       description: 'Back and biceps exercise...', muscles: 'back' },
        { id: 'deadlifts',      title: 'Deadlifts',      description: 'Back and leg exercise...', muscles: 'back' },
        { id: 'squats',         title: 'Squats',         description: 'Legs exercise...',    muscles: 'legs' }
    ])
    const addNewExercise = (exercise) => {
        setExercises([...exercises, exercise])
    }
    const removeExercise = (exerciseId) => {
        console.log('received the id', exerciseId)
        const newExercises = exercises.filter(exercise => {
            return exercise.id !== exerciseId
        })

        setExercises(newExercises)
    }

    const [chosenExercise, setChosenExercise] = useState('')
    const setExerciseSelected = (exercise) => {
        setChosenExercise(exercise)
    }

    return (
        <ExercisesContext.Provider value={{ muscles, footerSelectedMuscle, setFooterSelected, getSelectedFooterIndex, 
            exercises, addNewExercise, removeExercise, chosenExercise, setExerciseSelected }}>
            {props.children}
        </ExercisesContext.Provider>
    )
}
export default ExercisesContextProvider;