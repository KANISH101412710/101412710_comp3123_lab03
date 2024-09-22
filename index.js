const http = require("http");
const { getAllEmployees, getEmployeeNames, getTotalSalary } = require('./Employee');

// Define Server Port
const port = process.env.PORT || 8081;

console.log("Lab 03 - NodeJs");

// Create Web Server using CORE API
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    if (req.method !== 'GET') {
        res.writeHead(405);
        return res.end(`{"error": "${http.STATUS_CODES[405]}"}`);
    }

    if (req.url === '/') {
        res.writeHead(200);
        return res.end("<h1>Welcome to Lab Exercise 03</h1>");
    }

    if (req.url === '/employee') {
        res.writeHead(200);
        return res.end(JSON.stringify(getAllEmployees()));
    }

    if (req.url === '/employee/names') {
        res.writeHead(200);
        return res.end(JSON.stringify(getEmployeeNames()));
    }

    if (req.url === '/employee/totalsalary') {
        res.writeHead(200);
        return res.end(JSON.stringify(getTotalSalary()));
    }

    res.writeHead(404);
    res.end(`{"error": "${http.STATUS_CODES[404]}"}`);
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
