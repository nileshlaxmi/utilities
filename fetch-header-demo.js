getApplicationAll = () => {
    fetch(config.getAllApplicationsUrl, {
        method: 'get',
        headers: {
        'Content-type': 'application/json',
        'api_key': config.apiToken
        },
    })
    .then(result => result.json())
    .then(
        (result) => {
            // console.log("JSON", JSON.stringify(result));
            this.setState({ applicationsArray: result })
        },

        (error) => {

        }
    )
}