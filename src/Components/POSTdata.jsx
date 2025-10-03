function sendRequest(url, { arg }) {
    return fetch(url, {
        mode: 'cors',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(arg),
    }).then(res => res.json());
}

export default sendRequest;