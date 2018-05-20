const { resolve } = require('path')

const entryPath = resolve(`${__dirname}/app/src`)
const outPath = resolve(`${__dirname}/dist`)

module.exports = env => {
    return {
        entry: resolve(`${entryPath}/index.js`),
        output: {
            path: outPath,
            filename: 'bundle.js'
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    include: entryPath,
                    loader: 'babel-loader',
                    query: {
                        presets: [
                            'es2015',
                            'react'
                        ]
                    }
                },
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader'
                    ]
                }
            ]
        }
    }
}