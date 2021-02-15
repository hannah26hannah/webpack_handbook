const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const path = require("path");

module.exports = {
    mode: 'none', 
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: "/node_modules",
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    "css-loader"
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "./dist/"),
        port: 9001,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new HtmlWebPackPlugin({
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            template: './index.html',
            filename: 'index.html'
        })
    ],
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.json', '.jsx', '.css']
    }
}