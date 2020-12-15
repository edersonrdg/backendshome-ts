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
routes.delete('/analyze/delete/:id', Analyzecontroller.destroy)
routes.put('/analyze/pass/:id', Analyzecontroller.update)

routes.get('/adm', admcontroller.index)
routes.delete('/adm/delete/:id', admcontroller.destroy)

export default routes