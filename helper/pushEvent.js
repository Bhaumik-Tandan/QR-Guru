function pushEvent(event) {
    if(process.env.ENV!=='production') return;
    const API_URL = process.env.API_URL;
    fetch(`${API_URL}/event`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: event })
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));

}

export default pushEvent;