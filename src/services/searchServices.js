import * as request from '@/utils/httpRequest'

export const search = async (username) => {
  try {
    const res = await request.get(username)
    
    return res
  } catch (err) {
    console.log(err)
  }
}
