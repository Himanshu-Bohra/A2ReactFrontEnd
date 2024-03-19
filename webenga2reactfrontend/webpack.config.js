var path = require('path');

module.exports = {
    entry: './src/index.js',
    devtool: 'eval-source-map',
    cache: true,
    mode: 'development',
    output: {
        path: 'D:/# USB STORAGE/CPSC 6175 Web Engineering Technology/Assignments/Assignment 2/Assignment2ReactFrontEnd/WebEngA2SpringBackEnd/src/main/resources/',
        filename: 'static/built/bundle.js'
    },
    module: {
        rules: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|eot|otf|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {}
                    }
                ]
            }
        ]
    }
};
