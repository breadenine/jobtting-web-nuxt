import axios from 'axios'

const baseURI =
  process.env.NODE_ENV === 'production'
    ? `http://ec2-13-125-77-236.ap-northeast-2.compute.amazonaws.com:3001/v1`
    : 'http://localhost:3001/v1'

const get = async (path, getData) => {
  const options = {
    params: getData || {}
  }
  const { data } = await axios.get(`${baseURI}${path}`, options)
  return data
}

const post = async (path, postData) => {
  const { data } = await axios.post(`${baseURI}${path}`, postData)
  return data
}

const patch = async (path, putData) => {
  const { data } = await axios.patch(`${baseURI}${path}`, putData)
  return data
}

const remove = async (path, deleteData) => {
  const { data } = await axios.delete(`${baseURI}${path}`, deleteData)
  return data
}

export default { get, post, patch, remove }
