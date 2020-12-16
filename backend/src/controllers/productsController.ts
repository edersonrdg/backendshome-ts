import { Request, Response } from 'express'
import db from '../database/connection'

export default class productController {
  async index(request: Request, response: Response) {
    let products = await db('products')

    return response.json(products)
  }
  async create(request: Request, response: Response) {
    const {
      title,
      description,
      category,
      price,
      image 
      } = request.body

    const { id } = request.params

    let company = await db('companies').where('companies.id', '=', id)
    if(!company[0]) return response.status(400).send('Invalid company')

    await db('products').insert({
      title,
      description,
      category,
      price,
      image,
      company_id: id
    })

    return response.status(200).send()
  }
  async destroy(request: Request, response: Response){
    const { id } = request.params
    const { productid } = request.body

    let company = await db('companies').where('companies.id', '=', id)
    if(!company[0]) return response.status(400).send('invalid company')

    let product = await db('products').where('products.company_id', '=', id)
      .where('products.id', '=', productid).delete()
    
    if(!product) return response.status(400).send('Invalid id product')

    return response.status(200).send()
  }
}