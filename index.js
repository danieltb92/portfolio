// import { getProjects } from "./services/notion"
const express = require('express');
const getProjects = require('./services/notion');
const getPages = require('./services/pages');
const PORT = process.env.PORT || 5000;

const app = express()

app.use(express.static('public'))

// app.use(function (req, res, next) {
//   res.setHeaders({
//     'Content-Security-Policy': 'default-src 'none'; font-src 'self' https://example.com/fonts/;',
//   });
//   next();
// });

app.get('/projects', async (req, res) => {
  const projects = await getProjects()
  res.json(projects)
})

app.get('/rockTicket-app', async (req, res) => {
  const fileName = 'rockTicked-app.html'
  res.sendFile(path.join(__dirname, 'views', fileName))

})

app.use(function (req, res, next) {
  res.setHeaders({
    'Content-Security-Policy': 'default-src 'none';
     script - src "https://api.notion.com"; ',
  });
  next();
});


// app.get('/${projects.id}',async (req, res) =>{
//   const projects = await getProjects()
//   res.sendFile(path.join(__dirname, 'views', '${projects.id}'))

// })

// app.get('/pages/:id',async (req, res) => {
//   const pages = await getPages()
//   res.sendFile(path.join(__dirname, 'views', '${getProjects.projects.id}'))
// })



app.listen(PORT, console.log('Server started on port  http://localhost:5000'));

