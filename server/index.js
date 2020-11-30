const express = require('express');
const proxy = require('http-proxy-middleware');
const path = require('path');
const request = require('request');

const app = express();


app.use('/clspa-gateway', proxy(process.env.API_HOST, {changeOrigin: true}));

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

app.get('/private/health', function(req, res) {
    return req.pipe(request(`${process.env.API_HOST}/private/health`)).pipe(res);
});

app.get('/private/status', function(req, res) {
    return req.pipe(request(`${process.env.API_HOST}/private/status`)).pipe(res);
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/build/index.html`));
});

const port = process.env.PORT || 3000;
app.listen(port);
