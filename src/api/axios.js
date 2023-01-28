import axios from "axios"


const Service = axios.create({
    timeout:8000,
   

})

Service.interceptors.request.use((config) => {
    return config
}, (error) => {
    return error
}


)


Service.interceptors.response.use((response) =>{

    if (response.status === 200) {
        return response.data

    }else{
        return {status: -1}
    }
})

export default () => Service