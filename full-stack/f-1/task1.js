import path from "path";
import { fileURLToPath } from 'url';

// Fix for __filename and __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Task 1
const scriptFullName = path.resolve(__filename);
console.log(`Executed script full name: ${scriptFullName}`);

const environmentVarCount = Object.keys(process.env).length;
console.log(`Number of environment variables: ${environmentVarCount}`);

const memUse = Math.round(process.memoryUsage().rss / (1024 * 1024) * 100) / 100;
console.log(`Used memory: ${memUse} MB`);

// Task 2
const scriptName = path.resolve('');
console.log(`Resolved script name: ${scriptName}`);

const pathRes = path.resolve('school-class');
console.log(`Resolved path: ${pathRes}`);

import fs from 'fs';
import os from 'os';

// task 3

// Get the path to the home directory and append 'tmp.txt'
const homeDir = os.homedir();
const filePath = path.join(homeDir, 'tmp.txt', "Downloads", "bash_profile");

// Check if the file exists
fs.access(filePath, fs.constants.F_OK, (err) => {
  if (err) {
    console.log('tmp.txt does not exist in the home folder.');
  } else {
    console.log('tmp.txt exists in the home folder.');
  }
});


// task 4, sett opp http server

import http from 'http';

// Define the hostname and port
const hostname = '127.0.0.1';  // localhost
const port = 3000;  // Port number

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Set the response status code and headers
  res.statusCode = 200;  // HTTP status code for OK
  res.setHeader('Content-Type', 'text/plain');  // Response content type

  // Send the response body
  res.end('Hello, World!\n');
});

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


const server1 = http.createServer((req, res) => {
    try {
        if(req.method === "GET" && req.url.startsWith("/msg")) {
            const acceptHeader = req.headers["accept"];
            if(acceptHeader.includes("text/plain")) {
                res.setHeader("content-type", "text/html");
                res.statusCode = 200;
                res.end ("plain text response");
            } else {
                res.setHeader("content-type", "");
                res.statusCode = 200;
                res.end (`you wanted`)
            }

        } else {
            res.statusCode = 404;
            res.end("sug meg")
        }
    } catch (error){
        res.statusCode = 505;
        console.error(error);
        res.end("sug meg harder");
    }
});

module.exports