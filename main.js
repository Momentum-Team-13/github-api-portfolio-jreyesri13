console.log('js is connected!')

const profile = document.querySelector('#profile')
let gitHubUrl = "https://api.github.com/users/jreyesri13/repos"

fetch(gitHubUrl, {
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
        console.log("Response from GitHub API: ", data.name)
        // console log the data
        buildProfile(data)

    })

// function buildProfile(profileData) {
//     console.log(profileData)
//     // create elements and add them to the page
//     // profileData is the data from the promise
// }


function buildProfile(profileData) {
    profileData.map(function (repo) {
        profile.appendChild(buildRepoElement(repo.name))
    })
    // create elements and add them to the page
    // profileData is the data from the promise
}

function buildProfileLoop(profileData) {
    // equivalent to buildProfile but uses loops

    for (let repo of profileData) {
        profile.appendChild(buildRepoElement(repo.name))
    }
}


function buildRepoElement(name) {
    let el = document.createElement('p')
    el.innerText = name;
    return el
    // returns a new element for a repo, like a customer
}