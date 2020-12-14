import express from 'express'

const routes = express.Router()

routes.get('/', (request, response) => {
  return response.send('aplication started on routes')
})

export default routes