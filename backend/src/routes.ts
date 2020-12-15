import express from 'express'
import admController from './controllers/admController'
import AnalyzeController from './controllers/AnalyzeController'
import companyController from './controllers/CompanyController'


const routes = express.Router()
const companycontroller = new companyController()
const admcontroller = new admController()
const Analyzecontroller = new AnalyzeController()

routes.post('/newcompany', companycontroller.create)

routes.get('/analyze', Analyzecontroller.index)
routes.delete('/analyze/:id', Analyzecontroller.destroy)

routes.get('/adm', admcontroller.index)

export default routes