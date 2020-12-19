import { response } from "express"
import db from "../database/connection"

interface Request {
  username: string,
  password: string,
}

class Authuserservice{
  public async execute({username, password}: Request): Promise<void>{
    const getusername = await db('companies')
      .where('companies.username', '=', username)

    if(!getusername){
      throw new Error('Incorrect username/password combination')
    }
  }
}

export default Authuserservice