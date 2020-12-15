import {Request, Response} from 'express'
import db from '../database/connection'

export default class admController{
  async index(request: Request, response: Response){   
    const companies = await db('companies')
    .where('companies.username', '<>', 'padrao')
    
    return response.status(200).json(companies)
  }
  async destroy(request: Request, response: Response) {
    const { id } = request.params

    await db('companies').where('companies.id', '=', id).delete()

    return response.status(200).send()
  }
}