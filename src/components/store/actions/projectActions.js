import Axios from 'axios'

const url1 = "http://localhost:3000"
const url2= "http://localhost:8080/api/board"
export const createProject = (project) => {
    return (dispatch) => {
        
        Axios.post(`${url1}/projects`, project)
        .then(res => dispatch({ type: 'CREATE_PROJECT', project: res.data }))

        Axios.post(`${url2}`, project)
        .then(res => dispatch({ type: 'CREATE_PROJECT', project: res.data }))
        
    }
}

export const fetchProject = () => {
    return (dispatch) => {
        
        Axios.get(`${url1}/projects`)
        .then(res=> dispatch({ type: 'FETCH_PROJECT', payload: res.data}))

        Axios.get(`${url2}`)
        .then(res=> dispatch({ type: 'FETCH_PROJECT', payload: res.data}))
    }
}