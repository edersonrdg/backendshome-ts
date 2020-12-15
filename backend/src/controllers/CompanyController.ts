import { Request, Response } from 'express'
import db from '../database/connection'

export default class companyController {
  async create(request: Request, response: Response) {
    const {
      name,
      phonenumber,
      cpf,
      office,
      comp_cnpj,
      comp_name,
      comp_email,
      comp_phonenumber,
      comp_area } = request.body

    try {
      if (comp_cnpj == undefined) {
        await db('companies').insert({
          Code: "padrao",
          name,
          phonenumber,
          cpf,
          office,
          comp_cnpj: 0,
          comp_name,
          comp_email,
          comp_phonenumber,
          comp_area,
          username: "padrao",
          password: "padrao",
          avatar: "padrao",
          banc_name: "padrao",
          banc_POU_or_CR: "padrao",
          banc_operation: "padrao",
          banc_pf: false,
          banc_mei: false,
        })
      }
      else {
        await db('companies').insert({
          Code: "padrao",
          name,
          phonenumber,
          cpf,
          office,
          comp_cnpj,
          comp_name,
          comp_email,
          comp_phonenumber,
          comp_area,
          username: "padrao",
          password: "padrao",
          avatar: "padrao",
          banc_name: "padrao",
          banc_POU_or_CR: "padrao",
          banc_operation: "padrao",
          banc_pf: false,
          banc_mei: false,
        })
      }
      return response.status(201).send()

    } catch (error) {
      return response.status(400).send('error')
    }
  }
}