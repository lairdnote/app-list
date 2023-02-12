
import service from "./service"


let baseURL;


if (process.env.NODE_ENV === "dev") {
    baseURL = "http://192.168.31.11:4888/mock/11";
};
if (process.env.NODE_ENV === "prod") {
    baseURL = "http://192.168.31.11:4888/mock/11";
} else {
    baseURL = "http://192.168.31.11:4888/mock/11"
}

const headers = {
    "Content-type": "application/json;charset=utf-8",
    //  "Authorization":store.state.uInfo.userInfo.token
    "token": "123456abcdef"
}


let _service = {
    getMailCode(data) {
        const url = baseURL + '/api/v1/code/send'
        return service.post(url, data, headers)
    },
    getLoginCode(data) {
        const url = baseURL + '/api/v1/user/login'
        return service.post(url, data, headers)
    },
    getCountryCode(data) {
        const url = baseURL + "/api/v1/sys/country/list"
        return service.post(url, data, headers)
    },
    getSearchList(data) {
        const url = baseURL + "/api/v1/guang/search"
        return service.post(url, data, headers)
    },
    getSearchList5(data) {
        const url = baseURL + "/api/v1/guang/search1"
        return service.post(url, data, headers)
    },
    getTradePairList() {
        const url = baseURL + "/api/v1/sys/tradepair/list"
        return service.post(url, headers)
    },
    OrderCancel(data){
        const url = baseURL + "/api/v1/order/cancel"
        return service.post(url, data, headers)
    },
    GuangClone(data){
        const url = baseURL + "/api/v1/guang/clone"
        return service.post(url, data, headers)
    },
    GuangDelist(data){
        const url = baseURL + "/api/v1/guang/delist"
        return service.post(url, data, headers)
    },
    GuangCheck(data){
        const url = baseURL + "/api/v1/guang/check"
        return service.post(url, data, headers)
    }
}

export default _service