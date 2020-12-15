import { Request, Response } from 'express'
import db from '../database/connection'
import crypto from 'crypto'

export default class AnalyzeController {
  async index(request: Request, response: Response) {
    const companies = await db('companies')
      .where('companies.Code', '=', 'padrao')
    return response.status(200).json(companies)
  }
  async update(request: Request, response: Response){
    const { id } = request.params

    await db('companies').where('companies.id', '=', id).update({
      Code: crypto.randomBytes(4).toString('hex')
    })
    return response.status(200).send()
  }
  async destroy(request: Request, response: Response) {
    const { id } = request.params

    await db('companies').where('companies.id', '=', id).delete()

    return response.status(200).send()
  }
}