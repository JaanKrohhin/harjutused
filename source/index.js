let profile = "";
let Name = "";
let Id = "";
let Link = "";
let Repos = "";
 
function RenderPage() {
  document.getElementById("app").innerHTML = `
<div>
  <h1>Github profile viewer</h1>
  <p>Please enter profile name: </p>
  <input id="input" />
  <div class="content">
    <h1 id="name">Name: ${Name} </h1>
    <p id="id">Id: ${Id} | </p>
    <p id="repos">Public repos: ${Repos} </p>
    <a id="profileurl"href="${Link}" target=" blank">Link: ${Name}</a>
  </div>
</div>
    `;
}
 
let fetchProfile = async () => {
  let fetchedData;
 
  await fetch(`https://api.github.com/users/${profile}`)
    .then((response) => response.json())
    .then((data) => (fetchedData = data));
  console.log(fetchedData);
 
  Name = fetchedData.login;
  Id = fetchedData.id;
  Link = fetchedData.html_url;
  Repos = fetchedData.public_repos;
 
  RenderPage();
};
 
RenderPage();
 
const input = document.getElementById("input");
input.addEventListener("change", updateValue);
async function updateValue(e) {
  profile = e.target.value;
  await fetchProfile();
}
