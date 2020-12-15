import {Request, Response} from 'express'
import db from '../database/connection'

export default class admController{
  async index(request: Request, response: Response){
    const { comp_cnpj } = request.query   

    if(comp_cnpj){
      const companies = await db('companies')
      .where('companies.comp_cnpj', '=', comp_cnpj as string)
      return response.status(200).json(companies)
    }
      const companies = await db('companies')
      return response.status(200).json(companies)
  }
}