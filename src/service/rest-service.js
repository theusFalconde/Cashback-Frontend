import axios from 'axios'
import Constante from './../util/constante'

const request = (method, url, data) => 
    new Promise((resolve, reject) => {
        axios({
            method: method,
            url: Constante.BASE_URL + url,
            data: data
        }).then(res => {
            resolve(res)
        }). catch(err => {
            reject(err)
        })
    })

const insert = (pathUrl, content) => request('POST', pathUrl, content)

const update = (pathUrl, content) => request('PUT', pathUrl, content)

const remove = (pathUrl, id) => request('DELETE', `${pathUrl}/${id}`, {})

const find = (pathUrl, content) => request('GET', pathUrl, content)

export default {
    request: request,
    insert: insert,
    update: update,
    remove: remove,
    find: find
}