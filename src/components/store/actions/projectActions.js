import Axios from 'axios'

const url2= "http://localhost:8080"
export const createProject = (project) => {
    return (dispatch) => {
        Axios.post(`${url2}`, project)
        .then(res => dispatch({ type: 'CREATE_PROJECT', project: res.data }))
        
    }
}

export const fetchProject = () => {
    return (dispatch) => {
        Axios.get(`${url2}`)
        .then(res=> dispatch({ type: 'FETCH_PROJECT', payload: res.data}))
    }
}

export const fetchProjectById = (id) => {
    return (dispatch) => {
        Axios.get(`${url2}/plan/${id}`)
        .then(res=> dispatch({ type: 'FETCH_PROJECT_BY_ID', payload: res.data}))
    }
}
export const editProjectById = (id) => {
    return (dispatch) => {
        Axios.get(`${url2}/plan/edit/${id}`)
        .then(res=> dispatch({ type: 'EDIT_PROJECT_BY_ID', payload: res.data}))
    }
}

export const deleteProject = (id) => {
    return (dispatch) => { 
        Axios.delete(`${url2}/plan/${id}`)
        .then(res=> dispatch({ type: 'DELETE_PROJECT', payload: id}))          
    }
}

export const updateProject = (id, project) => {
    return (dispatch) => { 
        Axios.put(`${url2}/plan/edit/${id}`, project)
        .then(res=> dispatch({ type: 'UPDATE_PROJECT_BY_ID', payload: res.data}))          
    }
}