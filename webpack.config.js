const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: './client/index.js',

    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: './client/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            }
        ]
    },
    devServer: {
        host: 'localhost',
        port: 8080,
        // match the output path
        // static: {
        //   directory: path.resolve(__dirname, 'dist'),
        //   // match the output 'publicPath'
        //   publicPath: '/',
        // },
        // enable HMR on the devServer
        // hot: false,
        // fallback to root for other urls
        // historyApiFallback: false,
        // headers: { 'Access-Control-Allow-Origin': '*' },
        /**
         * proxy is required in order to make api calls to
         * express server while using hot-reload webpack server
         * routes api fetch requests from localhost:8080/api/* (webpack dev server)
         * to localhost:3000/api/* (where our Express server is running)
         */
        proxy: {
          '/**': {
            target: 'http://localhost:3000/',
            secure: false,
          }
        }
      }
}