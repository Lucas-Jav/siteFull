const path = require('path')

module.exports = {
    entry: {
        index: './src/js/index.js'
    },
    mode: 'production',
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader']
        }]
    },
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: '[name].min.js'
    }
}