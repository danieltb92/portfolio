const projectsEl = document.querySelector('.grid-projects')
// const loadingEl = document.querySelector('#loading')
// let loading = false

const getProjectFromBackend = async () => {
//   loading = true
  // const res = await fetch('http://localhost:5000/projects')
  const res = await fetch('https://daniel-tunjano.onrender.com/projects')
  const data = await res.json()
//   loading = false
  return data
}


const addProjectToDom = async () => {
  const projects = await getProjectFromBackend()
  console.log(projects)

//   if (!loading) {
//     loadingEl.innerHTML = ''
//   }


  projects.forEach((project) => {
    if (project.status === 'Published') {

    const div = document.createElement('article')
    // const a = document.createElement('a')
    // const path = ' /views/ '
    // const at = a.setAttribute('href', path, project.id);

    // div.appendChild(at)
    div.className = 'project-card'
    div.innerHTML = `
        
      <a href ="views/${project.id}/${project.id}.html" target="_blank">
        <img src=" ${project.cover}" alt="imagen proyecto">
        <h3> ${project.title}</h3>
        <div class="divider-card"></div>
        <p>${project.type}</p>
      </a>
    `
    projectsEl.appendChild(div)
    }
  })
}
/*<a href ="/${project.id}.html" target="_blank"><a href ="${project.url}" target="_blank">*/
addProjectToDom();




////////// SIDEBAR ////////////

const sidebarBtn = document.querySelector('.btn-menu');
const closeBtn = document.querySelector('.btn-close');
const sidebar = document.querySelector('.sidebar');
console.log({sidebarBtn,sidebar,closeBtn});

const toggleSidebar = () => {
  sidebar.classList.toggle('active');
}

sidebarBtn.addEventListener('click', toggleSidebar);
closeBtn.addEventListener('click', toggleSidebar);