import {Request, Response} from 'express'
import db from '../database/connection'

interface Typecpf {
  cpf: string
}

export default class lastRegisterCompanyController{

  async index(request: Request, response: Response){
    const { Code } = request.params

    if(Code == 'padrao' || !Code) return response.status(400).send('invalid url')

    let company = await db('companies').where('companies.Code', '=', Code)

    if(!company[0]) return response.status(400).send('invalid url, please contact the suport')

    return response.json(company)
  }
  async update(request: Request, response: Response){
    const { Code } = request.params
    const { confirm_cpf } = request.body

    if(!confirm_cpf) return response.status(400).send('Type a valid email')
    if(Code == 'padrao' || !Code) return response.status(400)
      .send('invalid url')

    let company = await db('companies').where('companies.Code', '=', Code)
    if(!company[0]) return response.status(400)
      .send('Invalid url, please contact suport')
    
    let companycpf = company.map((cpitem: Typecpf) => {
      return cpitem.cpf
    })

    if(confirm_cpf !== companycpf[0]) return response.status(400)
      .send('this cpf does not belong to this account')

    return response.json(company)
  }
} 