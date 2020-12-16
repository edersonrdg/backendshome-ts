import { Request, Response } from 'express'
import db from '../database/connection'

export default class productController{
  async index(request: Request, response: Response){
    let products = await db('products')

    return response.json(products)
  }
}