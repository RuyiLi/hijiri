const fs = require('fs');
const url = require('url');
const path = require('path');
const http = require('http');
const Canvas = require('canvas');
const letters = '0123456789ABCDEF';

const randColor = () => {
    let color = ''
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'image/png' });
        const query = url.parse(req.url, true).query;

        const size = +query.size || 640;                      // Width/Height in px
        const blocks = +query.blocks || 6;                    // Number of "blocks"
        const color = '#' + (query.color || randColor());     // Hex color code, without the #
        const bgColor = query.bgColor === 'transparent' ? 'transparent' : ('#' + (query.bgColor || 'ededed'));    // Background color

        const canvas = new Canvas(size, size);
        const ctx = canvas.getContext('2d');

        console.log(`Size: ${size}, blocks: ${blocks}, color: ${color}, bgColor: ${bgColor}`);

        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, size, size);

        ctx.fillStyle = color;
        const blockSize = size / blocks;
        for (let i = 0; i < blocks; i++) {
            const idx = Math.floor(Math.random() * blocks);
            ctx.fillRect(idx * blockSize, i * blockSize, blockSize, blockSize);
            ctx.fillRect((blocks - idx - 1) * blockSize, i * blockSize, blockSize, blockSize);
        }

        canvas.createPNGStream().pipe(res);
    }
})

server.listen(3000, () => {
    console.log('Server started listening on port 3000.');
})