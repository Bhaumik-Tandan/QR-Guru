import { ENV,API_URL } from "@env";
function pushEvent(event) {
    if(ENV!=='production') return;
    console.log("ENV",ENV);
    
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