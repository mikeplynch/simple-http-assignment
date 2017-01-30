const fs = require('fs');

const spongegar = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getSpongegar = (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'image/png'
    });
    response.end(spongegar, 'binary');
};

module.exports.getSpongegar = getSpongegar;