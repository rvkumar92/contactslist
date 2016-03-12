module.exports= {
    entry: ['./src/index.js'],
    output: {
        path: __dirname,
        filename: 'app/js/contact.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query:{
                    presets: ['es2015','react']
                }
            }
        ]
    }
};