import express from "express";
import "express-async-errors";

const app = express();

app.get("/", (request, response) => {
    response.send("Il server è online");
});

const port = 3000;

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});


// Use the techniques you've learnt so far to create your own HTTP server with Express. Your server should:

// Automatically recompile and restart when you make changes
// Have a GET route that sends a JSON response
// Have an integration test for the GET route
// Use an environment variable to configure the server port