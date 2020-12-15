import express from 'express'
import admController from './controllers/admController'
import companyController from './controllers/CompanyController'


const routes = express.Router()
const companycontroller = new companyController()
const admcontroller = new admController()

routes.post('/newcompany', companycontroller.create)
routes.get('/adm', admcontroller.index)

export default routes