import express from 'express'

const app = express()

app.get('/', (request, response) => {
  return response.send('server running')
})

app.listen(3333, () => {
  console.log('server starting on port 3333')
})