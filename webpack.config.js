const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry : {
        'js/out.js': './js/index.jsx',
        'css/style.css~': './css/main.scss'
    },
    output : {
        path: __dirname+'/',
        filename: '[name]'
    },
    devServer: {
        inline: true,
        contentBase: './',
        port: 3001,
		filename: "./js/out.js",
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.jsx$/, exclude: /node_modules/,
                loader:	'babel-loader',
                query: {presets: ['env', 'stage-2', 'react']}
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'resolve-url-loader' ,'sass-loader?sourceMap=true', ]
                })

            },
            {
                test: /\.(png|jpg|gif)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            emitFile: true,
                            name: 'assets/[name].[ext]',
                            context: '',
                            publicPath: '../'
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin('./css/style.css')

    ]
};
