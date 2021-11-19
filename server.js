const express = require("express");
const path = require("path");
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.post('/login', createProxyMiddleware({ target: 'https://127.0.0.1:5000', changeOrigin: true, secure: false }));
app.post('/liveinterfaces', createProxyMiddleware({ target: 'https://127.0.0.1:5000', changeOrigin: true , secure: false }));
app.post('/interface_stats_ietf', createProxyMiddleware({ target: 'https://127.0.0.1:5000', changeOrigin: true , secure: false }));

app.get('/*', function (req, res) {res.sendFile(path.join(__dirname, 'build', 'index.html'));});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
