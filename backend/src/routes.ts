import express from 'express'
import companyController from './controllers/FisrtRegistCompanyController'

const routes = express.Router()
const companycontroller = new companyController()

routes.post('/newcompany', companycontroller.create)

export default routes