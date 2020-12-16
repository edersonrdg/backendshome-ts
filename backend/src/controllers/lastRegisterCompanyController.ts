import {Request, Response} from 'express'
import db from '../database/connection'

export default class lastRegisterCompanyController{
  async index(request: Request, response: Response){
    const { Code } = request.params

    if(Code == 'padrao' || !Code) return response.status(400).send('invalid url')

    let company = await db('companies').where('companies.Code', '=', Code)

    if(!company[0]) return response.status(400).send('invalid url, please contact the suport')

    return response.json(company)
  }
}   