import express from 'express'
const app = express()

app.use('/', express.static('../bialimakeup-site'))
app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`)
})
