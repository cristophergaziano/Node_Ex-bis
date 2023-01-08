import express from "express";
import "express-async-errors";

const app = express();

app.get("/", (request, response) => {
    response.send("Il server è online");
});

export default app;
