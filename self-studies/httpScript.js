import { randomBytes } from "crypto";

function generateKey() {
    return randomBytes(8).toString('hex').toUpperCase();
}

const apiKey = generateKey();
const items = await getItemData();

async function getItemData () {
    const response = await fetch('https://api.boot.dev/v1/courses_rest_api/learn-http/items', {
        method: 'GET',
        mode: 'cors',
        headers: {
            'X-API-Key': apiKey,
            'Content-Type': 'application/json'
        }
    });
    return response.json();
}

function logItems(items) {
    console.log(items);
}

logItems(items);

console.log(apiKey);