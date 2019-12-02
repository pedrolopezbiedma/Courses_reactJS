export const createProject = (project) => {
    return ( dispatch, getState, { getFirebase, getFirestore } ) => {
        // Asyncronous call here.
        const firestore = getFirestore();
        const state = getState();

        firestore.collection('projects').add({
            title: project.projectTitle,
            content: project.projectContent,
            authorFirstName: state.firebase.profile.firstName,
            authorLastName: state.firebase.profile.lastName,
            createdAt: new Date()
        })
        .then(() => {
            // Triggering the action
            dispatch({ type: 'CREATE_PROJECT', project: { project } })

        })
        .catch( error => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', error: { error } })
        })
    }
}