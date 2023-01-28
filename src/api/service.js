import Service from './axios'

const instance = Service()

export default {
    get(url, params, headers) {
        return instance.get(url, { params, headers })
    },
    post(url, params, headers) {
        return instance.post(url, params, { headers })
    }
}