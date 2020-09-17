import express from 'express'

const app = express()

app.use('/static', express.static(__dirname + '/../bialimakeup-site'))
app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`)
})
