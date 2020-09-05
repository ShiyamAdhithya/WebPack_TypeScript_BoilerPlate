const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: path.join(__dirname, 'src/scripts/index.ts'),
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
    },
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: [
                {
                    loader: 'ts-loader',
                }
            ],
            exclude: /node_modules/,
          },
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
    new CleanWebpackPlugin({ 
        cleanStaleWebpackAssets: false 
    }),
        new HtmlWebpackPlugin({
            title: 'JS Game Development',
            filename: 'index.html',
            template: './src/index.html',
            minify: false
        }),
    ],
};