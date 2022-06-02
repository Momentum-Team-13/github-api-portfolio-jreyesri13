console.log('js is connected!')

// let gitHubUrl = 

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

function buildProfile(profileData) {
    console.log(profileData)
    // create elements and add them to the page
    // profileData is the data from the promise
}