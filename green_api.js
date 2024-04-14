async function fetchApi(method, body = {}) {
    const idInstance = document.getElementById('idInstance').value;
    const apiTokenInstance = document.getElementById('apiTokenInstance').value;
    const url = `https://api.green-api.com/v2/${idInstance}/${method}`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiTokenInstance}`
        },
        body: JSON.stringify(body)
    });

    const data = await response.json();
    document.getElementById('response').value = JSON.stringify(data, null, 2);
}
