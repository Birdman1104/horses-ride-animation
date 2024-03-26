const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: ['./src/index.ts'],
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js',
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$|\.jsx?$/,
                include: path.join(__dirname, '..', 'src'),
                loader: 'ts-loader',
            },
            {
                test: /\.png/,
                type: 'asset/inline',
            },
            // {
            //   test: /\.css$/,
            //   use: ["style-loader", "css-loader"],
            // },
            // {
            //   test: /\.(png|jpg|mp3)$/,
            //   use: [
            //     {
            //       loader: "file-loader",
            //       options: {
            //         name: "[path][name].[ext]",
            //       },
            //     },
            //   ],
            // },
        ],
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                    filename: '[name].bundle.js',
                },
            },
        },
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            gameName: 'Playable Template',
            template: './index.html',
            filename: 'index.html',
        }),
        new CopyWebpackPlugin({
            patterns: [
                // { from: './src/assets', to: 'assets' }
                { from: './src/assets/assetsNames', to: 'assets/assetsNames' },
                { from: './src/assets/atlas', to: 'assets/atlas' },
                { from: './src/assets/audio', to: 'assets/audio' },
                { from: './src/assets/fonts', to: 'assets/fonts' },
                { from: './src/assets/spines', to: 'assets/spines' },
                // { from: './src/assets/uncompressed', to: 'assets/uncompressed' },
            ],
        }),
    ],
};
