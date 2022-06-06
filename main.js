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
    
    
    let nameElement = document.createElement('h2')
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
        buildProfile(data)

    })

// // function buildProfile(profileData) {
// //     console.log(profileData)
// //     // create elements and add them to the page
// //     // profileData is the data from the promise
// // }


// function buildProfile(profileData) {
//     profileData.map(function (repo) {
//         reposInfo.appendChild(buildRepoElement(repo.name))
//     })
//     // create elements and add them to the page
//     // profileData is the data from the promise
// }

// function buildProfileLoop(profileData) {
//     // equivalent to buildProfile but uses loops

//     for (let repo of profileData) {
//         reposInfo.appendChild(buildRepoElement(repo.name))
//     }
// }


// function buildRepoElement(name) {
//     let el = document.createElement('p')
//     el.innerText = name;
//     return el
//     // returns a new element for a repo, like a customer
// }