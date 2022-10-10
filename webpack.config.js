const path = require("path");

//her flytter vi en fil fra a til b i dette tilfeælde flytter vi vores index.js fil og vi flytter den til mappen build
module.exports = {

        entry: "./src/index.js",

        output: {
            filename: "main.js",
            path: path.resolve(__dirname, "build")
        },
        devtool: "inline-source-map",
        devServer: {
            open: true,
            static: {
                directory: path.join(__dirname, "build")
            },
            port: 3000,
        },

        module: {
            rules: [{
                    test: /\.(css|scss|sass)$/i,
                    use: ['style-loader', 'css-loader', 'sass-loader']
                },
                {
                    test: /\.(png|jpg|jpeg|svg|webp|gif|heic)$/i,
                    type: "asset/resource"
                },
                {
                    test: /\.js$/i,
                    exclude: /(node_modules)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env'
                            ]
                        }
                    }
                }
            ]
        }
    }
    //  npx webpack --config webpack.config.js i terminalen 
    //auto kør config i terminal med npm run dev under script i pakage.jaso insæt ,
    //       "dev": "webpack --watch --mode development"