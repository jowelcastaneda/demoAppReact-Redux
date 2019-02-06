const iniState = {
    projects: []
}

const projectReducer = (state = iniState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
        return{
            ...state, 
            projects: [...state.projects, action.project]
        }
        case 'FETCH_PROJECT':
        return{
            ...state, 
            projects: action.payload
        }
        default: 
            return state;
}
}

export default projectReducer