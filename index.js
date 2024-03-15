// import { getProjects } from "./services/notion"
const express = require('express');
const path = require('path');
const dotenv = require('dotenv').config();
const getProjects = require('./services/notion');
// const getPages = require('./services/pages');
const PORT = process.env.PORT || 5000;

const app = express()

app.use(express.static('public'))


// Ruta URL del json de los proyectos de la API en Notion  //

app.get('/projects', async (req, res) => {
  const projects = await getProjects()
  res.json(projects)
})

// Ruta URL del landing page //

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

// Rutas URL de los proyectos //

app.get('/rockTicket-app', (req, res) => {
  const fileName = 'rockTicket-app.html'
  res.sendFile(path.join(__dirname,'public/views/rockTicket-app',fileName))

})

app.get('/rockTicket-app-web', (req, res) => {
  const fileName = 'rockTicket-app-web.html'
  res.sendFile(path.join(__dirname, 'public/views/rockTicket-app-web', fileName))

})

app.get('/dashboard-contabilidad', (req, res) => {
  const fileName = 'dashboard-contabilidad.html'
  res.sendFile(path.join(__dirname, 'public/views/dashboard-contabilidad', fileName))

})

app.get('/superfresh', (req, res) => {
  const fileName = 'superfresh.html'
  res.sendFile(path.join(__dirname, 'public/views/superfresh', fileName))

})

app.get('/portfolio', (req, res) => {
  const fileName = 'portfolio.html'
  res.sendFile(path.join(__dirname, 'public/views/portfolio', fileName))

})

// app.get('/rockT', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public/views/rockTicked-app/rockTicked-app.html')	)

// })


  // res.sendFile(path.join(__dirname, 'views', 'rockTicket-app', fileName))
  // res.sendFile(path.join(__dirname, 'views', 'rockTicket-app', fileName))
  // res.sendFile(path.join(__dirname, 'views', 'rockTicket-app', fileName))


// app.get('/${projects.id}',async (req, res) =>{
//   const projects = await getProjects()
//   res.sendFile(path.join(__dirname, 'views', '${projects.id}'))

// })

// app.get('/pages/:id',async (req, res) => {
//   const pages = await getPages()
//   res.sendFile(path.join(__dirname, 'views', '${getProjects.projects.id}'))
// })



app.listen(PORT,
  console.log(`Server started on port  http://localhost:${PORT}`)
);


