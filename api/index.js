const express = require('express')

// Create express instnace
const app = express()

app.get('/test', (req, res) => {
  res.end('Hello world')
})

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
