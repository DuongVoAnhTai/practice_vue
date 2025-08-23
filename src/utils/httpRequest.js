import axios from 'axios'

const httpRequest = axios.create({
  baseURL: import.meta.env.VITE_GITHUB_API_URL,
})

export const get = async (path, options = {}) => {
  try {
    const res = await httpRequest.get(path, options)

    return res.data
  } catch (error) {
    console.log(error)
  }
}

export default httpRequest
