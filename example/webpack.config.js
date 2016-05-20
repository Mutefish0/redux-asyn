/**
 * 
 * @authors riddleoo (648262030@qq.com)
 * @date    2016-04-23
 */
var webpack = require("webpack");

module.exports={   
    entry:'./src/index.js',
    output:{
        path:'./public',
        publicPath:'./public',
        filename:"bundle.js"
    },
    module:{
        loaders:[
 
            {      
                test    : /\.(js|jsx)$/,
                exclude : /node_modules/,
                loader  : 'babel-loader',
                query:{
                    presets:['es2015','react'],
                    plugins:['transform-class-properties','babel-plugin-transform-object-rest-spread']
                }
            }
            
        ]
    }
}