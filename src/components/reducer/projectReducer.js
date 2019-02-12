const iniState = {
    projects: [],
    project: {},
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
        case 'DELETE_PROJECT':
        return{
            ...state, 
            projects: state.projects.filter(p => p.id !== action.payload)
        }
        case 'FETCH_PROJECT_BY_ID':
        return{
            ...state, 
            project: action.payload
        }
        case 'EDIT_PROJECT_BY_ID':
        return{
            ...state, 
            project: action.payload
        }
        case 'UPDATE_PROJECT_BY_ID':
        return{
            ...state, 
            projects: state.projects.map(project => project.id === action.payload.id ? action.payload : project)
        }
        default: 
            return state;
}
}

export default projectReducer