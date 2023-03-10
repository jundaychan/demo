import axios from 'axios'
export default axios.create({
    baseURL:'https://www.mxnzp.com/api/',
    timeout:3000
})