const express = require('express');
const app = express();

app.get("/login", (req, res) => {
    eval(req.query.input); // Vulnerable on purpose
    res.send("OK");
});

app.listen(3000);
