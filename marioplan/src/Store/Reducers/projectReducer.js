const initState = {
    projects: [
        { id: '1', title: 'Title 1', content:'Content 1' },
        { id: '2', title: 'Title 2', content:'Content 2' },
        { id: '3', title: 'Title 3', content:'Content 3' }
    ]
}

const projectReducer = (state = initState, action) => {
    switch(action.type){
        default:
            return state;
        case 'CREATE_PROJECT':
            // Project created into the database.
            console.log('Project created', action.project );
            return state;
        case 'CREATE_PROJECT_ERROR':
            // Project created into the database.
            console.log('Error while creating project', action.error );
            return state;
    }

}

export default projectReducer;