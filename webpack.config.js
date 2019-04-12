const path = require('path');
let nodeExternals = require('webpack-node-externals');


module.exports = {
    entry: './src/entry.js',
    externals: [nodeExternals({
        whitelist: ['favicon.js']
    })],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
};
