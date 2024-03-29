const path = require('path');
module.exports = {
    entry: './src/loupe.agent.ts',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
                include: [
                    path.resolve(__dirname, "src")
                ],
            },
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
        filename: 'loupe.typescript.js',
        path: path.resolve(__dirname, 'dist'),
        library: "loupe-typescript",
        libraryTarget: "commonjs",
        globalObject: 'this'
    },
    mode: 'production'
};