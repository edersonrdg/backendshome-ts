import { Request, Response} from 'express'
import Authuserservice from '../services/authuserservice'

export default class userSessionController{
  async create(request: Request, response: Response){
    try{
      const {username, password} = request.body

      const authenticateuser = new Authuserservice()

      await authenticateuser.execute({
        username,
        password
      })
      return response.status(200).json({ ok: true})

    }catch(err){

    }
  }
}