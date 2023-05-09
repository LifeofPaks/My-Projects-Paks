const APIURL = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
const exit = document.getElementById("exit");

getUser('florinpop17')

async function getUser(username){
    const resp = await fetch(APIURL + username)
    const respData = await resp.json()

   

    createUserCard(respData)
    getRepos(username)

}

async function getRepos(username){
  const resp = await fetch(APIURL + username + '/repos')
  const respData = await resp.json()
  console.log(respData)
  addReposToCard(respData)
}


function createUserCard(user) {
  const {name, avatar_url, bio, followers, following, public_repos} = user
  const cardHTML = `
        <div class ='card'>
          <i id= 'exit' class="fa-solid fa-circle-xmark"></i>
              <div>
                  <img class = 'avatar' src='${avatar_url}' alt='${name}'/>
              </div>
            <div class = 'user-info'>
                  <h4>${name}</h4>
                  <p>${bio}</p>
              
              <ul class = 'info'>
                  <li>${followers} <strong>Followers</strong></li>
                  <li>${following} <strong>Following</strong></li>
                  <li>${public_repos} <strong>Repos</strong></li>
              </ul>
              <div id ='repos'> </div>
            </div>
        </div>
        `;

  main.innerHTML = cardHTML;
  
}

function addReposToCard(repos){
  const reposEl = document.getElementById('repos')
  repos.slice(0,10).forEach(repo =>{
    const repoEl = document.createElement('a')
    repoEl.classList.add('repo')
    repoEl.href = repo.html_url
    repoEl.target = '_blank'
    repoEl.innerText = repo.name

    reposEl.appendChild(repoEl)
  })

}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = search.value;
  if (user) {
    getUser(user);
    search.value = "";
  }
});

exit.addEventListener('click', ()=>{
  
})

