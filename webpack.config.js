const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: ["./src/index.ts", "./src/style.css", "./src/animation.css"],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.[hash].js'
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css'
        }),
        new HtmlWebpackPlugin(
            {
                template: "public/index.html"
            }
        ),
        new CopyPlugin([
                {
                    from: 'public/icons',
                    to: 'icons',
                    toType: 'dir',
                },
                {
                    from: 'public/*',
                    to: '',
                    ignore: ['*.html',],
                    flatten: true,
                }
            ]
        ),
        new WorkboxPlugin.GenerateSW(),
    ]
}