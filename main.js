console.log('js is connected!')

let githubUrl = "https://api.github.com/users/jreyesri13"

let githubReposUrl = "https://api.github.com/users/jreyesri13/repos"


const profileInfo = document.querySelector('#profile')

fetch(githubUrl, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
})
    .then(function (response) {
        // the response is the promised data
        return response.json()
        // put the response in JSON format
    })
    .then(function (data) {
        // data refers to what the above promise returned (response.json())
        console.log("Response from GitHub API: ", data)
        // console log the data
        buildProfile(data)

    })



function buildProfile(profileData) {
    let profileElement = document.createElement('div')
    // customerElement.classList.add('customer')


    let imageElement = document.createElement('img')
    imageElement.src = profileData.avatar_url
    imageElement.alt = 'Image of Jose Reyes'
    profileElement.appendChild(imageElement)


    let nameElement = document.createElement('h1')
    nameElement.innerText = `${profileData.name}`
    profileElement.appendChild(nameElement)


    let usernameElement = document.createElement('p')
    usernameElement.classList.add("topStyle")
    usernameElement.innerText = `GitHub Username: ${profileData.login}`
    profileElement.appendChild(usernameElement)


    let urlElement = document.createElement('p')
    urlElement.classList.add("topStyle")
    urlElement.innerText = `GitHub URL: `
    profileElement.appendChild(urlElement)


    let urlLink = document.createElement('a')
    urlLink.classList.add("topStyle")
    urlLink.href = profileData.html_url
    urlLink.target = `_blank`
    urlLink.innerText = `${profileData.login}`
    profileElement.appendChild(urlLink)


    profileInfo.appendChild(profileElement)

}



const reposInfo = document.querySelector('#repos')


fetch(githubReposUrl, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
})
    .then(function (response) {
        // the response is the promised data
        return response.json()
        // put the response in JSON format
    })
    .then(function (data) {
        // data refers to what the above promise returned (response.json())
        console.log("Response from GitHub API: ", data)
        // console log the data
        buildRepos(data)

    })



function buildRepos(repoData) {
    for (let repo of repoData) {
        buildRepoElement(repo)
    }
}


let titleElement = document.createElement('h2')
titleElement.innerText = `GitHub Repos`
reposInfo.appendChild(titleElement)



function buildRepoElement(repoName) {
    let repoElement = document.createElement('div')
    // customerElement.classList.add('customer')


    // let titleElement = document.createElement('h2')
    // titleElement.innerText = `GitHub Repos` 
    // repoElement.appendChild(titleElement)

    let repoUrl = document.createElement('a')
    // repoUrl.classList.add("topStyle")
    repoUrl.innerText = repoName.name
    repoUrl.href = repoName.html_url
    repoUrl.target = `_blank`
    repoElement.appendChild(repoUrl)


    reposInfo.appendChild(repoElement)
}