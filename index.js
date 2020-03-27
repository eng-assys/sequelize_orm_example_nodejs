// ===============
// General Imports
// ===============
const express = require('express')
const bodyParser = require('body-parser');

// ==============
// App Definition
// ==============
const app = express()

// =============
// Import Models
// =============
const { User } = require('./app/models')

// ========================
// BodyParser configuration
// ========================
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ======
// Routes
// ======
app.get('/', (req, res) => {
  res.status(200).send('Hello World!')
})

// Register user
// User.create({ name: 'Claudio', email: 'claudio@rocketseat.com.br', password: '123456' })
app.post('/register', async (req, res) => {
  const user = await User.create(req.body)
  res.json(user)
})

// Index User
app.get('/users', async (req, res) => {
  const users = await User.findAll()
  res.json(users)
})

// Criar
app.post('/users', async (req, res) => {
  const user = await User.create(req.body)
  res.json(user)
})

// Search User
app.get('/users/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id)
  res.json(user)
})

// Edit User
app.put('/users/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id)
  user.name = req.body.name
  user.email = req.body.email

  new_user = await user.save()

  res.json(new_user)
})

// Remove User
app.delete('/users/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id)
  await user.destroy()
  res.json(user)
})

// ============
// Start Server
// ============

app.listen(3001)