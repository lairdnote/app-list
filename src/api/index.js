
import service from "./service" 


let baseURL ;


if (process.env.NODE_ENV === "dev"){
    baseURL = "https://a7950971-ec07-45b0-b1d3-468fd250a525.mock.pstmn.io/";
};
if (process.env.NODE_ENV === "prod"){
    baseURL = "https://a7950971-ec07-45b0-b1d3-468fd250a525.mock.pstmn.io/";
}else{
    baseURL = "https://a7950971-ec07-45b0-b1d3-468fd250a525.mock.pstmn.io/"
}

const headers =  {
    "Content-type":"application/json;charset=utf-8",
  //  "Authorization":store.state.uInfo.userInfo.token
}


let _service = {
    getMailCode(data) {
        const url = baseURL + 'api/v1/code/send'
        return service.post(url, data, headers)
    },
    getLoginCode(data) {
        const url = baseURL + 'api/v1/user/login'
        return service.post(url, data , headers)
    },
    getCountryCode(data) {
        const url = baseURL + "api/v1/sys/country/list"
        return service.post(url, data, headers)
    }
}

export default _service